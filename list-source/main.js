// Made by @Mr-Right-Dev in Github.

let localSettings = setts;
const parser = new DOMParser();

const extPack = {
    "js": "js.png",
    "css": "css.png",
    "html": "html.png"
};

const htmlInject = `<div class="folder item s-bg clickable flx" style="justify-content: flex-start; flex-flow: row nowrap;">
    <img class="icon" src="list-source/imgs/generic/folder-closed.png">
    <h4 class="txt p-tx" style="margin-left: 10px;">Folder</h4>
</div>`;

// Set theme
let loaded = false;
const body = document.querySelector("body");
const load_ctx = document.getElementById("loading-context");
const wrapper = document.getElementById("content-wrapper");
const path = document.getElementById("root");
const tit = document.getElementById("tit");

path.innerHTML = localSettings.rootName;
tit.innerHTML = localSettings.rootName;

body.classList.remove("theme-simple", "theme-glass");
body.classList.add(`theme-${localSettings.theme}`);

function loadComplete() {
    const loader = document.getElementById("loader");
    loader.querySelectorAll("*").forEach(el => el.classList.add("hidden"));
    loader.classList.add("hide");
}

function alternateItemColors() {
    const items = Array.from(document.querySelectorAll('.item'));
    let visibleIndex = 0;
    
    for (const item of items) {
        item.classList.remove('even');
        if (!item.classList.contains('hidden')) {
            if (visibleIndex % 2 === 1) {
                item.classList.add('even');
            }
            visibleIndex++;
        }
    }
}


function countItems(arr) {
    let count = 0;
    for (const obj of arr) {
        count++;
        if (obj.type === "folder" && Array.isArray(obj.items)) {
            count += countItems(obj.items);
        }
    }
    return count;
}

function getFileIcon(ext) {
    const file = ext.split(".");
    if (file.length < 2) return "list-source/imgs/generic/generic.png";

    const icon = extPack[file[file.length - 1]];
    return `list-source/imgs/files/${icon || "generic.png"}`;
}

function connectRipple(el) {
    const fix = document.createElement("div");
    fix.classList.add("fix");
    const fix2 = document.createElement("div");
    fix.appendChild(fix2);
    el.appendChild(fix);

    el.addEventListener('click', e => {
        const circle = document.createElement('span');
        circle.classList.add('ripple');

        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        circle.style.width = circle.style.height = `${size}px`;
        circle.style.left = `${e.clientX - rect.left - size / 2}px`;
        circle.style.top = `${e.clientY - rect.top - size / 2}px`;

        fix2.appendChild(circle);
        setTimeout(() => circle.remove(), 600);
    });
}

let htmlStock = {};
let totalLoaded = 0;
let totalFiles = countItems(localSettings.files);

function connectFolder(folderEl, childrenKey) {
    folderEl.addEventListener("click", () => {
        
        const expanded = folderEl.getAttribute("expanded") === "true";
        folderEl.setAttribute("expanded", String(!expanded));
        folderEl.querySelector(".icon").src = `list-source/imgs/generic/${expanded ? "folder-closed" : "open-folder"}.png`;

        for (const child of htmlStock[childrenKey] || []) {
            child.classList.toggle("hidden");
        }
        alternateItemColors();
    });
}

let folderIdCounter = 0;

function inject(itemObj, parentKey, depth, currentKey) {
    totalLoaded++;
    load_ctx.innerHTML = `Injecting html (${totalLoaded}/${totalFiles})`;

    const doc = parser.parseFromString(htmlInject, "text/html");
    const content = doc.body.firstChild;
    content.querySelector("h4").innerText = itemObj.name;
    content.setAttribute("childID", parentKey);
    content.querySelector(".icon").style.marginLeft = `${(depth + 1) * 10}px`;

    connectRipple(content);

    if (!htmlStock[parentKey]) {
        htmlStock[parentKey] = [];
    }
    htmlStock[parentKey].push(content);

    if (parentKey !== "root") {
        content.classList.add("hidden");
    }

    if (itemObj.type === "folder") {
        content.setAttribute("childrenId", currentKey);
        content.setAttribute("expanded", "false");
        wrapper.appendChild(content);
        connectFolder(content, currentKey);
        return;
    }

    content.classList.remove("folder");
    content.querySelector(".icon").src = getFileIcon(itemObj.href);
    content.setAttribute("href", itemObj.href);
    wrapper.appendChild(content);

    content.addEventListener("click", () => {
        if (localSettings.fakeLoading) {
            setTimeout(() => {
                load_ctx.innerHTML = "Redirecting...";
                const loader = document.getElementById("loader");
                loader.querySelectorAll("*").forEach(el => el.classList.remove("hidden"));
                loader.classList.remove("hide");

                setTimeout(() => {
                    document.location.href = itemObj.href;
                }, 1000);

            }, 100);
        } else {
            document.location.href = itemObj.href;
        }
    });
}

function parse(arr, parentKey = "root", depth = 0) {
    for (const item of arr) {
        const currentKey = `folder-${folderIdCounter++}`;

        inject(item, parentKey, depth, currentKey);

        if (item.type === "folder" && Array.isArray(item.items)) {
            parse(item.items, currentKey, depth + 1);
        }
    }
}

if (localSettings.fakeLoading) {
    window.addEventListener("pageshow", function(event) {
        if (event.persisted) {
            // Página voltou do cache, forçar reload
            window.location.reload();
        }
    });
}

function load() {
    load_ctx.innerHTML = `Injecting html (${totalLoaded}/${totalFiles})`;
    parse(localSettings.files);
    alternateItemColors();
    load_ctx.innerHTML = "Injecting complete.";
    setTimeout(loadComplete, 100);
    loaded = true;
}

if (localSettings.fakeLoading) {
    setTimeout(load, 100);
} else {
    load();
}