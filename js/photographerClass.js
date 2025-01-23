class photographer {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.user = _item.user;
        this.user_id = _item.user_id;
        this.userImageURL = _item.userImageURL;
    }

    render() {

        if (this.userImageURL == "") {
            this.userImageURL = "/images/nophoto.png";
        }
        let row_div = document.querySelector(this.parent);
        row_div.innerHTML += `
        <div class="card">
        <img src="${this.userImageURL}" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title"><em>User: ${this.user}</em></h5>
        <h5 class="card-title"><em>${"User id: " + this.user_id}</em></h5>
        </div>
        </div>`;
    }
}

/*
<img src="${this.userImageURL}" class="w-25 float-start me-2"/>
        <h4>${this.user}</h4>
        <div>User id: ${this.user_id}</div>`;
*/