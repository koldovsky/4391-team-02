const clockContainer = document.querySelector(".footer__clock");
const clockBarFront = document.querySelector(".footer__clock-bar-front");

function changeColor() {
  clockContainer.style.transition = "color 0.65s";

  setTimeout(() => {
    clockContainer.style.color = `var(--accent-background-color)`;
  }, 500);

  setTimeout(() => {
    clockContainer.style.color = "";
  }, 1200);
}

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  if (seconds === 59) {
    changeColor();
  }
  const percentage = (seconds / 60) * 100;
  clockBarFront.style.width = `${percentage}%`;

  clockContainer.innerText = now.toLocaleTimeString("uk-UA", {
    hour: "2-digit",
    minute: "2-digit",
  });
}
setInterval(updateClock, 1000);
