import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

let myTeam = fifaData.filter(object => object.Year === 2014).filter(object => object.Stage === "Final")[0];

console.log("Task 1a -----> " + myTeam["Home Team Name"]);
console.log("Task 1b -----> " + myTeam["Away Team Name"]);
console.log("Task 1c -----> " + myTeam["Home Team Goals"]);
console.log("Task 1d -----> " + myTeam["Away Team Goals"]);
console.log(myTeam["Away Team Goals"] > myTeam["Home Team Goals"] ? `Task 1e -----> The Away Team, ${myTeam["Away Team Name"]}, 
won the 2014 world cup final` : `Task 1e -----> The Home Team, ${myTeam["Home Team Name"]}, won the 2014 world cup final`);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {

    return array.filter(object => object.Stage === "Final");

};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(listOfFinalsMatches) {
    return listOfFinalsMatches.map(match => match.Year);
};

console.log("Task 3 -----> " , getYears(getFinals(fifaData)));

getYears();

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsGames) {
    let winners = finalsGames.map(match => {if (match["Home Team Goals"] > match["Away Team Goals"]){
        return match["Home Team Name"];
    } else if (match["Home Team Goals"] < match["Away Team Goals"]) {
        return match["Away Team Name"];
    } else if (match["Win Conditions"] !== "") {
        return `******* ${match['Win conditions'].split(' ')[0]} *******`;
    }
    });
    return winners;
};

console.log("Task 4 -----> " , getWinners(getFinals(fifaData)));

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(listOfWinningCountries, listOfYears) {

    let winningArray = [];
  
    for (let i = 0; i < listOfWinningCountries.length; i++) {
        winningArray.push(listOfYears[i],listOfWinningCountries[i]);
        console.log(`In ${winningArray[0]}, ${winningArray[1]} won the world cup!`);
        winningArray = [];
    }
  
  };

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const match = data.length;
  
   let avgHomeGoals = Math.round(data.reduce((accumulator, index) => accumulator + index["Home Team Goals"],0)/match);
  
    let avgAwayGoals = Math.round(data.reduce((accumulator, index) => accumulator + index["Away Team Goals"],0) / match);
  
    const returnInfo = `Average Home Goals ${avgHomeGoals} - Average Away Goals ${avgAwayGoals}`;
  
    return returnInfo;
  };
  console.log("Task 6 ------>")
  console.log(getAverageGoals(fifaData));

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
