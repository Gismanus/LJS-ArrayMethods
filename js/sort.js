let arr = [1, 2, 15];

console.log(arr.sort());

function compare(a, b) {
    return a > b ? 1 : a == b ? 0 : a < b ? -1 : false;
}
// console.log(arr.sort(compare));
console.log(arr);

arr.sort((a, b) => { return a - b })
console.log(arr);
