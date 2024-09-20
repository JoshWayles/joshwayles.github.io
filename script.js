// Day/night button
const dayNightBtn = document.getElementById("day-night");
const dayNightIcon = document.getElementById("day-night-icon");
dayNightBtn.addEventListener("click", dayNightChange);

const colourVariables = document.documentElement.style;
let dayMode = true;

function dayNightChange() {
    if (dayMode) {
        dayNightIcon.classList.remove("fa-moon");
        dayNightIcon.classList.add("fa-sun");
        colourVariables.setProperty('--colour1', '#ffffff');
        colourVariables.setProperty('--colour2', '#000000');
        colourVariables.setProperty('--colour3', '#bbbbbb');
        dayMode = false;
    } else {
        dayNightIcon.classList.add("fa-moon");
        dayNightIcon.classList.remove("fa-sun");
        colourVariables.setProperty('--colour2', '#ffffff');
        colourVariables.setProperty('--colour1', '#000000');
        colourVariables.setProperty('--colour3', '#696969');
        dayMode = true;
    }
}

//Meowsteroid thumb image change
const meowsteroids = document.getElementById('meowsteroids-img')

function meowImageChange(inp) {
    meowsteroids.src = inp.src;
}

//Gator thumb image change
const gator = document.getElementById('gator-img')

function gatorImageChange(inp) {
    gator.src = inp.src;
}

//Josh facts
const factsOutput = document.getElementById("facts-output")
const factBtn = document.getElementById("josh-facts");
factBtn.addEventListener("click", joshFact);

const joshFactArray = ["Specialty dish: some kind of stew", "Most potato waffles eaten in the bath: 8", "Age I completed Super Mario Land: 24", "Current age: 34", "Broken bones: 1/2", "Cycling related accidents: errr...", "Favourite anime: Mob Psycho 100", "Magic The Gathering deck: mono red goblins", "Longest juggling streak: 1 minute 15 seconds"]
let reference;

function joshFact() {
    let random = Math.floor(Math.random() * joshFactArray.length);
    while (random === reference) {
        random = Math.floor(Math.random() * joshFactArray.length);
    }
    factsOutput.textContent = joshFactArray[random];
    reference = random;
}