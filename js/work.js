const workBlock = document.querySelector(".work");
let scrollTimeout;
let animationFrame;
let bgY = 0;
let isAnimating = false;


function animateBackground() {
  bgY += 0.35; 
  workBlock.style.backgroundPosition = `center ${bgY}px`;
  animationFrame = requestAnimationFrame(animateBackground);
  isAnimating = true;
}


function stopAnimation() {
  cancelAnimationFrame(animationFrame);
  isAnimating = false;
}


window.addEventListener("scroll", () => {
  stopAnimation();

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    
    if (!isAnimating) animateBackground();
  }, 150);
});


animateBackground();