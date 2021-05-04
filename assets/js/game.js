var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");

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
    }      else {
            window.alert("You need to choose a valid option. Try again!");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50
    fight(pickedEnemyName);
}


//Games States
// "WIN" - Player robot has defeated all enemy-robots
// "LOSE" - Player robot's health is zero or less

// execute function
fight ();