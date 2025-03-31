let infos = [
    {
        "tittle": "Café Tradicional",
        "desc": "É o tipo de café mais consumido no mundo, sendo uma bebida forte e intensa, com sabor padronizado e preço acessível.",
        "price": "$4,23"
    }
]

function setText(index) {
    document.getElementById("tittle").innerHTML = infos[index].tittle;
    document.getElementById("desc").innerHTML = infos[index].desc;
    document.getElementById("price").innerHTML = "Preço Médio: <br><b>"+infos[index].price+"</b>";
}

setText(0);