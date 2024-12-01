// Открытие/закрытие модального окна
document.addEventListener('DOMContentLoaded', () => {
    const rulesButton = document.getElementById('rulesButton');
    const rulesModal = document.getElementById('rulesModal');
    const closeModal = rulesModal.querySelector('.close');

    // Показать модальное окно
    rulesButton.addEventListener('click', () => {
        rulesModal.style.display = 'flex';
    });

    // Закрыть модальное окно
    closeModal.addEventListener('click', () => {
        rulesModal.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне его
    window.addEventListener('click', (event) => {
        if (event.target === rulesModal) {
            rulesModal.style.display = 'none';
        }
    });
});
