// 🚀 Day 41 Challenge: Start Coding! 🚀
//Question 1
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  //Question 2
  let num = 10;
  while (num > 0) {
    console.log(num);
  }
  //Question 3
  function getStr(str: string) {
    let vowel = "aeiouAEIOU";
    for (let char of str) {
      if(vowel.includes(char)){
        console.log(`first vowel found: ${char}`);
        break
      }
      console.log(char);
      
    }
  }
  getStr("Wajahat Ali")