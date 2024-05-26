const counterDisplay = document.querySelector('.counter');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');

let counter = 0;

function updateDisplay() {
    counterDisplay.textContent = counter;
}
decreaseBtn.addEventListener('click', () => {
    counter--;
    updateDisplay();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateDisplay();
});

increaseBtn.addEventListener('click', () => {
    counter++;
    updateDisplay();
});
