function getRandomColor() {
    const hexCharacters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    document.querySelector('.color').textContent = color;
}

document.querySelector('.btn').addEventListener('click', () => {
    const newColor = getRandomColor();
    changeBackgroundColor(newColor);
});

document.querySelector('.default').addEventListener('click', (event) => {
    event.preventDefault(); 
    const defaultColor = '#cabfbf';
    changeBackgroundColor(defaultColor);
});

document.querySelector('.simple').addEventListener('click', (event) => {
    event.preventDefault(); 
    const defaultColor = '#f2f6f9';
    changeBackgroundColor(defaultColor);
});
