const countEl = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increase5Btn = document.getElementById("increase5");
const decrease5Btn = document.getElementById("decrease5");
const toggleNegativeBtn = document.getElementById("toggleNegative");

let count = 0;
let allowNegative = false;

function updateUI() {
    countEl.textContent = count;

    countEl.classList.remove("positive","zero","negative");

    if (count > 0){
        countEl.classList.add("positive");
    }
    else if (count === 0){
        countEl.classList.add("zero");
    }
    else{
        countEl.classList.add("negative");
    }

    if (!allowNegative && count === 0){
        decreaseBtn.disabled = true;
        decrease5Btn.disabled = true;
    }
    else{
        decreaseBtn.disabled = false;
        decrease5Btn.disabled = false;
    }
}

increaseBtn.addEventListener("click",()=>{
    count++;
    updateUI();
});

decreaseBtn.addEventListener("click", ()=> {
    if (allowNegative || count > 0){
        count--;
        updateUI();
    }
    
});

resetBtn.addEventListener("click",()=>{
    count = 0;
    updateUI();
});

increase5Btn.addEventListener("click",()=>{
    count += 5;
    updateUI();
});

decrease5Btn.addEventListener("click",()=>{
    if (allowNegative) {
        count -= 5;
    }
    else {
       if (count >= 5 ){
          count -= 5;
       }
       else {
          count = 0;
       }
    }

    updateUI();
});

toggleNegativeBtn.addEventListener("click", ()=>{
    allowNegative = !allowNegative;
    toggleNegativeBtn.textContent = 
        `Allow Negatives: ${allowNegative ? "ON" : "OFF"}`;

    if (!allowNegative && count < 0){
        count = 0;
    }

    updateUI();
});