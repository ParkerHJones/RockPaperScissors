
let UC = document.getElementById("UsersChoice")
let compChoice = document.getElementById("ComputerChoice")
let result = document.getElementById("Result")
let reset = document.getElementById("Reset")

let rock = ""
let paper = ""
let scissors = ""



handleClick = (choice) => {
    if (choice == 1) {
       UC.innerHTML = "Rock"
    } 
    else if (choice == 2){
        UC.innerHTML = "Paper"
    }
    else {
        UC.innerHTML = "Scissors"
    }
    

}







//  Lines 24-29 makes a random choice display between strings when user clicks
computerClick = (randomChoice) => {
randomChoice = ["Rock", "Paper", "Scissors"]; 

randomChoice = randomChoice[Math.floor(Math.random()*randomChoice.length)];
compChoice.innerHTML = randomChoice; 

}


// winner 
// }

// // function result (choice, randomChoice) {
// //     return choice.beats === randomChoice.name
// }



// function result() {
//     if (choice = randomChoice) { 
//         "It is a tie"
//     }
//     else if (choice >= randomChoice) {
//         "Congratulations you won!" 
//     }
//     else {
//         "The computer won"
//     }
//     }

// function computerchoice() {
//     computerClick = (randomChoice) => {
//         randomChoice = ["Rock", "Paper", "Scissors"]; 
        
//         randomChoice = randomChoice[Math.floor(Math.random()*randomChoice.length)];
//         compChoice.innerHTML = randomChoice; 

// }







chooseOperator = (incomingOperator) => {
    operator = incomingOperator
    document.getElementById("operator").innerHTML = operator
}
