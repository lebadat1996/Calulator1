function getValue(id) {
    let value = parseInt(document.getElementById(id).value);
    document.getElementById("result").value += value;
}
function getSymbol(id) {
    let symbol = document.getElementById(id).value;
    document.getElementById("result").value += symbol;
}
function deleteResult() {
    document.getElementById("result").value = "";
}
function showResult() {
    let result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}
