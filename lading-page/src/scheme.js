// Troca a stylesheet.
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

// Atualiza o tema da pagina de acordo com a preferencia do usuario.
function update() {
    let isDark = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); // Verifica se o tema é escuro.

    if (isDark) {
        swapStyleSheet("css/dark-mode.css");
    } else {
        swapStyleSheet("css/light-mode.css");
    }
}
update(); // Inicia atualizando o tema.

// Conecta o evento caso o usuario troce o esquema de cores enquanto a pagina está carregada.
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    update();
});