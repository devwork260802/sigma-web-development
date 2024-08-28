console.log('Hello Everyone');

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {
    // let a = await sleep();
    // console.log(a);

    // let [x, y, ...rest] = [1, 5, 7, 5, 6, 7]
    // console.log(x, y, rest);

    let obj = {
        a: 1,
        b: 2,
        c: 4
    }
    let { a, b } = obj
    console.log(a, b);

    let arr = [1, 2, 3]
    console.log(...arr);
})()