// 1. Write a function sum that finds the sum of two numbers.
function sum(a, b) {
  let total = a + b;
  return total;
}

let ans = sum(5, 2);
console.log(`The sume of two numbers are: ${ans}`); // 7


// 2. Side quest - Try passing in a string instead of a number and see what happens?
let ansString1 = sum(2, "hi");
console.log(ansString1); // 2hi

let ansString2 = sum("4", "6");
console.log(ansString2); // 46


// 3. Write a function called canVote that returns true or false if the age of a user is > 18
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let checkAge = canVote(18);
console.log(checkAge); // 18
