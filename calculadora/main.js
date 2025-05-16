// The unprocessed math.
var input = "";

input.addEventListener

// Bind the buttons using their id.
function bind(id) {
    console.log(`Binding ${id}.`); // Debug reasons.
    document.getElementById(id).addEventListener("click", () => {
        input = input+id;
        document.getElementById("output").value = input;
    });
}

// Bind all NUMBER buttons.
for (let i = 0; i < 10; i++) {
   bind(i);
}

// Bind other caracters.
bind("/");
bind("x");
bind("-");
bind("+");
bind(".");

// Ereasing bind.
document.getElementById("erease").addEventListener("click", () => {
    input = input.slice(0, input.length-1);
    document.getElementById("output").value = input;
});

// Calculate it :0
function calculate() {
    console.log(`Operation began. -----------------------`);

    let string = input;
    let currentValue = "";
    let lastValue = null;
    let currentOperator = null;

    for (let i = 0; i <= string.length; i++) {
        let currentChar = string.charAt(i);

        if ("+-x/".includes(currentChar) || i === string.length) { // Check for operation char
            if (currentValue === "") continue; // ignore empty numbers

            let number = Number(currentValue);

            if (lastValue === null) {
                lastValue = number;
            } else {
                switch (currentOperator) {
                    case "+":
                        lastValue += number;
                        break;
                    case "-":
                        lastValue -= number;
                        break;
                    case "x":
                        lastValue *= number;
                        break;
                    case "/":
                        if (number === 0) {
                            document.getElementById("output").value = "Erro: divisão por zero.";
                            console.log("Division by zero.");
                            return;
                        }
                        lastValue /= number;
                        break;
                }
            }

            currentOperator = currentChar;
            currentValue = "";
        } else {
            currentValue += currentChar;
        }
    }

    input = "";
    if (lastValue !== null && !isNaN(lastValue)) {
        document.getElementById("output").value = lastValue;
    } else {
        
        document.getElementById("output").value = "Operação inválida.";
    }

    console.log(`Operation complete. -----------------------`);
}

document.getElementById("output").value = "00000";