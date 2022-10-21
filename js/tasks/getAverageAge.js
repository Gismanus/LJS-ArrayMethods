function getAverageAge(users) {
    return Math.round(users.reduce((prev, user) => prev + user.age, 0) / users.length);
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let mosha = { name: "test", age: 29 };
let users = [vasya, petya, masha, mosha]

console.log(getAverageAge(users));