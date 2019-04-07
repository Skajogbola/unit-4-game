$( document ).ready(function () {
    //Select a random number from 19-120 for the computer.
  var randomNumber = Math.floor(Math.random()*101+19)
  $('#computerGuess').text(randomNumber);
  //Select a random number for each crystals from 1-12.
  var gem1 = Math.floor(Math.random()*11+1)
  var gem2 = Math.floor(Math.random()*11+1)
  var gem3 = Math.floor(Math.random()*11+1)
  var gem4 = Math.floor(Math.random()*11+1)

  //create function gem
  function gem(){
    var gem1 = Math.floor(Math.random()*11+1);
    var gem2 = Math.floor(Math.random()*11+1);
    var gem3 = Math.floor(Math.random()*11+1);
    var gem4 = Math.floor(Math.random()*11+1);
  }

  var wins = 0;
  var losses = 0;
  var userTotal = 0;
  $("#wins-text").text(wins);
  $("#losses-text").text(losses);
  $("#finalTotal").text(userTotal);
  

  //reset the game
  function reset(){
    randomNumber = Math.floor(Math.random()*101+19);
    console.log("This is the computer guess: " + randomNumber)
    gem();
    userTotal = 0;
    $("#finalTotal").text(userTotal);
    $('#computerGuess').text(randomNumber);
  }
//Adding win to the userTotal.
function won(){
    $('#message').text("You Won!!");
    wins++;
    $("#wins-text").text(wins);
    reset();  
}
//Adding loss to the userTotal.
function lost(){
    $('#message').text("You Lost!!");
    losses++;
    $("#losses-text").text(losses);
    reset(); 
}
//Logic behind the clicks of the crystals
$("#one").on('click', function() {
    userTotal = userTotal + gem1;
    console.log("Updated Usertotal: " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === randomNumber) {
        won();
    }
    else if (userTotal > randomNumber) {
        lost();
    }
})

$("#two").on('click', function() {
    userTotal = userTotal + gem2;
    console.log("Updated Usertotal: " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === randomNumber) {
        won();
    }
    else if (userTotal > randomNumber) {
        lost();
    }
})

$("#three").on('click', function() {
    userTotal = userTotal + gem3;
    console.log("Updated Usertotal: " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === randomNumber) {
        won();
    }
    else if (userTotal > randomNumber) {
        lost();
    }
})

$("#four").on('click', function() {
    userTotal = userTotal + gem4;
    console.log("Updated Usertotal: " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal === randomNumber) {
        won();
    }
    else if (userTotal > randomNumber) {
        lost();
    }
});
});