console.log('Hello Everyone');

let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);
console.log(arr[2]);
console.log(typeof (arr));
console.log(arr.toString());
console.log(arr.join(" - "));
console.log(arr.pop());
console.log(arr.push(5));
console.log(arr.shift());
console.log(arr.unshift(1));
console.log(arr.splice(1, 2, 3, 4));

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

arr.forEach((value, index, array) => {
    console.log(value, index, array);
});

for (const key in arr) {
    if (Object.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(element);
    }
}

for (const iterator of arr) {
    console.log(iterator);
}

// let new_arr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     new_arr.push(element ** 2)
// }
// console.log(new_arr);

let new_arr = arr.map((e)=>{
    return e**2
});
console.log(new_arr);

const greater_than_5=(e)=>{
    if (e>5){
        return true
    }
    return false
}
console.log(new_arr.filter(greater_than_5));

const add=(a,b)=>{
    return a*b
}
console.log(new_arr.reduce(add));

console.log(Array.from("Dev"));