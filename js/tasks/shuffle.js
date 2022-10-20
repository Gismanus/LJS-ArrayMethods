/* function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
} */

function shuffle(arr){
    for (let i = arr.length - 1; i>0;i--){
        let j = Math.floor(Math.random()*(i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
} // The Fisher–Yates shuffle works just like the normal method

let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '312': 0,
    '321': 0,
}
for (let i = 0; i < 10000; i++) {
    let arr = [1, 2, 3];
    arr.sort(() => Math.random() - 0.5);
    count[arr.join('')]++;
}
console.log(count);