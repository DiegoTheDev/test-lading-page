const API = "https://ws-public.interpol.int";

function error(message = "Erro não especificado.") {}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

async function getTotal() {
    const request = await fetch(`${API}/notices/v1/red?resultPerPage=1`);
    if (request.status != 200) {
        error(`Falha na request [${request.status}]`);
        return -1;
    }

    let total = (await request.json())._links.last.href.split("=");
    return Number(total[total.length-1]) || -1;
}

async function getRandomLink() {
    const total = await getTotal();
    if (total == -1) {
        return;
    }    

    const id = getRandomInt(1, total);
    const request = await fetch(`${API}/notices/v1/red?page=${id}&resultPerPage=1`);
    if (request.status != 200) {
        error(`Falha na request [${request.status}]`);
        return;
    }

    return ((await request.json())._embedded.notices[0]._links.self.href) || -1;
}

async function load(params) {
    
}