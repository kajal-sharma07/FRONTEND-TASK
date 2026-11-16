let display = document.getElementById("display");

function addValue(value){
    display.value=display.value+value;
}


function clearDisplay() {
    display.value = "";
}


function deleteNumber() {
    display.value = display.value.slice(0, -1);
}










 

function calculate() {
    try {
        let result = display.value;
        display.value = Function("return " + result)();
    }
    catch {
        display.value = "Error";
    }
}


