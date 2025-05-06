// 1. Write a function that takes a `user` as an input and greets them with their name and age
function greet(user) {
  console.log(`Hello ${user.firstName}, you are ${user.age} years old!`);
}

let user = {
  firstName: "Sourabh",
  age: 24,
};

greet(user);


// 2. Write a function that takes a new object as input which has `name` , `age`  and `gender` and greets the user with their gender (Hi `Mr/Mrs/Others` harkirat, your age is 21)
let newUser1 = {
  name: "Jakob",
  age: 25,
  gender: "Male",
};

function greetUserByGender(user) {
  if (user.gender === "Male") {
    console.log(`Hi Mr ${user.name}, your age is ${user.age}`);
  }
  if (user.gender === "Female") {
    console.log(`Hi Mrs ${user.name}, your age is ${user.age}`);
  } else {
    console.log(`Hi ${user.name}, your age is ${user.age}`);
  }
}

greetUserByGender(newUser1);


// 3. Also tell the user if they are legal to vote or not
function greetUserByAge(user) {
  if (user.gender == "Male") {
    if (canVote(user.age)) {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are eligible to Vote.`
      );
    } else {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are not eligible to Vote.`
      );
    }
  }
  if (user.gender == "Female") {
    if (canVote(user.age)) {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are eligible to Vote.`
      );
    } else {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are not eligible to Vote.`
      );
    }
  } else {
    if (canVote(user.age)) {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are eligible to Vote.`
      );
    } else {
      console.log(
        `Hi ${user.name}, your age is ${user.age} and your are not eligible to Vote.`
      );
    }
  }
}

function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let user2 = {
  name: "Kimi",
  age: 18,
  gender: "Male",
};

greetUserByAge(user2)