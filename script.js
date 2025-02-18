//  🗒️ - Constantes du Code : 


// ------Constantes HTML--------\\
const countDiv = document.getElementById('count');
const secDiv = document.getElementById('sec');
const block = document.getElementById('block');
//nombre de tools
const shovelCount = document.querySelector("#nbr1");
const axeCount = document.querySelector("#nbr2");
const pickaxeCount = document.querySelector("#nbr3");
const swordCount = document.querySelector("#nbr4");
//notifs
const pushNotifNoMoney = document.querySelector(".notifications");
const pushNotifNoTools = document.querySelector(".tools");

// Text :
const shovelPerSec = document.getElementById('text1');
const axePerSec = document.getElementById('text2');
const pickaxePerSec = document.getElementById('text3');
const swordPerSec = document.getElementById('text4');
// Text Power
const power1 = document.getElementById('power1');
const power2 = document.getElementById('power2');
const power3 = document.getElementById('power3');
const power4 = document.getElementById('power4');
// Images :
const image = document.querySelector('.image');
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");
// Buttons :
const buyShovelButton = document.querySelector('.shop #add1');
const buyAxeButton = document.querySelector('.shop #add2');
const buyPickaxeButton = document.querySelector('.shop #add3');
const buySwordButton = document.querySelector('.shop #add4');
const buttonWorld = document.querySelector('.shop #levelup'); 
const nextWorld = document.querySelector('#nextworld');


const main = document.querySelector('.main .cookie'); // divs pour Front End
const container = document.querySelector('.main .shop'); // divs pour Front End

// ------Constantes Strings---------\\
const secTitle = "/s";
const cookieTitleCount = " Cookies - Cookie-Cliker";
const cookieNone = "Cookies : none";
// ----------------------------------------\\

// -------Variables Objets et Class-------------\\

// Amélioration Outils prix
let shovelPrice = 50;
let axePrice = 250; 
let pickaxePrice = 1500; 
let swordPrice = 2700;

// Amélioration Cookies/s 
let shovelPower = 1; 
let axePower = 25; 
let pickaxePower = 150;
let swordPower = 200;

// Amélioration Niveau prix
let cavePrice = 300000;
let mine1Price = 4000000;
let mine2Price = 24000000;
let filonMinePrice = 48000000;
let netherPrice= 1000000000;

// Boolean Activé ou non pour les améliorations
let shovel = false;
let axe = false;
let pickaxe = false;
let sword = false;

// Boolean pour les mondes : 
// let forestBool = false;
let caveBool = false;
let mine1Bool = false;
let mine2Bool = false;
let filonMineBool = false;
let netherBool = false;
let endBool = false;

let toolsCount = {
    shovel:0,
    axe:0,
    pickaxe:0,
    sword:0,
}
// ----------------------------------------\\

