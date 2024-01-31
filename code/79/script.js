console.log('Hello Everyone');

let num_1 = prompt("Enter Number 1");
let num_2 = prompt("Enter Number 2");

if (isNaN(num_1) || isNaN(num_2)){
    throw SyntaxError("Not Allowed")
}
let sum = parseInt(num_1) + parseInt(num_2);

try {
    alert(" = "+sum*x);    
} catch (error) {
    alert('Error');
} finally {
    alert('Done')
}

