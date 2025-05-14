// The unprocessed math.
var input = "";

// Bind the buttons using they id.
function bind(id) {
    console.log(`Binding ${id}.`);

    document.getElementById(id).addEventListener("click", () => {
        input = input+id;
        document.getElementById("output").value = input;
    });
}

// Bind all NUMBER buttons.
for (let i = 0; i < 10; i++) {
   bind(i);
}

bind("/");
bind("x");
bind("-");
bind("+");

document.getElementById("erease").addEventListener("click", () => {
    input = input.slice(0, input.length-1);
    document.getElementById("output").value = input;
});