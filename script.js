// HTML elementen
const titel = document.getElementById("titel");
const tekst = document.getElementById("tekst");
const dagKnop = document.getElementById("dag");
const nachtKnop = document.getElementById("nacht");
const resetKnop = document.getElementById("reset");

// geluid
const dagGeluid = new Audio("audio/day.mp3");
const nachtGeluid = new Audio("audio/night.mp3");

// modus onthouden
let modus = "";

// dag functie
function dag() {
    dagGeluid.play();
    document.body.className = "dag";
    titel.textContent = "Goedemorgen!";
    tekst.textContent = "De zon schijnt.";
    modus = "dag";
}

// nacht functie
function nacht() {
    nachtGeluid.play();
    document.body.className = "nacht";
    titel.textContent = "Goedenavond!";
    tekst.textContent = "Slaap lekker.";
    modus = "nacht";
}

// reset met if/else
function reset() {

    if (modus === "dag") {
        tekst.textContent = "Ben je moe?";
    }

    else if (modus === "nacht") {
        tekst.textContent = "Nog motivatie over?";
    }

    else {
        tekst.textContent = "Nog niets veranderd.";
    }

    document.body.className = "";
    titel.textContent = "Hallo!";
    modus = "";
}

// events
dagKnop.addEventListener("click", dag);
nachtKnop.addEventListener("click", nacht);
resetKnop.addEventListener("click", reset);

//Bronnenlijst
// https://elevenlabs.io/sound-effects/whoosh
// https://elevenlabs.io/sound-effects/alarm
// https://www.w3schools.com/js/js_if_else.asp
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement

