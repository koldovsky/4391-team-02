document.addEventListener('DOMContentLoaded', () => {
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const closeModalBtn = document.querySelector('.js-close-modal');
  const modal = document.querySelector('.js-modal');

  const openModal = () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = ''; 
  };

  // Перебираем все кнопки, которые должны открывать модальное окно
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Обработчик нажатия на кнопку закрытия (X)
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  // Обработчик закрытия по клику вне модального контента
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Обработчик закрытия по нажатию клавиши Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});