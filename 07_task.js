
// Getting elements
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

// Function to add task
function addTask() {

    let task = taskInput.value;

    if (task == "") {
        alert("Please enter a task");
    }
    else {

        // Creating new li
        let li = document.createElement("li");

        li.innerText = task;

        // Creating delete button
        let deleteButton = document.createElement("button");

        deleteButton.innerText = "Delete";
        deleteButton.className = "deleteBtn";

        // Removing task
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        // Adding button inside li
        li.appendChild(deleteButton);

        // Adding li inside ul
        taskList.appendChild(li);

        // Clearing input
        taskInput.value = "";
    }
}


// Function to change main image
function changeImage(image) {

    let mainImage = document.getElementById("mainImage");

    mainImage.src = image;
}
