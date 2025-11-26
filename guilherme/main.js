const imgContainer = document.getElementById("brotamento");
const loader = document.querySelector(".loader");

const ammountImgs = 3;

let generated = false;
let onLoading = false;

const imgsObjs = [];

async function load() {
    for (let i = 0; i < ammountImgs; i++) {
        request = await fetch("https://api.thecatapi.com/v1/images/search");
        let json = await request.json();
        
        if (request.status != 200) {
            continue;
        }
        
        let img = imgsObjs[i] || document.createElement("img");
        imgsObjs[i] = img;
        img.src = json[0].url;
        imgContainer.appendChild(img);
    }
}

document.getElementById("btn").addEventListener("click", async () => {
    if (onLoading) {
        return;
    }

    onLoading = true;
    loader.classList.add("visible");
    if (generated) {
        imgContainer.classList.add("hide");
        
        setTimeout(async () => {
            imgContainer.style.display = "none";
            await load();
            setTimeout(() => {
                imgContainer.style.display = "flex";
                imgContainer.classList.remove("hide");
                onLoading = false;
                 loader.classList.remove("visible");
            }, 2000);
        }, 3000);
        
    } else {
            await load();
                setTimeout(() => {
                    onLoading = false;
                    loader.classList.remove("visible");
                }, 4000);
    }
    generated = true;
    
    
});