function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function update() {
    let isDark = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
        swapStyleSheet("css/dark-mode.css");
    } else {
        swapStyleSheet("css/light-mode.css");
    }
}
update();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    update();
});