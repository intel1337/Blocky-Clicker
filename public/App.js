
// function updateAddCookie(nombre=0) { // Ajoute un Nombre de Cookie et Update le compteur
//     let displayCount;
//     count+=nombre;
//     if (count >= 1000000000) { // MILLIARDS
//         let millions = Math.floor(count / 1000000000); 
//         let temp = Math.floor((count % 10000000) / 100000); 
//         displayCount = millions + "Md" + temp; 
//     } 
//     else if (count >= 1000000) { // MILLIONS
//         let millions = Math.floor(count / 1000000); 
//         let temp = Math.floor((count % 1000000) / 10000); 
//         displayCount = millions + "M" + temp; 
//     } 
//     else if(count<999999){ // BASIC
//         displayCount = count; 
//     }
//     countDiv.innerText = displayCount; 
//     document.getElementById('title').innerText = displayCount + cookieTitleCount;
//     saveProgression();
// }

// function updateRmCookie(nombre){ // Enleve un Nombre de Cookie et Update le compteur
//     let displayCount;
//     count-=nombre;
//     if (count >= 1000000000) { // MILLIARDS
//         let milliard = Math.floor(count / 1000000000); 
//         let reste = Math.floor((count % 10000000) / 100000); 
//         displayCount = milliard + "Md" + reste; 
//     } 
//     else if (count >= 1000000) { // MILLIONS
//         let millions = Math.floor(count / 1000000); 
//         let reste = Math.floor((count % 1000000) / 10000); 
//         displayCount = millions + "M" + reste; 
//     } 
//     else if(count<999999){ // Basic
//         displayCount = count; 
//     }
//     countDiv.innerText = displayCount; 
//     document.getElementById('title').innerText = displayCount + cookieTitleCount; 
//     saveProgression();
// }

// function updateBackground(){ // UPDATE SHOP, COOKIE BG, TEXT
//     document.body.style.backgroundColor = '#808080';
//     title.style.background = 'url(./images/stonetxt.jpg)';
//     main.style.background = 'url(./images/cave.png)';
//     main.style.backgroundRepeat = 'no-repeat'
//     main.style.backgroundPosition = 'center',
//     main.style.backgroundSize = 'cover',
//     container.style.background = 'url(./images/stonetxt.jpg)';
// }

function updateTools(){ // UPDATE TOOLS VISUAL
    image1.setAttribute("src", "./images/stone-shovel.png")
    image2.setAttribute("src", "./images/Stone-Axe.webp")
    image3.setAttribute("src", "./images/Stone-Pickaxe.webp")
    image4.setAttribute("src", "./images/Stone-Sword.webp")
}
function updatePrice(){ // UPDATE PRICE OF TOOLS
    text1.innerText = shovelPrice + cookieEmoji;
    text2.innerText = axePrice + cookieEmoji;
    text3.innerText = pickaxePrice + cookieEmoji;
    text4.innerText = swordPrice + cookieEmoji;
}
function updatePower(){ // UPDATE POWER OF TOOLS /S
    power1.innerText = shovelPower + secTitle;
    power2.innerText = axePower + secTitle;
    power3.innerText = pickaxePower + secTitle;
    power4.innerText = swordPower + secTitle;
}

