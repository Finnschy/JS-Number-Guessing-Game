// Number Guessing Game
//--- Alle wichtigen Dinge aus dem HTML Dokument holen:
let result = document.getElementById("result")
let roundsCounter = document.getElementById("roundsCounter")
let rounds = document.getElementsByName("rounds")
let startGuessing = document.getElementById("start")

//--- Funktion für den Zufallsgenerator
const randomizer = () => {
    let randomNumber = Math.floor(Math.random() * 100 +1);
    return randomNumber
}
let compNumber = randomizer()
console.log(compNumber);

//--- Funktion um den Value aus den Radio Buttons zu kriegen
//--- das leere Array erstelle ich, um den value aus dem for loop außerhalb nutzen zu können, da ich ihn in der funktion für das eigentliche Spiel ab Zeile 41 brauche
let valueCollec = [];
function checkRounds() {
    let customInput = document.getElementById("customInput");
    
    for (let i = 0; i < rounds.length; i++) {
        rounds[i].onclick = function() {
            valueCollec = this.value;
            // console.log(valueCollec);
                if(valueCollec == 0) {
                    console.log("if schlaufe test");
                    customInput.classList.toggle("notDisplayed");
                    // diesen eventListener füge ich hinzu, weil ich den wert aus dem inputfeld sonst nur durch erneutes Klicken auf den Custom Radio Button bekommen würde. So braucht der User nichts mehr tun.
                    customInput.addEventListener("keyup", () => {
                        valueCollec = customInput.value;
                        // console.log(valueCollec);
                    })
                }
        }
      }
}
checkRounds()

//--- Funktion für das eigentliche Spiel
let clickCount = 0
startGuessing.addEventListener("click", () => {
    event.preventDefault()
    clickCount++
    roundsCounter.innerHTML = `${clickCount}/${valueCollec}` 
    let guessingInput = document.getElementById("guessingInput")
    if (clickCount == valueCollec) {
        result.innerHTML += `${clickCount}. You didn't guessed right. You lose! <br>`

        setTimeout(() => {
            location.reload();
        }, 3000);

    } else if (guessingInput.value > compNumber) {
        result.innerHTML += `${clickCount}. You need to guess lower than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value < compNumber) {
        result.innerHTML += `${clickCount}. You need to guess higher than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value == compNumber) {
        result.innerHTML += `${clickCount}. You got me in ${clickCount} guesses. You win! <br>`

        setTimeout(() => {
            location.reload();
        }, 3000);
    }
})