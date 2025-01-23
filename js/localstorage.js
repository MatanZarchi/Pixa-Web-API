//for favorites only

let favorites_ar = [];

function appendToFavoriteInLocalStorage(buttonElement) {

    let card = buttonElement.closest('.card');
    let object = JSON.parse(card.getAttribute('data-picture'));

    favorites_ar = JSON.parse(localStorage.getItem('favorites')) || [];

    let obj = {
        tags: object.tags,
        pageURL: object.pageURL,
        previewURL: object.previewURL,
        likes: object.likes,
        views: object.views,
        largeImageURL: object.largeImageURL
    };

    favorites_ar.push(obj);

    localStorage.setItem('favorites', JSON.stringify(favorites_ar));

    showAlert("Image added to favorites!");

    checkLocal();
}

function checkLocal() {

    favorites_ar = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites_ar);
}

function deleteAllFavoritesInLocalStorage() {
    favorites_ar = [];
    localStorage.removeItem('favorites');
}