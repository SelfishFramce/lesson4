let taskInput = document.querySelector(".form-task");
let addBt = document.querySelector(".button");
let taskList = document.querySelector(".task-list");


function addNewTask(event) {
    event.preventDefault();

    let task = taskInput.value;

    if (!task) return;
    
    let newItem = document.querySelector("#template").cloneNode(true).content;
    newItem.querySelector(".task__text").value = task;
    newItem.querySelector(".task__delete").addEventListener("click", deleteTask);

    taskList.append(newItem);
    taskInput.value = "";
    taskInput.focus();
}

function deleteTask(event) {
    console.log("event ", event);
    let target = event.target.parentElement;
    target.remove();
}

addBt.addEventListener("click", addNewTask);