function saveProgression() { // SAVE LA PROGRESSION ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ A ENCAPSULER  // JSON
    localStorage.setItem('cookieSec', sec);
    localStorage.setItem('cookieCount', count);
    localStorage.setItem('toolsCount.shovel', toolsCount.shovel);
    localStorage.setItem('toolsCount.axe', toolsCount.axe);
    localStorage.setItem('toolsCount.pickaxe', toolsCount.pickaxe);
    localStorage.setItem('toolsCount.sword', toolsCount.sword);
    localStorage.setItem('shovelPrice', shovelPrice);
    localStorage.setItem('axePrice', axePrice);
    localStorage.setItem('pickaxePrice', pickaxePrice);
    localStorage.setItem('swordPrice', swordPrice);
    localStorage.setItem('shovelPower', shovelPower);
    localStorage.setItem('axePower', axePower);
    localStorage.setItem('pickaxePower', pickaxePower);
    localStorage.setItem('swordPower', swordPower);
    localStorage.setItem('shovel', shovel);
    localStorage.setItem('axe', axe);
    localStorage.setItem('pickaxe', pickaxe);
    localStorage.setItem('sword', sword);
    localStorage.setItem('caveBool', caveBool);
    localStorage.setItem('mine1Bool', mine1Bool);
    localStorage.setItem('mine2Bool', mine2Bool);
    localStorage.setItem('filonMineBool', filonMineBool);
}
function loadSave() { // LOAD SAUVEGARDE ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ A ENCAPSULER  // JSON
    // Pattern pour les INT :
    // variable = parseInt(localStorage.getitem('nomItem), Base de comptage || Valeur de base souhaitée); // valeur de base = null
    sec = parseInt(localStorage.getItem('cookieSec'), 10) || 0;
    count = parseInt(localStorage.getItem('cookieCount'), 10) || 0;
    toolsCount.shovel = parseInt(localStorage.getItem('toolsCount.shovel'), 10) || 0;
    toolsCount.axe = parseInt(localStorage.getItem('toolsCount.axe'), 10) || 0;
    toolsCount.pickaxe = parseInt(localStorage.getItem('toolsCount.pickaxe'), 10) || 0;
    toolsCount.sword = parseInt(localStorage.getItem('toolsCount.sword'), 10) || 0;
    shovelPrice = parseInt(localStorage.getItem('shovelPrice'), 10) || 10;
    axePrice = parseInt(localStorage.getItem('axePrice'), 10) || 100;
    pickaxePrice = parseInt(localStorage.getItem('pickaxePrice'), 10) || 500;
    swordPrice = parseInt(localStorage.getItem('swordPrice'), 10) || 1000;
    shovelPower = parseInt(localStorage.getItem('shovelPower'), 10) || 1;
    axePower = parseInt(localStorage.getItem('axePower'), 10) || 12;
    pickaxePower = parseInt(localStorage.getItem('pickaxePower'), 10) || 77;
    swordPower = parseInt(localStorage.getItem('swordPower'), 10) || 160;

    // Pattern pour les Bools :
    // variable = localStorage.getitem('nomItem), VALEUR SOUHAITE || Valeur de base souhaitée // valeur de base = null
    shovel = localStorage.getItem('shovel') === 'true' || false;
    axe = localStorage.getItem('axe') === 'true' || false;
    pickaxe = localStorage.getItem('pickaxe') === 'true' || false;
    sword = localStorage.getItem('sword') === 'true' || false;
    caveBool = localStorage.getItem('caveBool') === 'true' || false;
    mine1Bool = localStorage.getItem('mine1Bool') === 'true' || false;
    mine2Bool = localStorage.getItem('mine2Bool') === 'true' || false;
    filonMineBool = localStorage.getItem('filonMineBool') === 'true' || false;
}

function retrieveTools() { // FONCTION POUR RELANCER LES EVENTS LISTENERS 
    // DECLA DES VARIABLES TOOLS TEMPORAIRES
    let s;
    let a;
    let p;
    let sw;
    let total;
    // MULTIPLICATION DU COUT EN COOKIES
    s = toolsCount.shovel * shovelPrice;
    a = toolsCount.axe * axePrice;
    p = toolsCount.pickaxe * pickaxePrice;
    sw = toolsCount.sword * swordPrice;
    // TOTAL DES OUTILS EN COOKIES
    total = s + a + p + sw; 
    // AJOUTER A LA BALANCE "TEMPORAIREMENT"
    count += total;
    // SERIES DE BOUCLES FOR POUR SIMULER DES CLIQUES SUR LES BOUTONS
    for (let i = 0; i != toolsCount.shovel; i++) {
        toolsCount.shovel -= 1;  //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=shovelPower;
        buyShovelButton.click(); 
        console.log("Clique sur bouton 1")
    }
    for (let i = 0; i != toolsCount.axe; i++) {
        toolsCount.axe -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=axePower;
        buyAxeButton.click();
        console.log("Clique sur bouton 2")
    }
    for (let i = 0; i != toolsCount.pickaxe; i++) {
        // tools.pickaxes.lenght 
        toolsCount.pickaxe -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=pickaxePower;
        buyPickaxeButton.click(); 
        console.log("Clique sur bouton 3")
    }
    for (let i = 0; i != toolsCount.sword; i++) {
        toolsCount.sword -= 1; //ENLEVER 1 CAR +=1 DANS LES BOUTONS (SUITE AU AJOUT TEMPORAIRE DE COOKIES)
        sec-=swordPower;
        buySwordButton.click(); 
        console.log("Clique sur bouton 4")
    }

    // UPDATE VISUELLE
    updateAddCookie();  
    updatePrice();
}

