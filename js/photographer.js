window.onload = function () {
    photographerAPI("flowers");
}

function photographerAPI(word) {

    let url = `https://pixabay.com/api/?key=48247303-6329063563e67709c1729d44b&q=${word}&image_type=photo`;
    axios.get(url)
        .then(function (resp) {
            createPhotographers(resp.data.hits);
            console.log(resp.data.hits);
        }).catch(function (error) {
            console.log("error: " + error);
        });
}

function createPhotographers(_json){
    //document.querySelector(".row").innerHTML = "";
    _json.forEach(item => {
        let cameraman = new photographer(".row", item);
        cameraman.render();
    });
}
