let count = 0;
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

decreaseBtn.addEventListener("click", () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener("click", () => {
    count++;
    updateCounter();
});

function updateCounter() {
    counter.textContent = count;
}
