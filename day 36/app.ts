//🚀 Day 36 Challenge: Start Coding! 🚀
function getYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          console.log(`${year} : Leap Year`);
        } else {
          console.log(`${year} : No Leap Year`);
        }
      } else {
        console.log(`${year} : Leap Year`);
      }
    } else {
      console.log(`${year} : NO Leap Year`);
    }
  }
  getYear(2024)
  //Questionn 2
  function getNum(num:number):boolean{
  return num%2 === 0 && num%3 === 0
  } 
  console.log(getNum(12));
  //Question 3
  function getString(str1:string , str2:string):boolean{
    return str1.toLowerCase() === str2.toLowerCase()
  }
  console.log(getString("HELLO" , "hello"));
  console.log(getString("hELLo" , "HeLLo"));