// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about `filter` in JS
function returnArray(numbers) {
  // let newNumbers = numbers.filter((number) => number % 2 === 0);
  // return newNumbers

  // using for loop, no filter method.
  let evenNumbers = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

let newArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
console.log(returnArray(newArr));
