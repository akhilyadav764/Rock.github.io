let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWorld(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    else  return "Scissor";
}
function Win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =convertToWorld(userChoice) +" beats " + convertToWorld(computerChoice) + " You Win! ";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')},300);
}
function lose( userChoice,computerChoice) {
    
computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =convertToWorld(userChoice) +" loses to " + convertToWorld(computerChoice) + " You lose! ";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow')},300);

}
function draw( userChoice,computerChoice) {
    
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML =convertToWorld(userChoice) +" equals to " + convertToWorld(computerChoice) + " Draw!.. ";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow')},300);

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            Win(userChoice,computerChoice)
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice)
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice)
            break;
    }
}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissor_div.addEventListener('click', function () {
        game("s");
    })
}
main();