function onStart(){
    if(count === 0){ // Si compteur à 0 affiche 0 cookies sur le titre
        document.getElementById('title').innerText = cookieNone;
    }
    loadSave();
    retrieveTools();
    updateAddCookie();
    updatePrice();
    updatePower();
    console.log(toolsCount);
    console.log(count);
}





// Switch pour les prix des améliorations

// 🚨 FONCTION DEPRECIE POUR LE CODE ACTUEL 🚨

// switch(count){
//     case count<10:
//         buyShovelButton.style.background = 'gray';
//         button2.style.background = 'gray';
//     case count === 10:
//         buyShovelButton.style.background = 'white';
//     case count === 100:
//         button2.style.background = 'white';
// };





// 🧪 -  Main Et Fonctions principales du jeu :


// 🍪 - Bouton Main Cookie +1;
image.addEventListener('click', () => {
    image.classList.toggle('active');
    // console.log("Cookie clicked. Current count:", count);
    updateAddCookie(1);
});

// 💞 - Bouton Bonus +1/s
buyShovelButton.addEventListener('click', () => {
    if(count>=shovelPrice){ // Si Nombre de Cookies est supérieur ou égal au prix du bouton
        shovel = true;
        updateRmCookie(shovelPrice)
        sec += shovelPower;
        secDiv.innerText = sec +secTitle;
        toolsCount.shovel += 1;
        interval = setInterval(() => {
            image.click();
            updateAddCookie(shovelPower-1);
        }, 1000);
    }
    else if(count<shovelPrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +2/s
buyAxeButton.addEventListener('click', () => {
    if(count>=axePrice){
        axe = true;
        updateRmCookie(axePrice)
        sec += axePower;
        secDiv.innerText = sec +secTitle;
        toolsCount.axe += 1;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(axePower-1);// [2] - Ajouter 1 cookies pour Matcher avec la Valeur de Sec (1+1=2)
        }, 1000);
    }
    else if(count<axePrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +5/s
buyPickaxeButton.addEventListener('click', () => {
    if(count>=pickaxePrice){
        pickaxe = true;
        updateRmCookie(pickaxePrice)
        sec += pickaxePower;
        secDiv.innerText = sec +secTitle;
        toolsCount.pickaxe += 1;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(pickaxePower-1); // [2] - Ajouter 4 cookies pour Matcher avec la Valeur de Sec (1+4=5)
        }, 1000);
    }
    else if(count<pickaxePrice){
        window.alert("Pas assez de Cookies !");
    }
});

// 💞 - Bouton Bonus +15/s
buySwordButton.addEventListener('click', () => {
    if(count>=swordPrice){
        sword = true;
        updateRmCookie(swordPrice)
        sec += swordPower;
        secDiv.innerText = sec + secTitle;
        toolsCount.sword += 1;
        interval = setInterval(() => {
            image.click();  // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(swordPower-1); // [2] - Ajouter 14 cookies pour Matcher avec la Valeur de Sec (1+14=15)
        }, 1000);
    }
    else if(count<swordPrice){
        window.alert("Pas assez de Cookies !");
    }
});


// Bouton Level Up
buttonWorld.addEventListener('click', () => { 
    // Function Pattern for Level Up 
    // Cave Level UP
    if(caveBool === false && mine1Bool === false && mine2Bool === false && filonMineBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                cavePrice*=2;
                // caveBool=false;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=2;
                axePrice*=2;
                pickaxePrice*=2;
                swordPrice*=2;
                // x2 sur les gains des outils !! :
                shovelPower*=2;
                axePower*=2;
                pickaxePower*=2;
                swordPower*=2;
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updateBackground();
                updateTools();
                updatePrice();
                updatePower()
            }
            else{
                window.alert("Vous Avez assez d'argent mais pas tout les outils !");
            };
        }
    else if(count<cavePrice){
        window.alert("Pas assez de Cookies !");
        }
    }
    // Level Up for Mine
    
});


// START SCRIPT AFTER L'INITIALISATION 

// 🚦- Début du jeu et checkup nécessaires

onStart();