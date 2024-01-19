console.log('Hello Everyone');

// Callback

// console.log('Start');
// setTimeout(() => {
//     console.log("Middle");
// }, 2000);
// console.log('The End');
// const callback=(arg) => {
//   console.log(arg);
// }
// const load_script = (src, callback) => {
//     let script=document.createElement("script");
//     script.src=src;
//     src.onload=callback("Dev");
//     document.head.append(src)
// }
// load_script("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// Promises

let prom_1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject("Rejected")
    }
    else {
        setTimeout(() => {
            console.log('Yes Done');
            resolve("Dev")
        }, 3000);
    }
});

prom_1.then((a) => {
    console.log(a);
}).catch((error) => {
    console.log(error);
}
)