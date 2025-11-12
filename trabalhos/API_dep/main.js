const html = ` <div class="card placeholder hover-card">
            <div class="gloss"></div>
            <div class="background">
                <div class="loading" style="width: 100%; height: 100%;"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" class="picture">
            </div>
            
            <h1 class="name loading">Adail Filho</h1>
            <div class="stats">
                <div class="stats-item loading place-color">
                    <h2 style="width: 100%; text-align: center; font-size: 15px; margin: 0;" class="uf">AM</h2>
                </div>
                <div class="stats-item loading place-color">
                    <h2 style="width: 100%; text-align: center; font-size: 15px; margin: 0;" class="part">PP</h2>
                </div>
            </div>
        </div>`;

const main = document.getElementById("main");
const loader = document.getElementById("loader");



function loadCard(data) {
    const parser = new DOMParser();
    const life = parser.parseFromString(html, "text/html");
    const elemt = life.body.firstChild;

    
    main.appendChild(elemt);
    setTimeout(() => {
        elemt.querySelector(".name").innerHTML = data.nome;
        elemt.querySelector(".stats .uf").innerHTML = data.siglaUf;
        elemt.querySelector(".stats .part").innerHTML = data.siglaPartido;
        elemt.querySelector(".picture").src = data.urlFoto;
        elemt.classList.remove("placeholder");
    }, Math.random() * 1000);
}

function clear() {
    main.innerHTML = "";
}

const inpt = document.getElementById("search-inpt");
var links = [];
let page = 1;
let loading = false;

async function process(data) {
    if (data.status != 200) {
        document.getElementById("search-inpt").value = "Falha na request";
        return;
    }

    let json;
    try {
        json = await data.json();
    } catch (e) {
        document.getElementById("search-inpt").value = "Falha na request";
        console.error(e);
        return;
    }

    let dados = json.dados;
    for (let i = 0; i < dados.length; i++) {
        loadCard(dados[i]);
    }

    links = json.links;
    document.getElementById("page").innerHTML = page;
}

async function load() {
    if (loading) {
        return;
    }
    loading = true;

    let search = inpt.value;
    loader.classList.remove("disabled");
    const params = {
        nome: search,
        ordem: 'ASC',
        ordenarPor: 'nome',
        itens: 120
    };

    clear();

    const queryString = new URLSearchParams(params).toString();
    await fetch(`https://dadosabertos.camara.leg.br/api/v2/deputados?${queryString}`).then(async (data) => await process(data));

    document.querySelectorAll(".hover-card").forEach((card) => {
    const gloss = card.querySelector(".gloss");
    card.addEventListener("mousemove", (event) => {
        const pointX = event.clientX;
        const pointY = event.clientY;

        const cardRect = card.getBoundingClientRect();

        const halfHeight = card.offsetHeight / 2;
        const halfWidth = card.offsetWidth / 2;

        const cardCenterX = cardRect.left + halfWidth;
        const carcCenterY = cardRect.top + halfHeight;

        const deltaX = pointX - cardCenterX;
        const deltaY = pointY - carcCenterY;

        const rx = deltaY / halfHeight;
        const ry = deltaX / halfWidth;

        const distaceToCenter = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        const maxDist = Math.max(halfHeight, halfWidth);
        const deg = distaceToCenter * 10 / maxDist;

        card.style.transform = `perspective(400px) rotate3D(${-rx}, ${ry}, 0, ${deg}deg)`;
        gloss.style.transform = `translate(${-ry*100}%, ${-rx*100}%) scale(2.4)`;
        gloss.style.opacity = distaceToCenter * 0.05 / maxDist;

    });

    card.addEventListener("mouseleave", () => {
        card.style = null;
        gloss.style.opacity = 0;
    })
});

    setTimeout(() => {loader.classList.add("disabled");}, 500);
    loading = false;
}

document.getElementById("next").addEventListener("click", async () => {
    if (loading) {
        return;
    }
    loading = true;

    loader.classList.remove("disabled");
     clear();
    page++;
    await fetch(links[1].href).then(async (data) => await process(data));

    setTimeout(() => {loader.classList.add("disabled");}, 500);
    loading = false;
});

document.getElementById("back").addEventListener("click", async () => {
    if (loading) {
        return;
    }
    loading = true;

    loader.classList.remove("disabled");
     clear();
    page--;
    await fetch(links[3].href).then(async (data) => await process(data));

    setTimeout(() => {loader.classList.add("disabled");}, 500);
    loading = false;
});

inpt.addEventListener('keyup', function(event) {
    // Check if the pressed key is the Enter key
    if (event.key === 'Enter') {
        load();
    }
});

load();

