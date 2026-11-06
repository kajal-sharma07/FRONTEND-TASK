

function showAlert() {
    alert("Welcome to JavaScript Programming!");
}


function checkAgeIfElse() {
    let age = prompt("Enter your age:");

    if (age === null || age.trim() === "") {
        alert("Please enter your age.");
        return;
    }

    age = Number(age);

    if (!Number.isInteger(age) || age < 0 || age > 120) {
        alert("Please enter a valid age.");
    } else if (age >= 18) {
        alert("You are eligible (18 or older).");
        document.getElementById("result").textContent =
            "Result: You are eligible.";
    } else {
        alert("You are not eligible yet.");
        document.getElementById("result").textContent =
            "Result: You are not eligible yet.";
    }
}

function checkAgeTernary() {
    let age = prompt("Enter your age:");

    if (age === null || age.trim() === "") {
        alert("Please enter your age.");
        return;
    }

    age = Number(age);

    if (!Number.isInteger(age) || age < 0 || age > 120) {
        alert("Please enter a valid age.");
        return;
    }

    let result = age >= 18
        ? "You are eligible."
        : "You are not eligible yet.";

    alert(result);
    document.getElementById("result").textContent =
        "Result: " + result;
}

function showDocumentWrite() {
    document.open();
    document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Document Write Demo</title>
        </head>
        <body style="font-family: Arial; text-align: center; padding: 40px;">
            <h1>Document Write Example</h1>
            <p>Hello! This content was displayed using document.write().</p>
            <p>This demonstrates writing HTML content with JavaScript.</p>
            <button onclick="location.reload()">Go Back</button>
        </body>
        </html>
    `);
    document.close();
}
