document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.querySelector('.cross-modal-btn');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
