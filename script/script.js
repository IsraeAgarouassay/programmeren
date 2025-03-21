// Selecteert HTML-elementen die worden aangepast

const koptekst = document.querySelector("h1");
const kumpirimg = document.querySelector("#kumpirimg"); 

// Selecteert knoppen voor de toppings en klaar knop

const mais = document.querySelector("#mais");
const olijven = document.querySelector("#olijven");  
const wortel = document.querySelector("#wortel");  
const klaar = document.querySelector("#klaar");

// Selecteert de afbeeldingen van de toppings

const maisImage = document.querySelector('img[alt="mais"]');
const olijvenImage = document.querySelector('img[alt="olijven"]');
const wortelImage = document.querySelector('img[alt="wortel"]');

// Geluiden voor feedback aan de gebruiker

// https://pixabay.com/nl/sound-effects/search/fout/?theme=film+en+speciale+effecten
const klaargeluid = new Audio('geluiden/klaargeluid.mp3');
const nietklaargeluid = new Audio('geluiden/errorgeluid.mp3');

// Functie om een topping toe te voegen of te verwijderen

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

// Functie om te controleren of de kumpir klaar is of niet

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

// Knoppen koppelen aan hun functies

mais.addEventListener("click", kiesMais);
olijven.addEventListener("click", kiesOlijven);
wortel.addEventListener("click", kiesWortel);
klaar.addEventListener("click", klaarKnop);