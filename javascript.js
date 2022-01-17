const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

let array = ["Rock", "Paper", "Scissors"];

let VALID_MOVES = {
    rock: {
        winsAgainst: 'scissors'
    },
    paper: {
        winsAgainst: 'rock'
    },
    scissors: {
        winsAgainst: 'paper'
    }
};


computerPlay = () => {
    let random = Math.floor(Math.random() * array.length);
    return array[random].toLowerCase();
}




playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    console.log(`Player chooses: ${playerSelection}`);
    console.log(`CPU chooses: ${computerSelection}`)
    if (playerSelection === computerSelection) { // tie
        return(`You tie! ${playerSelection} can not do anything against ${computerSelection}`);
    }
    else if (VALID_MOVES[playerSelection].winsAgainst === computerSelection) { // win
        return(`You win! ${playerSelection} beats ${computerSelection}`);
    } else { // loss
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

getWinner = () =>{
    let result = playRound(playerSelection,computerSelection);
}


game = () => {
    rl.question(`Rock, paper, or scissors: `, (playerSelection) => {
        let computerSelection = computerPlay();
            let result = playRound(playerSelection, computerSelection);
            console.log(result)
        rl.close();
    });
}

game();
