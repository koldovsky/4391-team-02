(() => {
  const root = document.getElementById("cleaning-game");
  if (!root) return;

  // Elements
  const viewport = root.querySelector(".game__viewport");
  const ground = root.querySelector(".game__ground");
  const playerEl = root.querySelector(".game__player");
  const obstaclesLayer = root.querySelector(".game__obstacles");
  const scoreValueEl = root.querySelector(".game__score-value");
  const startBtn = root.querySelector('[data-action="start"]');

  const rewardModal = root.querySelector('.game__modal[data-modal="reward"]');
  const gameoverModal = root.querySelector(
    '.game__modal[data-modal="gameover"]'
  );
  const couponCodeEl = root.querySelector(".game__coupon-code");
  const finalScoreEl = root.querySelector(".game__final-score");

  // Config (can be tweaked via data-*)
  const THRESHOLD = parseInt(root.dataset.discountThreshold || "100", 10);
  const MAX_DISCOUNT = Math.min(
    25,
    parseInt(root.dataset.maxDiscount || "25", 10)
  );
  const PROVIDED_CODES = safeParseJSON(root.dataset.discountCodes) || null;

  // Game state
  let running = false;
  let paused = false;
  let score = 0;
  let rewardGiven = false;

  // Player physics (arcade-style)
  let plyY = 0; // height above baseline (px)
  let plyVy = 0; // velocity
  const GRAVITY = 0.6;
  const JUMP_FORCE = 12;
  const PLAYER_BASELINE = parseInt(getComputedStyle(ground).height, 10); // ~42
  const PLAYER_LEFT = 56;

  // Obstacles
  const EMOJI = ["🧹", "🧽", "🪣", "🧼", "🧴", "🧺"];
  let obstacles = [];
  let lastSpawn = 0;
  let spawnGap = randInt(850, 1400); // ms
  let baseSpeed = 6; // px/frame baseline

  // Utilities
  function safeParseJSON(s) {
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  }
  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }
  function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function choose(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // Controls
  function jump() {
    if (!running || paused) return;
    if (plyY <= 0) {
      // on ground
      plyVy = JUMP_FORCE;
    }
  }

  function startGame() {
    // reset
    score = 0;
    rewardGiven = false;
    plyY = 0;
    plyVy = 0;
    baseSpeed = 6;
    obstacles.forEach((o) => o.el.remove());
    obstacles = [];
    lastSpawn = performance.now();
    spawnGap = randInt(850, 1400);
    scoreValueEl.textContent = "0";
    running = true;
    paused = false;
    startBtn.disabled = true;
  }

  function gameOver() {
    running = false;
    paused = true;
    finalScoreEl.textContent = String(score);
    openDialog(gameoverModal);
    startBtn.disabled = false;
  }

  function maybeGiveReward() {
    if (rewardGiven) return;
    if (score >= THRESHOLD) {
      rewardGiven = true;
      const code = makeDiscountCode();
      couponCodeEl.textContent = code;
      openDialog(rewardModal);
      paused = true; // pause while showing reward
    }
  }

  function makeDiscountCode() {
    if (Array.isArray(PROVIDED_CODES) && PROVIDED_CODES.length) {
      return choose(PROVIDED_CODES);
    }
    // Generate a percent in {5,10,15,20,25} capped by MAX_DISCOUNT
    const allowed = [5, 10, 15, 20, 25].filter((p) => p <= MAX_DISCOUNT);
    const pct = choose(allowed);
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `CLEAN${pct}-${suffix}`;
  }

  // Dialog helpers (with <dialog> fallback)
  function openDialog(dlg) {
    if (dlg.showModal) dlg.showModal();
    else dlg.setAttribute("open", "");
  }
  function closeDialog(dlg) {
    if (dlg.close) dlg.close();
    else dlg.removeAttribute("open");
  }

  // Obstacle creation
  function spawnObstacle() {
    const el = document.createElement("div");
    el.className = "game__obstacle";
    el.textContent = choose(EMOJI);

    // start just outside right edge
    const vpRect = viewport.getBoundingClientRect();
    const xStart = vpRect.width + 20;
    const yBase = PLAYER_BASELINE; // align with ground line

    el.style.transform = `translateX(${xStart}px)`;
    el.style.bottom = `${yBase}px`;
    obstaclesLayer.appendChild(el);

    obstacles.push({
      el,
      x: xStart,
      passed: false,
    });
  }

  // Loop
  let raf = null;
  let lastT = 0;
  function loop(t) {
    raf = requestAnimationFrame(loop);
    const dt = t - lastT;
    lastT = t;

    if (!running || paused) return;

    // Player physics (frame-based)
    plyVy -= GRAVITY;
    plyY = Math.max(0, plyY + plyVy);
    if (plyY <= 0) {
      plyY = 0;
      plyVy = 0;
    }
    playerEl.style.transform = `translateY(${-Math.round(plyY)}px)`;

    // Spawn logic (ms-based)
    if (t - lastSpawn > spawnGap) {
      spawnObstacle();
      lastSpawn = t;
      spawnGap = randInt(700, 1200);
    }

    // Speed scales slightly with score
    const speed = baseSpeed + Math.min(6, Math.floor(score / 50));

    // Move obstacles, check pass & collisions
    const playerRect = playerEl.getBoundingClientRect();
    obstacles.forEach((o) => {
      o.x -= speed;
      o.el.style.transform = `translateX(${Math.round(o.x)}px)`;

      const r = o.el.getBoundingClientRect();

      // Scoring when obstacle passes player center
      if (!o.passed && r.left + r.width < playerRect.left) {
        o.passed = true;
        score += 1;
        scoreValueEl.textContent = String(score);
        maybeGiveReward();
      }

      // Collision (AABB)
      if (rectsOverlap(playerRect, r)) {
        gameOver();
      }
    });

    // Clean up off-screen obstacles
    obstacles = obstacles.filter((o) => {
      if (o.x < -100) {
        o.el.remove();
        return false;
      }
      return true;
    });
  }

  function rectsOverlap(a, b) {
    return !(
      a.right < b.left ||
      a.left > b.right ||
      a.bottom < b.top ||
      a.top > b.bottom
    );
  }

  // Input
  startBtn.addEventListener("click", () => {
    if (!running) startGame();
  });

  // keyboard: Space / ArrowUp
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "ArrowUp") {
      e.preventDefault();
      if (!running) startGame();
      jump();
    }
  });

  // click/touch anywhere in viewport to jump
  viewport.addEventListener("pointerdown", () => {
    if (!running) startGame();
    jump();
  });

  // Reward modal buttons
  root
    .querySelector('[data-action="copy"]')
    ?.addEventListener("click", async () => {
      const code = couponCodeEl.textContent || "";
      try {
        await navigator.clipboard.writeText(code);
        // tiny visual feedback
        const btn = root.querySelector('[data-action="copy"]');
        if (btn) {
          const txt = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = txt), 900);
        }
      } catch {}
    });

  root
    .querySelector('[data-action="close-reward"]')
    ?.addEventListener("click", () => {
      closeDialog(rewardModal);
      paused = false;
    });

  root
    .querySelector('[data-action="restart"]')
    ?.addEventListener("click", () => {
      closeDialog(gameoverModal);
      startGame();
    });

  // Start loop
  lastT = performance.now();
  raf = requestAnimationFrame(loop);

  // Accessibility note for screen readers
  playerEl.setAttribute("aria-label", "Panda. Press Space or tap to jump.");

  // Close modal on click of the cross button
  root
    .querySelector('[data-action="close-gameover"]')
    ?.addEventListener("click", () => {
      const dlg = root.querySelector('.game__modal[data-modal="gameover"]');
      if (dlg.close) dlg.close();
      paused = false; // resume the game if needed
    });

  // Close modal on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      const dlg = root.querySelector('.game__modal[data-modal="gameover"]');
      if (dlg.open) dlg.close();
      paused = false;
    }
  });
})();
