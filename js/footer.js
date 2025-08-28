const clockContainer = document.querySelector(".footer__clock");
const clockBarFront = document.querySelector(".footer__clock-bar-front");
const form = document.querySelector(".footer__form");
const formSubmit = document.querySelector(".footer__form-submit");

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

if (form && formSubmit) {
  form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');
    if (!emailInput) return;
    const email = emailInput.value;

    try {
      const response = await fetch('https://www.disify.com/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`
      });

      const data = await response.json();

      let message = '';
      if (data.format === false) {
        message = 'Некоректний формат email.';
      } else if (data.disposable === true) {
        message = 'Цей email є тимчасовим (disposable).';
      } else if (data.dns === false) {
        message = 'Домен email не існує.';
      } else {
        message = 'Email виглядає коректно!\nОчікуйте на лист від нас.';
      }
      
      alert(message);
    } catch (error) {
      console.error('Помилка при перевірці email:', error);
    }
  });
}
 