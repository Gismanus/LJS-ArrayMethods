let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let mosha = { name: "test", age: 29 };
let lol = { name: "test", age: -2 };

let users = [vasya, petya, masha, mosha, lol];

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}


sortByAge(users);

for (let user of users){
    console.log(user.age);
}