// ------Variables Globales----------\\
let count = 0; // COMPTEUR DES COOKIES
let sec = 0; // COMPTEUR DES COOKIES PAR SECONDES 
let interval; // Variable Interval
// --- Fonctions GagneTemps --- \\
function updateAddCookie(nombre=0) { // Ajoute un Nombre de Cookie et Update le compteur
    let displayCount;
    count+=nombre;
    if (count >= 1000000000) { // MILLIARDS
        let millions = Math.floor(count / 1000000000); 
        let temp = Math.floor((count % 10000000) / 100000); 
        displayCount = millions + "Md" + temp; 
    } 
    else if (count >= 1000000) { // MILLIONS
        let millions = Math.floor(count / 1000000); 
        let temp = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + temp; 
    } 
    else if(count<999999){ // BASIC
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount;
    saveProgression();
}

function updateRmCookie(nombre=0){ // Enleve un Nombre de Cookie et Update le compteur
    let displayCount;
    count-=nombre;
    if (count >= 1000000000) { // MILLIARDS
        let milliard = Math.floor(count / 1000000000); 
        let reste = Math.floor((count % 10000000) / 100000); 
        displayCount = milliard + "Md" + reste; 
    } 
    else if (count >= 1000000) { // MILLIONS
        let millions = Math.floor(count / 1000000); 
        let reste = Math.floor((count % 1000000) / 10000); 
        displayCount = millions + "M" + reste; 
    } 
    else if(count<999999){ // Basic
        displayCount = count; 
    }
    countDiv.innerText = displayCount; 
    document.getElementById('title').innerText = displayCount + cookieTitleCount; 
    saveProgression();
}

function updateBackground(){ // UPDATE SHOP, COOKIE BG, TEXT
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.background = 'url(./images/cave.png)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
}

function update2() {
    main.style.background = 'url(./images/bg3.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Golden_Shovel.webp")
    image2.setAttribute("src", "./images/Golden_Axe.webp")
    image3.setAttribute("src", "./images/Golden_Pickaxe.webp")
    image4.setAttribute("src", "./images/Golden_Sword.webp")
    block.setAttribute("src", "./images/Gold_Ingot.webp")
}

function update3() {
    main.style.background = 'url(./images/bg4.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Iron_Shovel.webp")
    image2.setAttribute("src", "./images/Iron_Axe.webp")
    image3.setAttribute("src", "./images/Iron_Pickaxe.webp")
    image4.setAttribute("src", "./images/Iron_Sword.webp")
    block.setAttribute("src", "./images/Iron_Ingot.webp")
}

function update4() {
    main.style.background = 'url(./images/bg5.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Diamond_Shovel.webp")
    image2.setAttribute("src", "./images/Diamond_Axe.webp")
    image3.setAttribute("src", "./images/Diamond_Pickaxe.webp")
    image4.setAttribute("src", "./images/Diamond_Sword.webp")
    block.setAttribute("src", "./images/Diamant.webp")
}

function update5() {
    main.style.background = 'url(./images/bg6.png)';
    title.style.background = 'url(./images/stonetxt.jpg)';
    main.style.backgroundRepeat = 'no-repeat'
    main.style.backgroundPosition = 'center',
    main.style.backgroundSize = 'cover',
    container.style.background = 'url(./images/stonetxt.jpg)';
    image1.setAttribute("src", "./images/Netherite_Shovel.webp")
    image2.setAttribute("src", "./images/Netherite_Axe.webp")
    image3.setAttribute("src", "./images/Netherite_Pickaxe.webp")
    image4.setAttribute("src", "./images/Netherite_Sword.webp")
    block.setAttribute("src", "./images/Netherite_Ingot.webp")
}

function updateTools(){ // UPDATE TOOLS VISUAL
    image1.setAttribute("src", "./images/stone-shovel.png")
    image2.setAttribute("src", "./images/Stone-Axe.webp")
    image3.setAttribute("src", "./images/Stone-Pickaxe.webp")
    image4.setAttribute("src", "./images/Stone-Sword.webp")
    block.setAttribute("src", "./images/stone.png")
}
function updatePrice(){ // UPDATE PRICE OF TOOLS
    shovelPerSec.innerText = shovelPrice;
    axePerSec.innerText = axePrice;
    text3.innerText = pickaxePrice;
    swordPerSec.innerText = swordPrice;
}
function updatePower(){ // UPDATE POWER OF TOOLS /S
    power1.innerText = shovelPower + secTitle;
    power2.innerText = axePower + secTitle;
    power3.innerText = pickaxePower + secTitle;
    power4.innerText = swordPower + secTitle;
}
function updateNbr1(){
    shovelCount.innerText = toolsCount.shovel;
}
function updateNbr2(){
    axeCount.innerText = toolsCount.axe;
}
function updateNbr3(){
    pickaxeCount.innerText = toolsCount.pickaxe;
}
function updateNbr4(){
    swordCount.innerText = toolsCount.sword;
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
    localStorage.setItem('netherBool', netherBool);
    localStorage.setItem('endBool', endBool);
}
function loadSave() { // LOAD SAUVEGARDE ⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️⛔️ A ENCAPSULER  // JSON
    // Pattern pour les INT :
    // variable = parseInt(localStorage.getitem('nomItem), Base de comptage || Valeur de base souhaitée); // valeur de base = null
    sec = parseInt(localStorage.getItem('cookieSec'), 10) || 0;
    count = parseInt(localStorage.getItem('cookieCount'), 10) || count;
    toolsCount.shovel = parseInt(localStorage.getItem('toolsCount.shovel'), 10) || 0;
    toolsCount.axe = parseInt(localStorage.getItem('toolsCount.axe'), 10) || 0;
    toolsCount.pickaxe = parseInt(localStorage.getItem('toolsCount.pickaxe'), 10) || 0;
    toolsCount.sword = parseInt(localStorage.getItem('toolsCount.sword'), 10) || 0;
    shovelPrice = parseInt(localStorage.getItem('shovelPrice'), 10) || shovelPrice;
    axePrice = parseInt(localStorage.getItem('axePrice'), 10) || axePrice;
    pickaxePrice = parseInt(localStorage.getItem('pickaxePrice'), 10) || pickaxePrice;
    swordPrice = parseInt(localStorage.getItem('swordPrice'), 10) || swordPrice;
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
    netherBool = localStorage.getItem('netherBool') === 'true' || false;
    endBool = localStorage.getItem('endBool') === 'true' || false;
    if(caveBool === false && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        // nextWorld.innerText = "Cave World";
    }
    if(caveBool === true && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        updateBackground();
        nextWorld.innerText = "Gold Mine";
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === false && filonMineBool === false && netherBool === false){
        update2();
        nextWorld.innerText = "Iron Mine";
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === false && netherBool === false){
        update3();
        nextWorld.innerText = "Diamond Mine";
        console.log("test")
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === false){
        update4();
        nextWorld.innerText = "Nether World";
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === true){
        update5();
        nextWorld.innerText = "The End";
    }
    if(endBool === true){
        document.location.href = './dragon/index.html'
    }
    updateAddCookie(0);
    updatePower()
    updatePrice()
}

function notifications1(){
    pushNotifNoMoney.classList.add("active");
    setTimeout(() => {
        pushNotifNoMoney.classList.remove("active");
      }, "2000");
      
}

function notifications2(){
    pushNotifNoTools.classList.add("active");
    setTimeout(() => {
        pushNotifNoTools.classList.remove("active");
      }, "2000");
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

    nextWorld.innerText = "Cave World";
    loadSave();
    retrieveTools();
    updateAddCookie();
    updateNbr1()
    updateNbr2()
    updateNbr3()
    updateNbr4()
    updatePrice();
    updatePower();
    console.log(toolsCount);
    console.log(count);

    
}



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
        toolsCount.shovel += 1;
        shovel = true;
        updateRmCookie(shovelPrice)
        sec += shovelPower;
        secDiv.innerText = sec +secTitle;
        updateNbr1();
        interval = setInterval(() => {
            image.click();
            updateAddCookie(shovelPower-1);
        }, 1000);
    }
    else if(count<shovelPrice){
        notifications1();
    }
});

