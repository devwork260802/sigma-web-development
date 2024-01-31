console.log('Hello Everyone');

let number=prompt("Enter the Number = ");
let factorial_number=1;

function factorial(number) {
    if (number!=0){
        for (let i = 1; i <= number; i++) {
            factorial_number*=i;
        }
    }
    else{
        factorial_number = 1;
    }
    return factorial_number
}

alert(`Factorial Number of ${number} = ${factorial(number)}`);