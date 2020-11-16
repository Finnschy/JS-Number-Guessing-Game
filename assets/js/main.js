// Number Guessing Game

//--- Alle wichtigen Dinge aus dem HTML Dokument holen:

let result = document.getElementById("result")
let roundsCounter = document.getElementById("roundsCounter")
let rounds = document.getElementsByName("rounds")
let startGuessing = document.getElementById("start")


//--- Funktion um die Spielrunden zu bestimmen
function checkRounds() {
    let four = document.getElementById("four")
    let five = document.getElementById("five")
    let six = document.getElementById("six")
    let custom = document.getElementById("custom")
    let customInput = document.getElementById("customInput").value
    let radioRounds = 0
    if (four.checked) {
        radioRounds = 4
    } else if (five.checked) {
        radioRounds = 5 
    } else if (six.checked) {
        radioRounds = 6
    } else if (custom.checked) {
        radioRounds = customInput
    }
    return radioRounds
}
checkRounds()


//--- Funktion um den Value aus den Radio Buttons zu kriegen -- funktioniert so nicht
// function checkRounds() {
//     for (var i = 0, length = rounds.length; i < length; i++) {
//         rounds[i].onclick = function() {
//             return this.value
//         }
//       }
// }
// checkRounds()


//--- Funktion für den Zufallsgenerator

const randomizer = () => {
    let randomNumber = Math.floor(Math.random() * 100 +1);
    return randomNumber
}
let compNumber = randomizer()
console.log(compNumber);

//--- Funktion für das eigentliche Spiel
let clickCount = 0
startGuessing.addEventListener("click", () => {
    event.preventDefault()
    clickCount++
    let radioRounds = checkRounds() 
    roundsCounter.innerHTML = `${clickCount}/${radioRounds}` 
    let guessingInput = document.getElementById("guessingInput")


    if (clickCount === radioRounds) {
        result.innerHTML += `${clickCount}. You didn't guessed right. You lose! <br>`
    } else if (guessingInput.value > compNumber) {
        result.innerHTML += `${clickCount}. You need to guess lower than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value < compNumber) {
        result.innerHTML += `${clickCount}. You need to guess higher than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value == compNumber) {
        result.innerHTML += `${clickCount}. You got me in ${clickCount} guesses. You win! <br>`
    }
    
    // countingRounds()
})


//--- Funktion zum Runden zählen
// function countingRounds() {
//     let radioRounds = checkRounds() 
//     if (clickCount === radioRounds) {
//         result.innerHTML += `You didn't guessed right. LOSER.`
//     } 
// }









//--- restart button
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
})