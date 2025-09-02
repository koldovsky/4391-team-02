function applyContactsStatus(root = document) {
  const mount = root.querySelector("#contacts-status");
  if (!mount) return;

  const now = new Date();
  const hour = now.getHours();
  const openHour = 9;
  const closeHour = 18;

  const isOpen = hour >= openHour && hour < closeHour;

  const labelOpen = `✅ We are open now! Call us!\n(until ${String(closeHour).padStart(2, "0")}:00)`;
  const labelClose = `❌ We are closed now. Leave us an email!\n(open at ${String(openHour).padStart(2, "0")}:00)`;

  mount.innerHTML = "";
  mount.className = "contacts__status";

  const box = document.createElement("div");
  Object.assign(box.style, {
    display: "inline-block",
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid",
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 1px 3px rgba(0,0,0,.08)",
    lineHeight: "1.4",
    whiteSpace: "pre-line",
  });

  box.textContent = isOpen ? labelOpen : labelClose;
  box.classList.add(isOpen ? "contacts__status--open" : "contacts__status--closed");

  mount.appendChild(box);
}

applyContactsStatus(document);
