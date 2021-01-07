// utility function for generating random integers
function randIntInRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum + 1 - minNum) + minNum);
}
// Battleship class
class Battleship {
    constructor(name, hitpoints, firepower, accuracy) {
        this.name = name;
        this.shipsLife = hitpoints;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    damageTaken(theAttacker) {

        if (theAttacker.shipsLife <= 0) {
            throw "Ships with 0 health cannot attack";
        }

        const attackRandomizer = Math.random();
        if (theAttacker.accuracy > attackRandomizer) {
            this.shipsLife -= theAttacker.firepower;
        }
        // is it useful to return anything?
        return theAttacker.accuracy > attackRandomizer;
    }
}
// Alien Ship sub-class
class AlienShip extends Battleship {
    constructor(name) {
        let alienShipHealth = randIntInRange(3, 6);
        let firePowerRandomizer = randIntInRange(2, 4);
        let accuracyRandomizer = randIntInRange(60, 80) * .01;
        super(name, alienShipHealth, firePowerRandomizer, accuracyRandomizer);
    }
}

// setup Game:

let playerShip;
let activeAliens;

function setUpGame(numAliens) {
    // stats according to spec
    playerShip = new Battleship('Velez Destroyer', 20, 5, .7);
    activeAliens = [];
    for (let i = 0; i < numAliens; i++) {
        let alienShip = new AlienShip(`Alien Ship ${i+1}`);
        activeAliens.push(alienShip);
    }
    console.log('%c spacebattle ', 'font-size: 40px; text-decoration: underline overline; text-decoration-style: wavy; margin-top: 1rem; margin-bottom: .5rem;text-underline-position: under;');
}

function theBattle(theAttacker, theDefender) {
    console.log(`${theAttacker.name} shot at ${theDefender.name}`);
    displayShot();
    displayAttack(theAttacker, theDefender.damageTaken(theAttacker));

    if (theDefender.shipsLife > 0) {
        console.log(`${theDefender.name} shot back at ${theAttacker.name}!`);
        displayShot();
        displayAttack(theDefender, theAttacker.damageTaken(theDefender));
    }

    console.log("%c End Round", "color: lightgrey; font-style: italic; font-size: 75%");
}

// Main game play
function playGame() {
    while (activeAliens.length > 0) {
        const currBattlingAlien = activeAliens.pop();
        while (currBattlingAlien.shipsLife > 0 && playerShip.shipsLife > 0) {
            theBattle(playerShip, currBattlingAlien);
            displayHealth(playerShip, currBattlingAlien);
        }

        if (playerShip.shipsLife <= 0) {
            console.log("%c GAME LOST", 'font-size: 20px');
            displayEndOfTheWorld();
            return false;
        } else { // alien ship must be destroyed first
            console.log(`%c ${currBattlingAlien.name} has been destroyed!`, "border: 1px dashed red");
            let keepGoing = confirm(`Your shipsLife is at ${playerShip.shipsLife} health. Keep going?`);
            if (!keepGoing) {
                console.log('%c You ran!', "font-size: 20px");
                displayEndOfTheWorld();
                return false;
            }
        }
    }

    console.log("%c GAME WON!", "font-size: 30px; color: orange; border: 2px dashed red;");
    console.log("%c You saved Earth!", "font-size: 35px; color: green; border: 2px dashed blue;");
    // console.log(playerShip);
    return true;
}

// -----------------Display Functions --------------------------------------------------------
function displayAttack(ship, attackSuccess) {
    if (attackSuccess) {
        console.log(`%c ${ship.name} hit for ${ship.firepower} damage!`,
            "font-style: italic; background: azure; border: 1px solid grey;");
    } else {
        console.log(`${ship.name} missed!`)
    }
}

function displayHealth(player, alien) {
    let healthStatus;
    if (player.shipsLife > 10) {
        healthStatus = "green";
    } else if (player.shipsLife > 5) {
        healthStatus = "orange";
    } else {
        healthStatus = "red";
    }

    let healthStr = `%c Player shipsLife: %c ${player.shipsLife} %c Alien shipsLife: %c ${alien.shipsLife}`;
    let healthStyles = ["font-style: italic; color:brown", // "Player shipsLife"
        `color: ${healthStatus}`, // player shipsLife value
        "font-style: italic; color:brown", // "Alien shipsLife"
        "color: grey"
    ] // alien shipsLife value
    console.log(healthStr, ...healthStyles);
}

function displayShot() {
    console.log('%c.', 'font-size: 1px; padding: 15px 100%; background: url("https://media.giphy.com/media/ZEl0gSSnbEzJ7qr18E/giphy.gif"); background-repeat: no-repeat; background-size: 30%; background-position: 0 45%;');
}

function displayEndOfTheWorld() {
    console.log('%c.', 'font-size: 1px; padding: 30% 100%; background: url("https://media.giphy.com/media/hvGKQL8lasDvIlWRBC/giphy.gif"); background-repeat: no-repeat; background-size: 100%;');
}
// ------------------------------------------------------------------------



// Run Game after player is ready
window.addEventListener('load', (e) => {
    document.getElementById('start-button').addEventListener('click', (btnClick) => {
        if (confirm("Ready to fight for the fate of Earth?")) {
            setUpGame(6);
            playGame();
        }
    });

});
