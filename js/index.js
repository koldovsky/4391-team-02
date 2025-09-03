function init() {
  import("./booking-intro.js");
  import("./video.js");
  import("./game.js");
  import("./checklist.js");
  import("./footer.js");
  import("./testimonials.js");
  import("./contact-banner.js");
  import("./contacts.js");
  import("./offers.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
