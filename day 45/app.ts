//🚀 Day 45 Challenge: Start Coding! 🚀
//Question 1
let javascriptObject = {
    name: "Wajahat Ali",
    age: 17,
    city: "Karachi",
  };
  console.log(javascriptObject);
  const json = JSON.stringify(javascriptObject);
  console.log(json);
  //Question 2
  const withOutJasonFormat = JSON.parse(json)
  console.log(withOutJasonFormat);
  //Question 3
  javascriptObject = {
    name: "Wajahat Ali",
    age: 17,
    city: "Karachi",
  };
  console.log(javascriptObject);//output is without JSON Format
  let json2 = JSON.stringify(javascriptObject)//Changing
  console.log(json2);