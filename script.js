const vidContainer = document.querySelector("#video-container");
const searchBar = document.querySelector("#search-bar");
const searchForm = document.querySelector("#search-form");
const navbarTitle = document.querySelector("#navbar-title");

function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
function writeVidCard(vid) {
    return`
    <div class="card">
        <h5 class="card-title my-2 text-center">${vid.title}</h5>
        <video class="video" width="100%" height="100%" controls>
            <source src="${vid.src}" type="video/mp4">
        </video>
        <div class="card-body">
            <p class="card-text">${vid.description}</p>
        </div>
    </div>
    `;
}
function writeImgCard(img) {
    return`
        <img src="${img.src}" alt="${img.title}" title="${img.title}" class="image card">
    `;
}
function buildCard(item) {
    if(item.type === "video") {
        const vidCard = document.createElement('div');
        vidCard.className = "col-12 col-md-6 col-lg-4 vidCard";
        vidCard.innerHTML = writeVidCard(item);
        vidContainer.appendChild(vidCard);
    } else if (item.type === "image") {
        const imgCard = document.createElement('div');
        imgCard.className = "col-12 col-md-6 col-lg-4 imgCard";
        imgCard.innerHTML = writeImgCard(item);
        vidContainer.appendChild(imgCard);
    }
}
function clearVidContainer() {
    document.querySelectorAll(".vidCard").forEach(vidCard => vidCard.remove());
    document.querySelectorAll(".imgCard").forEach(img => img.remove());
    document.querySelectorAll(".notFoundMsg").forEach(msg => msg.remove());
}

// search for video
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (searchBar.value) {
        readTextFile("items.json", (text) => {
            clearVidContainer();
            const videos = JSON.parse(text).filter(v => v.title.toLowerCase().includes(searchBar.value.toLowerCase()));
            videos.forEach(vid => buildCard(vid));
            if (!videos.length) {
                const notFoundMsg = document.createElement('h2');
                notFoundMsg.className = "text-center text-danger notFoundMsg";
                notFoundMsg.innerText = "Nie znaleziono filmików.";
                vidContainer.appendChild(notFoundMsg);
            }
        });
    }
});

// page refresh
navbarTitle.addEventListener("click", (e) => {
    e.preventDefault();
    searchBar.value = "";
    readTextFile("items.json", (text) => {
        clearVidContainer();
        const videos = JSON.parse(text);
        videos.forEach(item => buildCard(item));
    });
})

// startup
readTextFile("items.json", (text) => {
    const videos = JSON.parse(text);
    videos.forEach(item => buildCard(item));
});






