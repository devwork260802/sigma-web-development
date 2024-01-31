console.log('Hello Everyone');

async function main() {
    let time=setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last=last[last.length-1]
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100);


    let hacking_text = [
        '> Initializing Hacking ',
        '> Scanning Files ',
        '> Reading Files ',
        '> Password Files Detected ',
        '> Decrypting ',
        '> Sending Files ',
        '> Formatting System ',
        '> Good Bye and I LOve You '
    ]

    for (const item of hacking_text) {
        await add_item(item);
    }

    await delay()
    clearInterval(time);
}

const add_item = async (item) => {
    await delay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div);
}

const delay = () => {
    return new Promise((resolve, reject) => {
        time_out = Math.floor(Math.random() * 10000)
        setTimeout(() => {
            resolve()
        }, time_out);
    })
}

main()