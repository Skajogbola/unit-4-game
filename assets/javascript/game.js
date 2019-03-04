$( document ).ready(function () {
    //Select a random number from 19-120 for the computer.
  var randomNumber = Math.floor(Math.random()*101+19)
  $("#computerGuess").text(randomNumber);
  //Select a random number for each crystals from 1-12.
  var gem1 = Math.floor(Math.random()*11+1)
  var gem2 = Math.floor(Math.random()*11+1)
  var gem3 = Math.floor(Math.random()*11+1)
  var gem4 = Math.floor(Math.random()*11+1)

  var wins = 0;
  var losses = 0;
  var userTotal = 0;
  $("#wins-text").text(wins);
  $("#losses-text").text(losses);
  $("#finalTotal").text(userTotal);

  //reset the game
  function reset(){
    randomNumber = Math.floor(Math.random()*101+19);
    gem1 = Math.floor(Math.random()*11+1);
    gem2 = Math.floor(Math.random()*11+1);
    gem3 = Math.floor(Math.random()*11+1);
    gem4 = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }
//Adding win to the userTotal.
function won(){
    alert("You Won!");
    wins++;
    $("#wins-text").text(wins);
    reset();  
}
//Adding loss to the userTotal.
function lost(){
    alert("You Lose!");
    losses++;
    $("#losses-text").text(losses);
    reset(); 
}
//Logic behind the clicks of the crystals
});