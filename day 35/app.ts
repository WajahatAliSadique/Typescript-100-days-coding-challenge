//🚀 Day 35 Challenge: Start Coding! 🚀
//Question 1
function getRendomNum():boolean{
    return Math.random() > 0.5
}
console.log(getRendomNum());
//Question 2
function getRendomHexColor() {
  const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0');
  return color
}
console.log(getRendomHexColor());
//Question 3
function rollDice(): number{
    return Math.floor(Math.random() * 6) + 1
}
console.log(rollDice());