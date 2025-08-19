document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.checklist__card');
        const panelId = btn.dataset.panel;
        const panel = document.getElementById(panelId);

        if (!panel) return;

        btn.classList.toggle('toggle-btn--open');
        card?.classList.toggle('checklist__card--open');
        panel.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});