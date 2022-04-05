let vidContainer = document.querySelector("#video-container");
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
function buildVidCard(vid) {
    return`
    <div class="card">
        <h5 class="card-title my-2 text-center">${vid.title}</h5>
        <iframe src="${vid.src}" class="video"> </iframe>
        <div class="card-body">
            <p class="card-text">${vid.description}</p>
        </div>
    </div>
    `
}

readTextFile("videos.json", function(text){
    const videos = JSON.parse(text);
    videos.forEach(vid => {
        const vidCard = document.createElement('div');
        vidCard.className = "col-12 col-md-6 col-lg-4";
        vidCard.innerHTML = buildVidCard(vid);
        vidContainer.appendChild(vidCard);
    })
});




