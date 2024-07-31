//🚀 Day 43 Challenge: Start Coding! 🚀
//Question 1
//output same but syntax is different.
const traditionalFunction = function (a, b) {
    return a + b;
  };
  //output same but syntax is different.
  const arrowFunction = (a, b) => {
    return a + b;
  };
  console.log(traditionalFunction(5, 3)); //output is 8
  console.log(arrowFunction(5, 3)); //output is 8
  //Question 2
  const getMultipleParameter = (...numbers: number[]) => {
    return numbers.reduce(
      (accumulatorVal, currentVal) => accumulatorVal + currentVal,
      0
    );
  };
  console.log(getMultipleParameter(2, 3, 4));
  //Question 3
  const traditionalVrArrowFunction = {
    value: "traditionalVrArrowFunction Value",
    traditionalFunction: function () {
      console.log(`Traditional Funtion ${this.value}`);
    },
    arrowFunction: () => {
      console.log(`Arrow Function ${this.value}`);
    },
  };
  traditionalVrArrowFunction.traditionalFunction();
  traditionalVrArrowFunction.arrowFunction();