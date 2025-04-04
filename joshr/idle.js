let score = 0;
let clickValue = 1;
let upgradeCost = 10;
let upgradeLevel = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');
const upgradeLevelDisplay = document.getElementById('upgradeLevel');

clickButton.addEventListener('click', () => {
    score += clickValue;
    updateScore();
    if (score < upgradeCost) {
        upgradeButton.setAttribute('disabled', '');
    }
    else {
        upgradeButton.removeAttribute('disabled', '');
    }
});

upgradeButton.addEventListener('click', () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        upgradeLevel++;
        clickValue += 1;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        updateScore();
        updateUpgrade();
        if (score < upgradeCost) {
            upgradeButton.setAttribute('disabled', '');
        }
        else {
            upgradeButton.removeAttribute('disabled', '');
        }
    }
});

function updateScore() {
    scoreDisplay.textContent = score;
}

function updateUpgrade() {
    upgradeLevelDisplay.textContent = upgradeLevel;
    upgradeButton.textContent = `Buy Upgrade (Cost: ${upgradeCost})`;
}

function woo() {
    const sound1 = document.getElementById('gnomeWoo1');
    const sound2 = document.getElementById('gnomeWoo2');
    const sound3 = document.getElementById('gnomeWoo3');

    let gnomeNumber = Math.floor(Math.random() * 3) + 1;

    if (gnomeNumber == 1) {
        sound1.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
    else if (gnomeNumber == 2) {
        sound2.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
    else if (gnomeNumber == 3) {
        sound3.play();
        let gnomeNumber = Math.floor(Math.random() * 3) + 1;
    }
}