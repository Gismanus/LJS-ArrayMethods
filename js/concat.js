let arr = [1, 2];
// console.log(arr.concat(3, 4));
// console.log(arr.concat([3, 4], [5, 6]));
let arrayLike = {
    0: 'something',
    1: 'else',
    [Symbol.isConcatSpreadable]: true,
    length: 2,
}
console.log(typeof arr);
console.log(typeof arr.concat(arrayLike));