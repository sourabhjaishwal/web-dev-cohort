// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male
let users = [
    {
      name: "Shaam",
      age: 21,
      gender: "Male",
    },
    {
      name: "Nikita",
      age: 18,
      gender: "Female",
    },
    {
      name: "Harsh",
      age: 25,
      gender: "Male",
    },
    {
      name: "Rohita",
      age: 24,
      gender: "Female",
    },
    {
      name: "Rahul",
      age: 16,
      gender: "Male",
    },
  ];

function getUsers(users) {
    // using filter method

    // let filteredUsers = users.filter((users) => users.age >= 18 && users.gender == "Male")
    // return filteredUsers

    // using normal for loop
    let filteredUsers = []
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18 && users[i].gender == "Male") {
            filteredUsers.push(users[i])
        }
    }
    return filteredUsers
}

console.log(getUsers(users))