console.log('Hello Everyone');

// 1st Method
// let random_number;

// random_number = Math.floor(Math.random() * 1000000)
// document.body.childNodes[1].childNodes[1].style.backgroundColor=`#${random_number}`;

// random_number = Math.floor(Math.random() * 1000000)
// document.body.childNodes[1].childNodes[3].style.backgroundColor=`#${random_number}`;

// random_number = Math.floor(Math.random() * 1000000)
// document.body.childNodes[1].childNodes[5].style.backgroundColor=`#${random_number}`;

// random_number = Math.floor(Math.random() * 1000000)
// document.body.childNodes[1].childNodes[7].style.backgroundColor=`#${random_number}`;

// random_number = Math.floor(Math.random() * 1000000)
// document.body.childNodes[1].childNodes[9].style.backgroundColor=`#${random_number}`;

// 2nd Method
let box = document.querySelector(".container").children;
function get_random_color() {
    let hex_number = Math.floor(Math.random() * 1000000)
    return `#${hex_number}`
}
Array.from(box).forEach(e => {
    e.style.backgroundColor = get_random_color();
});
