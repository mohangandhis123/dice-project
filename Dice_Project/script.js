let scores = [0, 0];
let highestRoll = [0, 0];

document.getElementById('rollButton1').addEventListener('click', () => rollDice(1));
document.getElementById('rollButton2').addEventListener('click', () => rollDice(2));

function rollDice(player) {
    const diceValue = Math.floor(Math.random() * 6) + 1;

    if (player === 1) {
        document.getElementById('dice1').textContent = getDiceFace(diceValue);
        scores[0] += diceValue;
        document.getElementById('score1').textContent = `Score: ${scores[0]}`;
        highestRoll[0] = diceValue;
        document.getElementById('rollButton1').disabled = true;
        document.getElementById('rollButton2').disabled = false;
    } else {
        document.getElementById('dice2').textContent = getDiceFace(diceValue);
        scores[1] += diceValue;
        document.getElementById('score2').textContent = `Score: ${scores[1]}`;
        highestRoll[1] = diceValue;
        document.getElementById('rollButton1').disabled = false;
        document.getElementById('rollButton2').disabled = true;
    }

    if (highestRoll[0] > 0 && highestRoll[1] > 0) {
        if (highestRoll[0] > highestRoll[1]) {
            document.getElementById('result').textContent = 'Player 1 wins this round!';
        } else if (highestRoll[1] > highestRoll[0]) {
            document.getElementById('result').textContent = 'Player 2 wins this round!';
        } else {
            document.getElementById('result').textContent = "It's a tie!";
        }
        highestRoll = [0, 0];
    }
}

function getDiceFace(number) {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceFaces[number - 1];
}
