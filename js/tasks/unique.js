function unique(arr){
    let newArr = [];
    for (let element of arr){
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    }
    return newArr;
}

let strings = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

console.log(unique(strings));
