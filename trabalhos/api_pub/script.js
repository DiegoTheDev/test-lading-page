var parsedDom = [];

function spawn(imgSrc) {
    let breed = imgSrc.split("/")[4]
    let name = breed.replaceAll("-", " ");
    let injectionHtml = ` <div class="card hidden">
            <h3 class="dog-name">${name}</h3>
            <img src="${imgSrc}" class="loading">
            <div class="elmt">
                <h3>Attaque: </h3>
                <div class="placeholder active">
                    <h3></h3>
                </div>
            </div>
            <div class="elmt">
                <h3>Defesa: </h3>
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
    document.getElementById("galery").innerHTML = "";
    document.getElementById("loader").classList.add('active');
   setTimeout(async () => {
     try {
        
        const request = fetch(`https://dog.ceo/api/breeds/image/random/40`);
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
        
        document.getElementById("loader").classList.remove('active');
        setTimeout(() => {
            for (let i = 0; i < parsedDom.length; i++) {
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
                            txt.style.color = "#8A2BE2";
                        } else if (num > 80) {
                            txt.style.color = "#8A2BE2";
                        } else if (num > 50) {
                             txt.style.color = "green";
                        } else {
                            txt.style.color = "red";
                        }
                        txt.innerHTML += `<br>[${num.toFixed(2)}]`;
                    }, Math.random()*2000)
                }, i*100)
            }
        }, 800);
    } catch (e) {
        console.error(e);
    }
   }, 1000)
}

inject();