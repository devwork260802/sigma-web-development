console.log('Hello Everyone');

// https://source.unsplash.com/random/130x90/?$nature

let title, views, date, viewstr, thumbnail, channel_name
document.querySelector(".edit-btn").onclick = () => {

    thumbnail = prompt("Enter the thumbnail Url")
    title = prompt("Enter the video title here")
    channel_name = prompt("Enter the channel Name")
    views = prompt("Enter the video views here")
    date_old = prompt("Enter the how old the Video is (in Month)")

    if (views > 1000 && views < 1000000) {
        viewstr = Math.floor(views / 1000) + "k"
    }
    else if (views > 1000000 && views < 1000000000) {
        viewstr = Math.floor(views / 1000000) + "M"
    }
    else if (views > 1000000000) {
        viewstr = Math.floor(views / 1000000000) + "B"
    }
    else {
        viewstr = views
    }

    let card_template = 
    `
    <div class="card">
        <div class="thumbnail">
            <img src="${thumbnail}" alt="">
        </div>
        <div class="content">
            <div class="heading-title">${title}</div>
            <div class="other-desc">
                <span class="channel-name">${channel_name}</span> |
                <span class="views">${viewstr}</span> views |
                <span class="time-old">${date_old} months</span> ago  
            </div>
        </div>
    </div>
    `

    document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + card_template
};
