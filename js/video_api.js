window.onload = function () {

    let urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('query');

    if (query == "" || query == null) {
        let background = document.querySelector(".main-videos");
        background.style.backgroundImage = 'url("/images/search.png")';
        background.style.backgroundSize = 'cover';
        background.style.backgroundPosition = 'center';
        background.style.backgroundRepeat = 'no-repeat';
        background.style.height = '100vh';
        background.style.width = '100%';
    }

    if (query) {
        videoAPI(query);
    }
    searchEvents();
}

function videoAPI(search_input) {
    let url = `https://pixabay.com/api/videos/?key=48247303-6329063563e67709c1729d44b&q=${search_input}`;
    axios.get(url)
        .then(function (resp) {
            const items = resp.data.hits.slice(0, 16);
            console.log(items);

            items.forEach(item => {
                createVideo([item], item.videos.tiny.url);
            });
        }).catch(function (error) {
            console.log("error: " + error);
        });
}

function searchEvents() {

    let search_btn = document.querySelector("#search_btn");
    search_btn.addEventListener("click", function () {
        let search_input = document.querySelector("#search_input").value;
        window.location.href = `videos.html?query=${encodeURIComponent(search_input)}`;
        videoAPI(search_input);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            let search_input = document.querySelector("#search_input").value;
            window.location.href = `videos.html?query=${encodeURIComponent(search_input)}`;
            videoAPI(search_input);
        }
    })
}

function createVideo(_json, _json2) {
    _json.forEach((item) => {
        let mergedItem = { ...item, url: _json2 };
        console.log(mergedItem);
        let vidInfo = new Video(".row", mergedItem);
        vidInfo.render();
    });
}
