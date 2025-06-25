let display = document.getElementById('display')

function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = '';
}
function calculateResult(){
    display.value = eval(display.value);
    if (display.value === undefined) {
        display.value = '';
    }   
}