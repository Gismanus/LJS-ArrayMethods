/* let result = arr.find(function(item, index, array){
    // if true is returned, item is returned and iteration is stopped
    // for folsy scenario returnes undefined
}); */

let users = [
    {id: 1, name: 'John',},
    {id: 2, name: 'Pete',},
    {id: 3, name: 'Mary',},
    {id: 4, name: 'John',},
];

let user = users.find(item => item.id == 1);
console.log(user);

let userJ1 = users.findIndex(user => user.name == 'John');
console.log(userJ1);
let userJ4 = users.findLastIndex(user => user.name == 'John');
console.log(userJ4);
