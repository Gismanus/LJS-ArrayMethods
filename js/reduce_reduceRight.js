/* let value = arr.reduce(function(accumulator, item, index, array){
    // ...
}, [initial]); */

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => {
    console.log(`${sum}, ${current}`);
    return sum + current;    
});
let resultRight = arr.reduceRight((sum, current) => {
    console.log(`${sum}, ${current}`);
    return sum + current;    
});

console.log(result);
console.log(resultRight);