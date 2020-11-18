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

//--- Funktion um den Value aus den Radio Buttons zu kriegen -- funktioniert jetzt aber ich muss alles nochmal klicken
let valueCollec = [];
function checkRounds() {
    let custom = document.getElementById("custom");
    let customInput = document.getElementById("customInput");
    
    for (let i = 0; i < rounds.length; i++) {
        rounds[i].onclick = function() {
            let radioRounds
            // return this.value
            // console.log(this.value);
            // radioRounds = this.value
            // console.log(radioRounds);
            valueCollec = this.value;
            console.log(valueCollec);
                if(valueCollec == 0) {
                    console.log("if schlaufe test");
                    customInput.classList.toggle("notDisplayed");
                    // radioRounds = customInput.value
                    customInput.addEventListener("keyup", () => {

                        valueCollec = customInput.value;
                        // showHelp(item.value);
                        console.log(valueCollec);
                    })
                    
                }
        }
      }
}
checkRounds()


//--- TEST -- ich hab alle ab "let clickcount" in die funktion "showhelp" kopiert, dh wenn da gleich wieder etwas nicht mehr funktioniert, muss ich das einfach wieder löschen und unten auskommentieren....
// function showHelp(help) {
//     let radioRounds = help;
//     console.log(radioRounds);

//     let clickCount = 0
//     startGuessing.addEventListener("click", () => {
//     event.preventDefault()
//     clickCount++
//     // let radioRounds = checkRounds()
//     // let radioRounds = valueCollec
//     roundsCounter.innerHTML = `${clickCount}/${radioRounds}` 
//     let guessingInput = document.getElementById("guessingInput")

//     if (clickCount == radioRounds) {
//         result.innerHTML += `${clickCount}. You didn't guessed right. You lose! <br>`
//         console.log("Test lose");
//     } else if (guessingInput.value > compNumber) {
//         result.innerHTML += `${clickCount}. You need to guess lower than ${guessingInput.value}. Try again. <br>`
//         console.log("Test need to guess lower");
//     } else if (guessingInput.value < compNumber) {
//         result.innerHTML += `${clickCount}. You need to guess higher than ${guessingInput.value}. Try again. <br>`
//         console.log("Test need to guess higher");
//     } else if (guessingInput.value == compNumber) {
//         result.innerHTML += `${clickCount}. You got me in ${clickCount} guesses. You win! <br>`
//         console.log("Test win");
//     }

//     // countingRounds()
// })
    
//   }

//   function setupHelp() {
//     for (let i = 0; i < rounds.length; i++) {
//       let item = rounds[i];
//       item.onclick = function() {
//         showHelp(item.value);
//         if(item.value == 0) {
//               console.log("if schlaufe test");
//              customInput.classList.toggle("notDisplayed");
//             // radioRounds = customInput.value
//             // mouseleave or keyup
//             customInput.addEventListener("mouseleave", () => {
//                 item.value = customInput.value;
//                 showHelp(item.value);
//             })
             
//           }
//       }
//     }
//   }
//   setupHelp();

//-------------------------------------------------------------

//--- Funktion für das eigentliche Spiel
let clickCount = 0
startGuessing.addEventListener("click", () => {

    event.preventDefault()
    clickCount++
    // let radioRounds = checkRounds()
    let radioRounds = valueCollec

    roundsCounter.innerHTML = `${clickCount}/${radioRounds}` 
    let guessingInput = document.getElementById("guessingInput")
    if (clickCount == radioRounds) {
        result.innerHTML += `${clickCount}. You didn't guessed right. You lose! <br>`

        // setTimeout(() => {
        //     result.innerHTML = ""
        //     roundsCounter.innerHTML = ""
        // }, 3000);

    } else if (guessingInput.value > compNumber) {
        result.innerHTML += `${clickCount}. You need to guess lower than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value < compNumber) {
        result.innerHTML += `${clickCount}. You need to guess higher than ${guessingInput.value}. Try again. <br>`
    } else if (guessingInput.value == compNumber) {
        result.innerHTML += `${clickCount}. You got me in ${clickCount} guesses. You win! <br>`

        // setTimeout(() => {
        //     result.innerHTML = ""
        //     roundsCounter.innerHTML = ""
        // }, 3000);
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