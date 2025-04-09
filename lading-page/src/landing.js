let current = 0;
let lights_div = document.getElementById("lights");
let slider_lasttime = 0;

let infos = [
    {
        "tittle": "Café Tradicional",
        "desc": "É o tipo de café mais consumido no mundo.<br> Possui sabor forte e intenso, ideal para quem busca energia ao longo do dia.<br> Seu processo de torra padronizado garante um aroma característico e um preço acessível.",
        "price": "$4,23",
        "img": "imgs/coffee-cup.png"
    }, 
    {
        "tittle": "Café Superior",
        "desc": "Café de qualidade boa e sabor mais acentuado.<br> Feito com grãos selecionados, possui um equilíbrio entre amargor e acidez.<br> Apresenta notas suaves e um aroma mais encorpado, sendo uma ótima opção para apreciadores exigentes.",
        "price": "$8,50",
        "img": "imgs/sup.png"
    },
    {
        "tittle": "Café Gourmet",
        "desc": "Café gourmet é um café de alta qualidade, com grãos selecionados e torra refinada.<br> Possui notas aromáticas intensas e um sabor sofisticado, sem amargor excessivo.<br> Ideal para métodos de preparo diferenciados, como prensa francesa e aeropress.",
        "price": "$100,00",
        "img": "imgs/gurmet.png"
    },
    {
        "tittle": "Café Orgânico",
        "desc": "Produzido sem o uso de agrotóxicos ou fertilizantes químicos.<br> Mantém o sabor natural e autêntico dos grãos, garantindo uma experiência pura e saudável.<br> Ideal para quem busca um café sustentável e com certificação de cultivo responsável.",
        "price": "$12,75",
        "img": "imgs/org.png"
    },
    {
        "tittle": "Café Especial",
        "desc": "Elaborado a partir de grãos raros e criteriosamente selecionados.<br> Apresenta sabores complexos e notas frutadas, florais ou achocolatadas.<br> Passa por rigorosos testes de qualidade, garantindo uma experiência única para os amantes de café.",
        "price": "$25,00",
        "img": "imgs/esp.webp"
    },
    {
        "tittle": "Café Descafeinado",
        "desc": "Uma excelente opção para quem deseja saborear café sem a cafeína.<br> Mantém o aroma e o sabor característico do café, mas sem os efeitos estimulantes.<br> Indicado para consumo noturno ou para pessoas sensíveis à cafeína.",
        "price": "$9,50",
        "img": "imgs/des.webp"
    }
]


function setText(index) {
    slider_lasttime = 0;

    let img = document.getElementById("coffee-cup");
    img.src = infos[index].img;
    img.style.display = "none";

    let tittle = document.getElementById("tittle");
    tittle.innerHTML = infos[index].tittle;
    tittle.style.display = "none";
    let desc = document.getElementById("desc");
    desc.innerHTML = infos[index].desc;
    desc.style.display = "none";
    let price = document.getElementById("price");
    price.innerHTML = "Preço Médio: <br><b>"+infos[index].price+"</b>";
    price.style.display = "none";

    setTimeout(() => {
        tittle.style.display = "block";
        desc.style.display = "block";
        price.style.display = "block";
        img.style.display = "block";
    }, 1);

    Array.from(lights_div.children).forEach(element => {
        element.classList.remove("lit");
    });

    document.getElementById(`item-${index}`).classList.add("lit");
    current = index;
}

let item_index = 0;
infos.forEach(element => {
    let light = document.createElement("div");
    light.id = `item-${item_index}`;
    let temp = item_index;
    light.onclick = () => {
        setText(temp);
    };
    lights_div.appendChild(light);

    item_index++;
});

setText(0);

function next() {
    current++;
    if (current >= infos.length) {
        current = 0;
    }

    setText(current);
}

function previus() {
    current--;
    if (current < 0) {
        current = infos.length-1;
    }

    setText(current);
}

function loop() {
    setTimeout(() => {
        slider_lasttime++;
        if (slider_lasttime >= 15) {
            next();
        }
        loop();
    }, 1000);
}

loop();