let vasya = { name: 'Vasya', surname: 'Pupkin', id: 1 };
let petya = { name: 'Petya', surname: 'Ivanov', id: 2 };
let masha = { name: 'Masha', surname: 'Petrova', id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
  fullname: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

console.log(usersMapped) // 1;
// console.log(usersMapped[0].id) // 1;
// console.log(usersMapped[0].fullName) // Vasya Pupkin;