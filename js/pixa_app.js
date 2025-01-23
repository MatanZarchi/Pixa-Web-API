class Picture {
    constructor(_parent, _item, _item2) {
        this.parent = _parent;
        this.tags = _item.tags;
        this.pageURL = _item.pageURL;
        this.previewURL = _item.previewURL;
        this.likes = _item.likes;
        this.views = _item.views;
        this.largeImageURL = _item.largeImageURL;
    }

    render() {
        
        let row_div = document.querySelector(this.parent);
    
        // Take 3 first words
        this.tags = this.tags.split(",");
        let firstThreeWords = this.tags.slice(0, 3);
    
        row_div.innerHTML += `
        <div class="card" style="position: relative;" data-picture='${JSON.stringify(this)}'>
            <img src="${this.previewURL}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title"><em>Tags: ${firstThreeWords}</em></h5>
                <p class="card-text"><em>${"likes: " + this.likes + "👍"}</em></p>
                <p class="card-text"><em>${"views: " + this.views}</em></p>
                <p><em>large size: <a style="text-decoration:none; color: skyblue; font-weight: bold; font-size: 17px;" href="#" onclick="showImage('${this.largeImageURL}')">show me</a></em></p>
                <a href="${this.pageURL}" class="btn btn-dark" style="border-radius: 20px; width: 200px;" target="_blank">Go To Source</a>
                <button id="like_btn" class="btn btn-dark" href="#" onclick="appendToFavoriteInLocalStorage(this)">👍</button>
            </div>
        </div>`;
    }
    
}