let port, writer, reader;
let connected = false;

const warning = document.querySelector(".warning");

function warn(text = "") {
    if (text.trim() == "") {
        warning.classList.remove("active");
        return;
    }

    warning.innerHTML = text;
    warning.classList.add("active");
}

async function readLood() {
    if (!connected) {
        return;
    }
    let text = "";
    while (true) {
         try {
            const { value, done } = await reader.read();
            if (done) break;

            if (!value) {
                continue;
            }
            text += value;

            if (text.includes("\n")) {
                warn(text);
                setTimeout(() => warn(), 1000);
                text = "";
            }
        } catch (err) {
            console.error("Read error:", err);
            break;
        }
    }
}

async function connect() {
    if (connected) {
        return;
    }

    warn("Connecting");
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });
        writer = port.writable.getWriter();
        const decoder = new TextDecoderStream();
        port.readable.pipeTo(decoder.writable);
        reader = decoder.readable.getReader();
        document.querySelector(".main p").innerHTML = "";
        connected = true;
        readLood();
        warn();
    } catch (e) {
        warn("Connection fail.");
        setTimeout(() => warn(), 1000);
    }
}

document.querySelectorAll(".command").forEach((elmt) => {
    elmt.addEventListener("click", async () => {
       
        if (!connected) {
             await connect();
            return;
        }

        warn("Executing command.");
        await writer.write(new TextEncoder().encode(elmt.innerHTML+"\n"));
        setTimeout(() => warn(), 300);
    });
});

document.querySelector(".change").addEventListener("click", async () => {
    if (!connected) {
             await connect();
            return;
        }

        warn("Executing command.");
        await writer.write(new TextEncoder().encode("i"+document.getElementById("intensity").value+"\n"));
        setTimeout(() => warn(), 300);
})