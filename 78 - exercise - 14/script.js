console.log('Hello Everyone');

async function hacking() {
    let server_res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await server_res.text()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            resolve(200)
        }, 5000);
    })
}

function logWithDelay(value, delay) {
    setTimeout(() => {
      console.log(value);
    }, delay);
}

async function main() {
    logWithDelay('Initializing Hacking...', 2000);
    logWithDelay("Scanning Files...", 4000);
    logWithDelay('Reading Files...', 6000);
    let data = await hacking()
    logWithDelay("Password Files Detected...", 8000);
    logWithDelay("Decrypting...", 9000);
    let pass_data = await hacking()
    logWithDelay('Sending Files...', 20000);
    logWithDelay('Formatting System...', 25000);
    logWithDelay('Good Bye and I LOve You', 30000);
}

main()