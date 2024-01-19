console.log('Hello Everyone');

// Promise is promise of code execution

// Traditional Approach
// function get_data() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(200)
//         }, 3000);
//     })
// }

async function get_data() {
    // getting data from server
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
        }, 3000);
    })
}

async function get_data() {
    let server_res=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data=await server_res.text()
    console.log(data)
    return 200
}

async function get_data() {
    let server_res=await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'post',
            body: 'hello',
            userID: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    let data=await server_res.json()
    console.log(data)
    return 200
}

async function main() {

      

    console.log('Loading Modules...');
    console.log("Done");
    console.log('Loading Data...');
    let data = await get_data()
    console.log(data);
    console.log("Done");
}

main()

    // Traditional Approach
    // data.then(() => {
    //     console.log(data);
    //     console.log("Done");
    // });