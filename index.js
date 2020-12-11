
let UC = document.getElementById("UsersChoice")
let compChoice = document.getElementById("ComputerChoice")

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


// computerClick = () => {
// lets compChoice =
// static final String[] compChoice = ["Rock", "Paper", "Scissors"];
// compChoice.innerHTML = compChoice
// }




chooseOperator = (incomingOperator) => {
    operator = incomingOperator
    document.getElementById("operator").innerHTML = operator
}