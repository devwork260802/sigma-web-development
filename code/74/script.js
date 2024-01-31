console.log('Hello Everyone');

let btn = document.querySelector(".btn");
let random_number;

// btn.addEventListener("click", () => {
// btn.addEventListener("dblclick", () => {
//     random_number = Math.floor(Math.random() * 1000000)
//     document.querySelector(".box").style.backgroundColor = `#${random_number}`;
// })

// document.addEventListener("keydown", (e) => {
//     console.log(e.key);
// })

document.querySelector(".box").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("box div");
})

// document.querySelector(".container").addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("container div");
// })

let box = document.querySelector(".container").children;
function get_random_color() {
    let hex_number = Math.floor(Math.random() * 1000000)
    return `#${hex_number}`
}
// let this_number = setInterval(() => {
//     Array.from(box).forEach(e => {
//         e.style.backgroundColor = get_random_color();
//         e.style.color=get_random_color()
//     });
// }, 500);

let this_number = setTimeout(() => {
    Array.from(box).forEach(e => {
        e.style.backgroundColor = get_random_color();
        e.style.color=get_random_color()
    });
}, 2000);

console.log(this_number)