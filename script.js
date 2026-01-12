const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click",()=>{
    count++;
    countEl.textContent = count;
});

decreaseBtn.addEventListener("click", ()=> {
    count--;
    countEl.textContent = count;
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    countEl.textContent = count;
});