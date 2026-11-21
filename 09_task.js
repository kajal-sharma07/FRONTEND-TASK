
let button = document.getElementById("fetchBtn");

let message = document.getElementById("message");

let data = document.getElementById("data");

// Function to simulate server data fetching
function fetchData() {

    return new Promise(function(resolve, reject) {

        setTimeout(function() {

            let serverData = {
                name: "Kajal",
                course: "BTech CSE",
                college: "GLA University"
            };

            resolve(serverData);

        }, 3000);

    });

}

// Button click event
button.addEventListener("click", function() {

    message.innerText = "Fetching data... Please wait";

    data.innerText = "";

    fetchData().then(function(result) {

        message.innerText = "Data fetched successfully!";

        data.innerHTML =
            "Name: " + result.name + "<br>" +
            "Course: " + result.course + "<br>" +
            "College: " + result.college;

    });

});
