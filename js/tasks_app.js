let tasks_ar = [] , i = 0;
let addBtn = document.querySelector("#add_btn");
let resetBtn = document.querySelector("#reset_btn");

window.onload = function () {

    addBtn.addEventListener("click", function () {
        addTask();
    });

    resetBtn.addEventListener("click", function () {
        resetTasks();
    });
}

function addTask() {

    let task = {

        name: document.querySelector("#name_input").value,
        time: document.querySelector("#time_input").value
    }

    tasks_ar.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks_ar));

    createTask();

    checkLocal();
}

function createTask() {

        let task = new Tasks("#table", tasks_ar[i].name, tasks_ar[i].time, "ddf");
        task.render();
        i++;
}

function checkLocal() {

    if (localStorage["tasks"]) {
        JSON.parse(localStorage["tasks"]);
        console.log(tasks_ar);
    }
}

function resetTasks() {
    tasks_ar = [];
    let table = document.querySelector("#table");
    table.innerHTML = "";
    document.querySelector("#name_input").value = "";
    document.querySelector("#time_input").value = "";
}

