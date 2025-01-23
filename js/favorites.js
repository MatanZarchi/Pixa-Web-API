let object = JSON.parse(localStorage.getItem('favorites'));
let favorite_div = document.querySelector(".favorites-row");

window.onload = function () {

    createFavorites();
    document.querySelector("#resetAll_btn").addEventListener("click", function () {
        resetAll();
    });
}

function createFavorites() {

    object.forEach(element => {

        // console.log(element.tags);
        // let firstThreeWords = element.tags.slice(0, 3);

        favorite_div.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${element.previewURL}" class="card-img-top">
            <div class="card-body">
                <p class="card-text"><em>${"likes: " + element.likes + "👍"}</em></p>
                <p class="card-text"><em>${"views: " + element.views}</em></p>
                <p><em>large size: <a style="text-decoration:none; color: skyblue; font-weight: bold; font-size: 17px;" href="#" onclick="showImage('${element.largeImageURL}')">show me</a></em></p>
                <a href="${element.pageURL}" class="btn btn-dark" style="border-radius: 20px; width: 240px;" target="_blank;">Go To Source</a>
            </div>
        </div>`;
    });
}

function resetAll() {
    object = [];
    favorite_div.innerHTML = "";
    
    deleteAllFavoritesInLocalStorage();
}