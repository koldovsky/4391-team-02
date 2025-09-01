const bookingIntroModal = document.getElementById("bookingIntroModal");
const openBookingIntroModalBtn = document.getElementById(
  "openBookingIntroModalBtn"
);
const closeBookingIntroModalBtn = document.getElementById(
  "closeBookingIntroModalBtn"
);
const bookingForm = document.getElementById("bookingForm");
const bookingIntroContent = document.getElementById("bookingIntroContent");
const orderStatusContent = document.getElementById("orderStatusContent");
const orderStatusText = document.getElementById("orderStatusText");
const cancelOrderBtn = document.getElementById("cancelOrderBtn");
const yourNameInput = document.getElementById("yourName");
let orderIsActive = false;

openBookingIntroModalBtn.addEventListener("click", () => {
  if (!orderIsActive) {
    bookingIntroModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
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

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const formIsValid = bookingForm.checkValidity();

  if (formIsValid) {
    bookingIntroModal.classList.remove("show");
    document.body.style.overflow = "auto";

    const userName = yourNameInput.value;
    showOrderStatus(userName);

    orderIsActive = true;

    openBookingIntroModalBtn.disabled = true;
  } else {
    alert("Please fill out all required fields.");
  }
});

cancelOrderBtn.addEventListener("click", () => {
  resetOrderStatus();

  openBookingIntroModalBtn.disabled = false;
});

function showOrderStatus(name) {
  bookingIntroContent.style.display = "none";
  orderStatusContent.style.display = "block";
  orderStatusText.textContent = `Wait for your order, ${name}!`;
}

function resetOrderStatus() {
  bookingIntroContent.style.display = "block";
  orderStatusContent.style.display = "none";
  bookingForm.reset(); 
  orderIsActive = false;
}