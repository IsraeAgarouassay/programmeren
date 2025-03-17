const koptekst = document.querySelector ("h1");
const kumpirimg = document.querySelector ("img"); 
const mais = document.querySelector ("#mais");
const olijven = document.querySelector ("#olijven");  
const wortel = document.querySelector ("#wortel");  
const klaar = document.querySelector ("#klaar");

const maisImage = document.querySelector('img[alt="mais"]');
const olijvenImage = document.querySelector('img[alt="olijven"]');
const wortelImage = document.querySelector('img[alt="wortel"]');

const klaargeluid = new Audio('geluiden/klaargeluid.mp3');
const nietklaargeluid = new Audio('geluiden/errorgeluid.mp3');

function kiesMais() {
    console.log("Je Mais is toegevoegd!");
    maisImage.classList.toggle('visible');
}

function kiesOlijven() {
    console.log("Je Olijven zijn toegevoegd!");
    olijvenImage.classList.toggle('visible');
}

function kiesWortel() {
    console.log("Je wortel is toegevoegd!");
    wortelImage.classList.toggle('visible');
}

function klaarKnop(){
    console.log("Je kumpir is klaar om op te eten");

    if(document.querySelector('img.visible')){
        klaargeluid.play();
        koptekst.textContent = "Je kumpir is klaar om op te eten"
    }
    else{
        nietklaargeluid.play()
        koptekst.textContent = "Zet toppings op je kumpir"
    }
}

mais.addEventListener("click", kiesMais);
olijven.addEventListener("click", kiesOlijven);
wortel.addEventListener("click", kiesWortel);
klaar.addEventListener("click", klaarKnop);