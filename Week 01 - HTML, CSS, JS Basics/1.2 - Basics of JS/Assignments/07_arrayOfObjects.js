// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old
let users = [
    { name: "Rahul", age: 26 },
    { name: "Krutik", age: 17 },
    { name: "Harsh", age: 25 },
    { name: "Raj", age: 15 },
    { name: "Sourabh", age: 24 },
  ];

function getUsers(user) {
    let adultUsers = user.filter((user) => user.age >= 18)
    return adultUsers
}

console.log(getUsers(users))