const bookingIntroModal = document.getElementById("bookingIntroModal");
const openBookingIntroModalBtn = document.getElementById(
  "openBookingIntroModalBtn"
);
const closeBookingIntroModalBtn = document.getElementById(
  "closeBookingIntroModalBtn"
);

openBookingIntroModalBtn.addEventListener("click", () => {
  bookingIntroModal.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeBookingIntroModalBtn.addEventListener("click", () => {
  bookingIntroModal.classList.remove("show");
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === bookingIntroModal) {
    bookingIntroModal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
