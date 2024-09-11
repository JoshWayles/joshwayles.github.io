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

//Meowsteroid elements

let meowIndex = 0;
const meowImagesArray = ["images/meowsteroids/title.jpg", "images/meowsteroids/music.jpg", "images/meowsteroids/controls.jpg", "images/meowsteroids/game1.jpg", "images/meowsteroids/game2.jpg", "images/meowsteroids/game3.jpg"];
const meowDisplay = document.getElementById("meowsteroids-screenshots");
const meowImageCounter = document.getElementById("meow-img-counter");

//Exercise gator elements

let gatorIndex = 0
const gatorImagesArray = ["images/croc/josh_wayles_illustration_alligator_crocodile_character.jpg", "images/croc/josh_wayles_illustration_alligator_crocodile_shapes.jpg", "images/croc/josh_wayles_illustration_alligator_crocodile_value.jpg", "images/croc/josh_wayles_illustration_alligator_crocodile_character_sketch.jpg"]
const gatorDisplay = document.getElementById("exercise-gator");
const gatorImageCounter = document.getElementById("gator-img-counter");

//code for image changes

function imageChange(inp) {
    //Meowsteroids
    if (inp.id === "meow-next" || inp.id === "meow-previous") {
        if (inp.id === "meow-next") {
            if (meowIndex === 5) {
                meowIndex = -1;
            }
            meowIndex += 1;
        }
        if (inp.id === "meow-previous") {
            if (meowIndex === 0) {
                meowIndex = 6;
            }
            meowIndex -= 1;
        }
        meowImageCounter.textContent = `${meowIndex + 1}/6`;
        meowDisplay.style.animation = "img-fade 1s";
        meowDisplay.src = `${meowImagesArray[meowIndex]}`;
        setTimeout(() => { meowDisplay.style.animation = "none" }, 500);
    }
    //Exercise gator
    if (inp.id === "gator-next" || inp.id === "gator-previous") {
        if (inp.id === "gator-next") {
            if (gatorIndex === 3) {
                gatorIndex = -1;
            }
            gatorIndex += 1;
        }
        if (inp.id === "gator-previous") {
            if (gatorIndex === 0) {
                gatorIndex = 4;
            }
            gatorIndex -= 1;
        }
        gatorImageCounter.textContent = `${gatorIndex + 1}/4`;
        gatorDisplay.style.animation = "img-fade 1s";
        gatorDisplay.src = `${gatorImagesArray[gatorIndex]}`;
        setTimeout(() => { gatorDisplay.style.animation = "none" }, 500);
    }
}

//Josh facts

const factsOutput = document.getElementById("facts-output")
const factBtn = document.getElementById("josh-facts");
factBtn.addEventListener("click", joshFact);

const joshFactArray = ["Specialty dish: some kind of stew with beans","I worked as a tattoo artist","Most potato waffles eaten in the bath: 8", "Age I completed Super Mario Land: 24", "Current age: 33", "Broken bones: 1/2", "Cycling related accidents: errr...", "Favourite anime: Mob Psycho 100", "Magic The Gathering deck: mono red goblins"]
let reference;

function joshFact() {
    let random = Math.floor(Math.random() * 9);
    while (random === reference) {
        random = Math.floor(Math.random() * 9);
    }
    factsOutput.textContent = joshFactArray[random];
    reference = random;
}