// 💞 - Bouton Bonus +2/s
buyAxeButton.addEventListener('click', () => {
    if(count>=axePrice){
        toolsCount.axe += 1;
        axe = true;
        updateRmCookie(axePrice)
        sec += axePower;
        updateNbr2();
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(axePower-1);// [2] - Ajouter 1 cookies pour Matcher avec la Valeur de Sec (1+1=2)
        }, 1000);
    }
    else if(count<axePrice){
        notifications1();
    }
});

// 💞 - Bouton Bonus +5/s
buyPickaxeButton.addEventListener('click', () => {
    if(count>=pickaxePrice){
        toolsCount.pickaxe += 1;
        pickaxe = true;
        updateRmCookie(pickaxePrice)
        sec += pickaxePower;
        updateNbr3();
        secDiv.innerText = sec +secTitle;
        interval = setInterval(() => {
            image.click(); // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(pickaxePower-1); // [2] - Ajouter 4 cookies pour Matcher avec la Valeur de Sec (1+4=5)
        }, 1000);
    }
    else if(count<pickaxePrice){
        notifications1();
    }
});

// 💞 - Bouton Bonus +15/s
buySwordButton.addEventListener('click', () => {
    if(count>=swordPrice){
        toolsCount.sword += 1;
        updateRmCookie(swordPrice)
        sword = true;
        sec += swordPower;
        secDiv.innerText = sec + secTitle;
        updateNbr4();
        interval = setInterval(() => {
            image.click();  // [1] - ANIMATION ET +1 AU COMPTEUR
            updateAddCookie(swordPower-1); // [2] - Ajouter 14 cookies pour Matcher avec la Valeur de Sec (1+14=15)
        }, 1000);
    }
    else if(count<swordPrice){
        notifications1();
    }
});


