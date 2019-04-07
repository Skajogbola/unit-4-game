# unit-4-game
Description: 

Create an app that has four crystals displayed on the page. Each crystal should be assigned a random number.
If the total of the guessed numbers equals the computer's random number then the player wins else the player loses.

Here's the solution:

At the start of each game a random number will be shown. The random is from the range of 19 to 120.
The four crystals displayed as buttons on the page were assigned a random number from 1-12. 
When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
The game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number. 
 
Technical approach:

The app dynamically update the HTML pages with the jQuery library.