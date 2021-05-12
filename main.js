let playerScore = 0;
let botScore = 0;

let previusResults = [0 , 0];

function play(choice) {
    let myChoice = choice
    let botChoice = Math.floor(Math.random() * 3);
    let result = getWinner(myChoice, botChoice);
    removeSelect(previusResults[0], previusResults[1]);
    addSelect(myChoice, botChoice);
    showResult(result);
    previusResults = [myChoice, botChoice];
}

// 0 = Empate
// 1 = Ganhou
// 2 = Perdeu

// 0 = Pedra
// 1 = Papel 
// 2 = Tesoura
function getWinner(myChoice, botChoice) {
    if (myChoice == botChoice) {
        return 0;
    }
    return ((myChoice - botChoice) + 3) % 3   
}

function showResult(result) {
    switch(result) {
        case 0:
            return alert("Você empatou!")
        case 1:
            return addScorePlayer();  
        case 2:
            return addScoreBot();      
    }
}

function addScoreBot() {
    botScore++;
    document.getElementById("bot_score").innerHTML =  botScore;
}

function addScorePlayer() {
    playerScore++;
    document.getElementById("player_score").innerHTML =  playerScore;
}

function addSelect(myChoice, botChoice) {
    document.getElementById("player_choice_" + myChoice).classList.add('select')
    document.getElementById("bot_choice_" + botChoice).classList.add('select')
}

function removeSelect(myChoice, botChoice) {
    document.getElementById("player_choice_" + myChoice).classList.remove('select')
    document.getElementById("bot_choice_" + botChoice).classList.remove('select')
}
    