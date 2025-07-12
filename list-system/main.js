document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const rect = button.getBoundingClientRect();

        const size = Math.max(button.clientWidth, button.clientHeight);
        circle.style.width = circle.style.height = size + 'px';
        circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
        circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
        circle.classList.add('ripple');

        button.appendChild(circle);

        setTimeout(() => circle.remove(), 600); // remove ripple after animation

        if (button.getAttribute("link")) {
            setTimeout(() => {
                window.location.href = button.getAttribute("link");
            }, 300);
        }
    });
});

document.querySelectorAll("button.item.folder").forEach(button => {
    button.addEventListener('click', function (e) {
        button.querySelectorAll(".expand-icon").forEach(img => {
            img.classList.toggle("folded");
        })
        button.querySelectorAll(".folder-icon").forEach(img => {
            img.classList.toggle("expand");
        })
        button.parentElement.querySelectorAll("button.item.child").forEach(item => {
            if (item != button) {
                item.classList.toggle("hidden");
            } 
        });

        let state = button.getAttribute('folded');
        button.parentElement.classList.toggle("show");

        button.setAttribute('folded', !state);

    });
});

const main = document.getElementById("window");
setTimeout(() => {
    main.style.height = (main.children.length * 50)+"px";
    main.style.opacity = 1;
    setInterval(() => {
        main.style.height = "auto";
    }, 100)
}, 200)

const copy = document.querySelector(".copyrights");
const ver = document.querySelector(".version");
copy.addEventListener("mouseover", () => {
    ver.classList.remove("hidden");
});
copy.addEventListener("mouseout", () => {
    ver.classList.add("hidden");
});