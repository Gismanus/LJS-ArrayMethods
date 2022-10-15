// let arr = ['I', 'study', 'JavaScript', 'right', 'now'];

//arr.splice(1, 1); // from index 1 remove 1

/* let removed = arr.splice(0, 3, "Let's", "dance"); // from index 0 remove 3 and add "Let's" & "dance"
console.log(arr);
console.log(removed); */

/* arr.splice(2, 0, 'complex', 'language');
console.log(arr) */

// negative indexes are allowed

let arr = [1, 2, 5];

arr.splice(-1, 0, 3, 4);
console.log(arr)