const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    contents.forEach((content) => {
      content.classList.remove('active');
      if (content.id === button.dataset.id) {
        content.classList.add('active');
      }
    });
  });
});
