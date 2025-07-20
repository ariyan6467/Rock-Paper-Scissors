let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

let playerScoreDisplay = document.querySelector('#player-score');
let computerScoreDisplay = document.querySelector('#computer-score');
let msgDisplay = document.querySelector('.result-message');

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let playerChoice = choice.id; 
        console.log(`Player chose: ${playerChoice}`);
        let computerSelection = computerChoice();
        console.log(`Computer chose: ${computerSelection}`);

        if (playerChoice === computerSelection) {
            console.log("It's a tie!");
            roundCount++;
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            msgDisplay.textContent = `It's a tie! Both chose ${playerChoice}`;

            return;
        } else if (
            (playerChoice === 'rock' && computerSelection === 'scissors') ||
            (playerChoice === 'paper' && computerSelection === 'rock') ||
            (playerChoice === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        msgDisplay.textContent = `You win! ${playerChoice} beats ${computerSelection} `;
        console.log(`You win! ${playerChoice} beats ${computerSelection}`);
    } else {
        computerScore++;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        msgDisplay.textContent = `You lose! ${computerSelection} beats ${playerChoice}`;
        console.log(`You lose! ${computerSelection} beats ${playerChoice}`);
    }
       roundCount++;
       endGame();

    });
});

function endGame() {
    if (roundCount === 5) {
        if (playerScore > computerScore) {
            msgDisplay.textContent = "Congratulations! You won the game!";
        } else if (playerScore < computerScore) {
            msgDisplay.textContent = "Sorry! You lost the game.";
        } else {
            msgDisplay.textContent = "It's a tie game!";
        }
    
        disableButtons();
    
        function disableButtons() {
            choices.forEach(choice => {
                choice.disabled = true;
                choice.ariaDisabled = true;
            });
        }
     
    console.log(`Game Over! Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
};


}

function computerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];      
}

function playerChoice(){
    return playerChoice;
}


function gameplay (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}