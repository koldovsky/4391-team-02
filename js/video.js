const modal = document.getElementById("cleaning-video__modal");
const openBtn = document.getElementById("cleaning-video__open");
const closeBtn1 = document.getElementById("cleaning-video__close");
const closeBtn2 = document.getElementById("cleaning-video__close2");
const iframe = document.getElementById("cleaning-video__iframe");
const iframeSrc = iframe.src;

openBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

function closeModal() {
  modal.classList.remove("show");
  iframe.src = "";
  iframe.src = iframeSrc;
}

closeBtn1.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
