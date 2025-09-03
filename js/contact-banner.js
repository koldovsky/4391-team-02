const phone = document.querySelector(".contact-banner__phone-number");
let pos = 0;

function animateLight() {
  phone.style.backgroundPosition = `${pos}% 50%`;
  pos = (pos + 1) % 200;
  requestAnimationFrame(animateLight);
}

animateLight();
