let names = 'Vasya, Pete, Mary';
let arr = names.split(', ');
for (let name of arr) {
    console.log(`messege will got ${name}`);
} // dont works in node.js
let str = arr.join(', ');
console.log(str);