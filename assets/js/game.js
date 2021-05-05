var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round
var fight = function(enemyNames) {
        // repeat and execute as long as the enemy-robot is alive
        while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping playerMoney = playerMoney - 2;
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // if no (false), ask question again by running fight() again
            else {
                fight(enemyNames);
            }      
        }

        // check if player chose to fight, then fight
        if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable enemyHealth = enemyHealth - playerAttack;
            enemyHealth = enemyHealth - playerAttack
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
            );

        // check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyNames + " has died!");

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while () loop since enemy is dead
            break;
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable playerHealth = playerHealth - enemyAttack;
        playerHealth = playerHealth - enemyAttack
        console.log (
            enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while () loop if player is dead
            break;
        }   else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }       else {
            window.alert("You need to choose a valid option. Try again!");
        }   
  }         
};

// function to start a new game
var startGame = function() {
    debugger;
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1 ));

            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50

            //use debugger to pause script from running and check what's going on at that moment in the code
            //debugger;
            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter fight(pickedEnemyName);
            fight(pickedEnemyName);
        }   
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
                       
    }   
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("The game has now ended. Let's see how you did!");
    }
    // ask player if they'd like to p;ay again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


//Games States
// "WIN" - Player robot has defeated all enemy-robots
// After defeating an enemy, ask the user if they would like to purchase an item from the store
// The user can either purchase health or attack point, if they can afford it

// start the game when the page loads
startGame ();

// execute function
fight ();

