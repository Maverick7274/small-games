let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("Rock")
const paper_div = document.getElementById("Paper")
const scissors_div = document.getElementById("Scissors")

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}


function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore

    result_div.innerHTML = userChoice + " beats " + computerChoice + ", You Win!"


    // console.log(userScore)
    // console.log("USER WINS, COMPUTER LOSES")
}
function lose(userChoice, computerChoice){
    computerScore++;

    result_div.innerHTML = userChoice + " beats " + computerChoice + ", Computer Win!"
    console.log(computerScore)
    console.log("USER LOSES, COMPUTER WINS")
}
function draw(userChoice, computerChoice){
    result_div.innerHTML = "Both User and CPU draw : " + computerChoice + ", Its a Tie"
    console.log("TIE")
}


function game(userChoice){
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            console.log("User Choice is " + userChoice)
            console.log("Computer Choice is " + computerChoice)
            win(userChoice, computerChoice)
            break
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            console.log("User Choice is " + userChoice)
            console.log("Computer Choice is " + computerChoice)
            lose(userChoice, computerChoice)
            break
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            console.log("User Choice is " + userChoice)
            console.log("Computer Choice is " + computerChoice)
            draw(userChoice, computerChoice)
            break
    }
}


game("Computer")

rock_div.addEventListener('click', function() {
    game("Rock")
})
paper_div.addEventListener('click', function() {
    game("Paper")
})
scissors_div.addEventListener('click', function() {
    game("Scissors")
})

