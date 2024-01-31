console.log('Hello Everyone');

let box = document.getElementsByClassName('box');
console.log(box);

box[2].style.backgroundColor = "green";

document.getElementById("box-2").style.backgroundColor = "red";

document.querySelector(".box").style.backgroundColor = "yellow";
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "pink";
});

for (let i = 0; i < document.querySelectorAll(".box").length; i++) {
    const element = document.querySelectorAll(".box")[i];
    element.style.backgroundColor="red";
}