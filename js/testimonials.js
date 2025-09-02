// Початкові дані (сума = 34652)
let ratings = {
  5: 28001,
  4: 6499,
  3: 1003,
  2: 100,
  1: 79
};
const initialRatings = { ...ratings };

function updateRatingUI(currentRatings) {
  let totalVotes = Object.values(currentRatings).reduce((a, b) => a + b, 0);
  let avg = (
    (5 * currentRatings[5] +
     4 * currentRatings[4] +
     3 * currentRatings[3] +
     2 * currentRatings[2] +
     1 * currentRatings[1]) / totalVotes
  ).toFixed(1);

  document.getElementById("average-rating").textContent = avg;
  document.getElementById("total-votes").textContent = totalVotes + " votes";

  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(avg)) stars += "★";
    else if (i - avg <= 0.5) stars += "⯨";
    else stars += "☆";
  }
  document.getElementById("stars").textContent = stars;

  for (let i = 5; i >= 1; i--) {
    let percent = (currentRatings[i] / totalVotes) * 100;
    document.getElementById("bar-" + i).style.width = percent + "%";
    document.getElementById("count-" + i).textContent = currentRatings[i];
  }
}

document.getElementById("user-stars").innerHTML =
  "★★★★★".split("").map((s, i) => `<span data-val="${i+1}">${s}</span>`).join("");

document.getElementById("user-stars").addEventListener("click", (e) => {
  if (e.target.dataset.val) {
    let val = parseInt(e.target.dataset.val);
    [...document.querySelectorAll("#user-stars span")].forEach((star, i) => {
      star.classList.toggle("active", i < val);
    });

    document.getElementById("comment-form").style.display = "block";
  }
});

// Відправка коментаря
document.getElementById("submit-comment").addEventListener("click", () => {
  let text = document.getElementById("comment-text").value.trim();
  if (text) {
    alert("Дякуємо за ваш відгук!\n\n" + text);

    document.getElementById("comment-text").value = "";
    document.getElementById("comment-form").style.display = "none";

    ratings = { ...initialRatings };
    updateRatingUI(ratings);

    [...document.querySelectorAll("#user-stars span")].forEach((star) => {
      star.classList.remove("active");
    });
  } else {
    alert("Будь ласка, напишіть коментар перед відправкою ;)");
  }
});

updateRatingUI(ratings);
