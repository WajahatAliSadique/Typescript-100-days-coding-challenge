// 🚀 Day 20 Challenge: Start Coding! 🚀
// Question 1
function averageNum(...Score: number[]) {
    let total = Score.reduce((acc, currval) => acc + currval, 0);
    return total / Score.length;
    }
    console.log(averageNum(80, 90, 100, 70));
    //Question
    function makeAdder(valueToAdd: number): (number) => number {
    return function (number: number): number {
        return number + valueToAdd;
    };
    }
    let addSeven = makeAdder(7);
    console.log(addSeven(10));
    //Question 3
    let userProfile = (() => {
    let name = "Wajahat Ali";
    let age = "17";
    return {
        displayInfo: () => {
        console.log(`Name: ${name} , Age: ${age}`);
        },
    };
    })();
    userProfile.displayInfo();