console.log('Hello Everyone');

let random=Math.random();

let number_1=prompt("Enter the Number 1 = ");
let number_2=prompt("Enter the Number 2 = ");
let operation=prompt("Enter operation = ");

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
}

if (random>0.1) {
    alert(`Result = ${eval(`${number_1} ${operation} ${number_2}`)}`);
}else{
    operation=obj[operation];
    alert(`Result = ${eval(`${number_1} ${operation} ${number_2}`)}`);
}