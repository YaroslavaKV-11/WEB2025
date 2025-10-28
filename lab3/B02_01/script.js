let API = "https://jsonplaceholder.typicode.com/posts/";
let output = document.getElementById("post-name");

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function get_data() {
    try {
        let response1 = await fetch(API + "1");
        let post1 = await response1.json();
        output.innerHTML = post1.title;
        await delay(1000);

        let response2 = await fetch(API + "2");
        let post2 = await response2.json();
        output.innerHTML += "<br>" + post2.title;
        await delay(1000);

        let response3 = await fetch(API + "3");
        let post3 = await response3.json();
        output.innerHTML += "<br>" + post3.title;
    } catch (error) {
        console.log(error);
    }
}
