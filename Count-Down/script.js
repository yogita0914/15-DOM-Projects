let endDate = new Date("2024-06-03T11:30:00");
let inputs = document.querySelectorAll(".input");

const clock = () => {
    let now = new Date();
    let diff = (endDate - now) / 1000;

    if (diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24);
    inputs[2].value = Math.floor((diff / 60) % 60);
    inputs[3].value = Math.floor(diff % 60);
};

setInterval(() => {
    clock();
}, 1000);