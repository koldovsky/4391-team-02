document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".testimonials__track");
  const slides = document.querySelectorAll(".testimonials__slide");
  const prevBtn = document.querySelector(".testimonials__button--prev");
  const nextBtn = document.querySelector(".testimonials__button--next");
  const carousel = document.querySelector(".testimonials__carousel");

  let currentIndex = 0;
  let autoplayInterval;

  function updateSlide() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nextSlide();
    resetAutoplay();
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    prevSlide();
    resetAutoplay();
  });

  window.addEventListener("resize", updateSlide);

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 7000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  updateSlide();
  startAutoplay();
});