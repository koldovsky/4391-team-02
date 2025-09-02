document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("contacts-status");
  if (!el) return;

  const now = new Date();
  const hour = now.getHours();

  const openHour = 0;
  const closeHour = 24;

  if (hour >= openHour && hour < closeHour) {
    el.textContent = "✅ We are open now!";
    el.classList.add("contacts__status--open");
  } else {
    el.textContent = "❌ We are closed now. Leave us an email!";
    el.classList.add("contacts__status--closed");
  }
});
