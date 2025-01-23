class Video {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.likes = _item.likes;
        this.views = _item.views;
        this.downloads = _item.downloads;
        this.pageURL = _item.pageURL;
        this.thumbnail = _item.videos?.tiny?.thumbnail || '';
        this.url = _item.videos?.tiny?.url || '';
    }

    render() {
        console.log('Video URL:', this.url);
        let row_div = document.querySelector(this.parent);
        row_div.innerHTML += `
        <div class="card" style="max-width: 300px; background-color:white;  border: 2px solid black;">
            <div class="card-body">
                <video controls>
                <source src="${this.url}" type="video/mp4">
                Your browser does not support the video tag.
                </video>
                <br>
                <p class="card-text"><em>${"likes: " + this.likes + "👍"}</em></p>
                <p class="card-text"><em>${"views: " + this.views}</em></p>
                <p><em>large size: <a style="text-decoration:none; color: skyblue; font-weight: bold; font-size: 17px;" href='${this.thumbnail}'; target="_blank" >show me</a></em></p>
                <a href="${this.pageURL}" class="btn btn-dark" style="border-radius: 20px;" target="_blank">Go To Source</a>
            </div>
        </div>`;
    }
}