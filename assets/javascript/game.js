//Variables

let userPoints = 0;
$("#total-score").text("Your score: " + userPoints);
let wins= 0;
$("#wins").text("Wins: " + wins);
let losses= 0;
$("#losses").text("Losses: " + losses);
let allCrystals = ["assets/images/Crystals-01.png", "assets/images/Crystals-02.png", "assets/images/Crystals-03.png", "assets/images/Crystals-04.png"];

//Functions 

//start and reset game 
function initialize() {

  userPoints = 0;
  $("#total-score").text("Your score: " + userPoints);

  let winningNumber = Math.floor(Math.random() * 101 + 19);
  $("#target-number").text(winningNumber);
  console.log(winningNumber);

  genCrystalValues();
}

//Dynamically updates each crystal and assigns it a random value
function genCrystalValues() {
  
  for (let i = 0; i < allCrystals.length; i++) {

    let imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-images");

    imageCrystal.attr("src", allCrystals[i]);

    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    $("#crystals").append(imageCrystal);
  }
}

//On-click functions 
$(".crystal-images").on("click", function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    userPoints += crystalValue;

    alert("New score: " + userPoints);

    if (userPoints === winningNumber) {
        alert("You win!");
      }

    else if (userPoints >= winningNumber) {
        alert("You lose!!");
      }

});