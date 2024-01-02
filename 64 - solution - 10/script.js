console.log('Hello Everyone');

let random_number;
let first_name, second_name, third_name;

random_number = Math.random();
if (random_number < 0.33) {
    first_name = "Crazy";
} else if (random_number > 0.33 && random_number < 0.66) {
    first_name = "Amazing";
} else if (random_number > 0.66 && random_number < 1) {
    first_name = "Fire";
}

random_number = Math.random();
if (random_number < 0.33) {
    second_name = "Engine";
} else if (random_number > 0.33 && random_number < 0.66) {
    second_name = "Foods";
} else if (random_number > 0.66 && random_number < 1) {
    second_name = "Garments";
}

random_number = Math.random();
if (random_number < 0.33) {
    third_name = "Bros";
} else if (random_number > 0.33 && random_number < 0.66) {
    third_name = "Limited";
} else if (random_number > 0.66 && random_number < 1) {
    third_name = "Hub";
}

console.log(first_name+" "+second_name+" "+third_name)