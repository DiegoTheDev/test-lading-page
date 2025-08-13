var parsedDom = [];
let gambling = false;

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function spawn(imgSrc) {
    let breed = imgSrc.split("/")[4]
    let name = breed.split("-");
    let nameStr = "";
    
    for (let i = 0; i < name.length; i++) { 
        if (name.length > 1 && i < name.length) {
            nameStr += " "
        }
        nameStr += capitalizeFirstLetter(name[i]);
    }
    
    let injectionHtml = ` <div class="card hidden">
            <h3 class="dog-name">${nameStr}</h3>
            <img src="${imgSrc}" class="loading">
            <div class="elmt">
                <h3>Attack: </h3>
                <div class="placeholder active">
                    <h3></h3>
                </div>
            </div>
            <div class="elmt">
                <h3>Defense: </h3>
                <div class="placeholder active">
                    <h3></h3>
                </div>
            </div>
        </div>`;

    const parser = new DOMParser();
    const doc = parser.parseFromString(injectionHtml, 'text/html');
    const content = doc.body.firstElementChild;

    document.getElementById("galery").appendChild(content);
    console.log("Spawned "+imgSrc)

    parsedDom.push(content);
}

async function inject() {
    if (gambling) 
        return;
    gambling = true;
    document.getElementById("galery").innerHTML = "";
    document.getElementById("loader").classList.add('active');
   setTimeout(async () => {
     try {
        
        const request = fetch(`https://dog.ceo/api/breeds/image/random/50`);
        const responce = await (await request).json();
        console.log(responce);

        if (responce.status != "success") 
            return;

        console.log("Responce success.")
        parsedDom = [];
        const list = responce.message;
        for (let i = 0; i < list.length; i++) {
            spawn(list[i]);
        }
        // slk mt organizado
        document.getElementById("loader").classList.remove('active');
        setTimeout(() => {
            for (let i = 0; i < parsedDom.length; i++) { // loading fake
                 let temp = parsedDom[i];
                setTimeout(() => {
                   temp.classList.remove("hidden");
                   let vals = [];
                   setTimeout(() => {
                       temp.querySelectorAll(".elmt").forEach(element => {
                            let val = Math.random()*108;
                            if (val >= 90) {
                                if (Math.random() > 0.5) {
                                    val -= Math.random()*30;
                                }
                            }
                            vals.push(val);
                            let txt = element.querySelector(".placeholder h3");
                            txt.innerHTML = val.toFixed(2)
                            if (val > 80) {
                                txt.style.color = "#8A2BE2";
                            } else if (val > 50) {
                                 txt.style.color = "green";
                            } else {
                                txt.style.color = "red";
                            }
                            element.querySelector(".placeholder").classList.remove("active");

                            
                        });
                        let num = 0;
                        for (let e = 0; e < vals.length; e++) {
                            num+= vals[e];
                        }

                        num = num/vals.length;
                        let txt = temp.querySelector(".dog-name");
                        if (num > 100) {
                            txt.innerHTML += "<br>(GOD)";
                            txt.style.color = "#ffbb00ff";
                            temp.style.border = "1px solidrgb(255, 198, 43)";
                            temp.style.background = "linear-gradient(0deg, #fde49eff, #fde49eff, white, white)";
                            temp.style.boxshadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
                        } else if (num > 80) {
                            txt.style.color = "#8A2BE2";
                            temp.style.background = "linear-gradient(0deg, #c098e6ff, white, white, white)";
                        } else if (num > 50) {
                            temp.style.background = "linear-gradient(0deg, #9ffaa7ff, white, white, white)";
                             txt.style.color = "green";
                        } else {
                            txt.style.color = "red";
                            temp.style.background = "linear-gradient(0deg, #fa9f9fff, white, white, white)";
                        }
                        txt.innerHTML += `<br>[${num.toFixed(2)}]`;
                    }, Math.random()*2000)
                }, i*100)
            }
        }, 800);
        setTimeout(() => gambling = false, (2000+((parsedDom.length-1)*100)+800));
    } catch (e) {
        console.error(e);
    }
   }, 1000)
}

inject();