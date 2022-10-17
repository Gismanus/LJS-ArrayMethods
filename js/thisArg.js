let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user){
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30},
];

// let soldiers = users.filter(army.canJoin, army);
let soldiers = users.filter(user => army.canJoin(user))
console.log(soldiers);