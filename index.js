
let UC = document.getElementById("UsersChoice")
let compChoice = document.getElementById("ComputerChoice")
let result = document.getElementById("Result")


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


// results = () => {
// if (compChoice.innerHTML = UC.innerHTML) {
//     result.innerHTML = "It is a tie";
// } else if (compChoice.innerHTML < UC.innerHTML){
//     result.innerHTML = "You won!"
// } else {
//     result.innerHTML = "The Computer won"
// }
// public static void results 
// }




chooseOperator = (incomingOperator) => {
    operator = incomingOperator
    document.getElementById("operator").innerHTML = operator
}