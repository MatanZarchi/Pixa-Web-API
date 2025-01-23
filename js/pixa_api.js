window.onload = function () {

    let urlParams = new URLSearchParams(window.location.search);
    let query = urlParams.get('query');
    if (query) {
        doAPI(query);
    }
    searchEvents();
}

function searchEvents() {

    let search_btn = document.querySelector("#search_btn");
    search_btn.addEventListener("click", function () {
        let search_input = document.querySelector("#search_input").value;
        window.location.href = `pixa_api.html?query=${encodeURIComponent(search_input)}`;
        doAPI(search_input);
    });

    document.addEventListener("keydown", function (e) {
        if (e.key == "Enter") {
            let search_input = document.querySelector("#search_input").value;
            doAPI(search_input);
        }
    })
}

const doAPI = function (search_input) {
    document.querySelector(".row").innerHTML += `
    <div class="text-center mt-3 w-100">
    <img src="images/loading.gif" width="100">
    </div>
    `
    let url = `https://pixabay.com/api/?key=48247303-6329063563e67709c1729d44b&q=${search_input}&image_type=photo`;
    axios.get(url)
        .then(function (resp) {
            createPics(resp.data.hits);
            console.log(resp.data.hits);
        }).catch(function (error) {
            console.log("error: " + error);
        });
}

function createPics(_json) {
    document.querySelector(".row").innerHTML = "";
    _json.forEach(item => {
        let pic = new Picture(".row", item);
        pic.render();
    });
}

function homeSearch() {
    let search_input = document.querySelector("#search_input").value;
    if (search_input) {
        window.location.href = `pixa_api.html?query=${encodeURIComponent(search_input)}`;
    }
}
