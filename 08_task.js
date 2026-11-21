
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {

    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    // Create li
    let li = document.createElement("li");

    // Create checkbox
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.onclick = function() {
        li.classList.toggle("completed");
    };

    // Create task text
    let span = document.createElement("span");
    span.innerText = task;

    // Up button
    let upButton = document.createElement("button");
    upButton.innerText = "↑";

    upButton.onclick = function() {

        let previous = li.previousElementSibling;

        if (previous != null) {
            taskList.insertBefore(li, previous);
        }
    };

    // Down button
    let downButton = document.createElement("button");
    downButton.innerText = "↓";

    downButton.onclick = function() {

        let next = li.nextElementSibling;

        if (next != null) {
            taskList.insertBefore(next, li);
        }
    };

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.onclick = function() {
        li.remove();
    };

    // Add all elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(upButton);
    li.appendChild(downButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";
}
