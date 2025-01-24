const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");
const rangeSelect = document.getElementById("rangeSelect");
increase.onclick = function(){
    const maxRange = parseInt(rangeSelect.value);
    let randomNum =(Math.random()*maxRange).toFixed(2);
    countLabel.textContent = randomNum;
}
reset.onclick = function(){
    countLabel.textContent = `0.00`;
}