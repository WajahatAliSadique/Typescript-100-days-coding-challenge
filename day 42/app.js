"use strict";
//🚀 Day 42 Challenge: Start Coding! 🚀
//Qyestion 1
let person = {
    name: "Wajahat Ali",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName());
//Question 2
let propertiesOfCar = {
    carName: "Land Cruiser",
    carCompany: "Toyota",
    getcarinfo: function () {
        return `Car Name: ${this.carName} , Car Company: ${this.carCompany}`;
    }
};
console.log(propertiesOfCar.getcarinfo());
//Question 3
let mainObj = {
    property: "Value",
    outerMethod: function () {
        console.log(this.property);
        const innerMethod = () => {
            console.log(this.property);
        };
        innerMethod();
    },
};
mainObj.outerMethod();
