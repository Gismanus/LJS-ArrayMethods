let arr = [5, 2, 1, -10, 10, 8];

function compareNumeric(a, b) {
    return a > b ? 1 : a == b ? 0 : a < b ? -1 : true;
}

arr.sort(compareNumeric);

console.log(arr);