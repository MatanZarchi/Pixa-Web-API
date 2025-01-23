class Tasks {

    constructor(_parent, _name, _time, _id) {
        this.parent = _parent;
        this.name = _name;
        this.time = _time;
        this.id = _id;
    }

    render() {

        let table = document.querySelector(this.parent);
        table.innerHTML += `
        <tr>
        <td>${this.name}</td>
        <td>${this.time}</td>
        </tr>
        `;
    }
    
}