let API = "https://api.imgflip.com/get_memes";
let container = document.getElementById("meme-container");
let memes = [];

async function get_memes_data() {
    let response = await fetch(API);
    if (response.ok) {
        let data = JSON.parse(await response.text());
        memes = data.data.memes;
        drawRandomMeme();
        scheduleUpdate();
    }
}

function drawRandomMeme() {
    if (memes.length === 0) return;
    let index = Math.floor(Math.random() * memes.length);
    let url = memes[index].url;

    container.innerHTML = "";
    let img = document.createElement("img");
    img.src = url;
    container.appendChild(img);
}

function scheduleUpdate() {
    setTimeout(function () {
        drawRandomMeme();
        scheduleUpdate();
    }, 10000);
}

get_memes_data();