// Bouton Level Up
buttonWorld.addEventListener('click', () => { 
    // Function Pattern for Level Up 
    // Cave Level UP
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === true){ 
        endBool = true;
        document.location.href = './dragon/index.html'
    }

    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === true && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update5();
                netherBool = true;
                cavePrice*=4;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=4;
                axePrice*=4;
                pickaxePrice*=4;
                swordPrice*=4;
                // x2 sur les gains des outils !! :
                shovelPower*=4;
                axePower*=4;
                pickaxePower*=4;
                swordPower*=4;
                nextWorld.innerText = "The End";
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()
            }
            else{
                notifications2();
            };
        }
    else if(count<cavePrice){
        notifications1();
        }
    }
    if(caveBool === true && mine1Bool === true && mine2Bool === true && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update4();
                filonMineBool = true;
                cavePrice*=4;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=4;
                axePrice*=4;
                pickaxePrice*=4;
                swordPrice*=4;
                // x2 sur les gains des outils !! :
                shovelPower*=4;
                axePower*=4;
                pickaxePower*=4;
                swordPower*=4;
                nextWorld.innerText = "Nether World";
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                notifications2();
            };
        }
    else if(count<cavePrice){
        notifications1();
        }
    }

    if(caveBool === true && mine1Bool === true && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update3();
                mine2Bool = true;
                cavePrice*=4;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=4;
                axePrice*=4;
                pickaxePrice*=4;
                swordPrice*=4;
                // x2 sur les gains des outils !! :
                shovelPower*=4;
                axePower*=4;
                pickaxePower*=4;
                swordPower*=4;
                nextWorld.innerText = "Diamond Mine";
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                notifications2();
            };
        }
    else if(count<cavePrice){
        notifications1();
        }
    }
    
    if(caveBool === true && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                update2();
                mine1Bool = true;
                cavePrice*=4;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=4;
                axePrice*=4;
                pickaxePrice*=4;
                swordPrice*=4;
                // x2 sur les gains des outils !! :
                shovelPower*=4;
                axePower*=4;
                pickaxePower*=4;
                swordPower*=4;
                nextWorld.innerText = "Iron Mine";
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updatePrice();
                updatePower()

            }
            else{
                notifications2();
            };
        }
    else if(count<cavePrice){
        notifications1();
        }
    }
    
    if(caveBool === false && mine1Bool === false && mine2Bool === false && filonMineBool === false && netherBool === false){
        if(count>=cavePrice){
            if(shovel && axe && pickaxe && sword === true){
                cavePrice*=4;
                caveBool=true;
                shovel=false;
                axe=false;
                pickaxe=false;
                sword=false;
                // Change Price Outils
                shovelPrice*=4;
                axePrice*=4;
                pickaxePrice*=4;
                swordPrice*=4;
                // x2 sur les gains des outils !! :
                shovelPower*=4;
                axePower*=4;
                pickaxePower*=4;
                swordPower*=4;
                nextWorld.innerText = "Gold Mine";
                // Enlever les cookies nécessaire au level up du porte monnaie de l'utilisateur
                updateRmCookie(cavePrice);
                  // Update visuel
                updateBackground();
                updateTools();
                updatePrice();
                updatePower()
            }
            else{
                notifications2();
            };
        }
    else if(count<cavePrice){
        notifications1();
        }
    }
    // Level Up for Mine
    
});


// START SCRIPT AFTER L'INITIALISATION 

// 🚦- Début du jeu et checkup nécessaires

onStart();

setInterval(() => {
    saveProgression();
    
}, 1000);
