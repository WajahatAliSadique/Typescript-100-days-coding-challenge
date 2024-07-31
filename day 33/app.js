"use strict";
//🚀 Day 33 Challenge: Start Coding! 🚀
//Question 1
function creatDate() {
    let now = new Date();
    let date = String(now.getDate()).padStart(2, '0');
    let month = String(now.getMonth()).padStart(2, '0');
    let year = now.getFullYear();
    return `${date}-${month}-${year}`;
}
console.log(creatDate());
//Question 2
function daysUntilNewYear() {
    let runingYear = new Date();
    let newYear = new Date(runingYear.getFullYear() + 1, 0, 1);
    let diff = newYear.getTime() - runingYear.getTime();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " days until new year.");
//Question 3
function getNextBrithday(month, date) {
    let today = new Date();
    let year = today.getFullYear();
    let brithday = new Date(year, month - 1, date);
    if (brithday < today) {
        brithday.setFullYear(year + 1);
    }
    return brithday;
}
;
let nextBrithday = getNextBrithday(4, 19);
console.log("Next Brithday on", nextBrithday.toLocaleDateString());
