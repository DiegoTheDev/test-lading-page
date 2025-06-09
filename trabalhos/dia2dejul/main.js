const inpt1 = document.getElementById("inpt1");
const inpt2 = document.getElementById("inpt2");
const out = document.getElementById("output");

function showOutput(result) {
    out.innerHTML = `O resultado: ${result}`;
    out.classList.remove("hidden");
}

function parseElemts() {
    let val1 = Number(inpt1.value);
    let val2 = Number(inpt2.value);
    return [isNaN(val1) ? 0 : val1, isNaN(val2) ? 0 : val2];
}

function addElemts() {
    let [val1, val2] = parseElemts();
    showOutput(val1+val2);
}

function remElemts() {
    let [val1, val2] = parseElemts();
    showOutput(val1-val2);
}

function divElemts() {
    let [val1, val2] = parseElemts();
    (val1 == 0 && val2 == 0) ? showOutput(0) : showOutput(val1/val2);   
}

function mulElemts() {
    let [val1, val2] = parseElemts();
    showOutput(val1*val2);
}