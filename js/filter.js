/* let results = arr.filter(function(item, index, array){
    // if true item is pushed and iteration continues
    // returns empty array if nothing found
}) */

let users = [
    {id: 1, name: 'John',},
    {id: 2, name: 'Pete',},
    {id: 3, name: 'Mary',},
    {id: 4, name: 'John',},
];

let someUsers = users.filter(i => i.id < 3);

console.log(someUsers)