console.log('Hello Everyone');

console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").outerHTML);

// document.querySelector(".container").hidden=true;

document.querySelector(".box").hasAttribute("style");
document.querySelector(".box").getAttribute("style");
document.querySelector(".box").setAttribute("style","background-color: red");
document.querySelector(".box").removeAttribute("style");

document.designMode="on";
document.designMode="off";

console.log(document.querySelector(".container").dataset);

let div=document.createElement('div');
div.innerHTML="New"
div.setAttribute("class","new-box box");
document.querySelector(".container").append(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);

document.querySelector(".container").insertAdjacentHTML("beforeend","<p>hello</p>");

// document.querySelector(".box").remove();

console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").className);

console.log(document.querySelector(".box").classList.add("new"));
console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").classList.remove("box"));
console.log(document.querySelector(".box").classList);
console.log(document.querySelector(".box").classList.toggle("red"));
