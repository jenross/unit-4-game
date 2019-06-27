//Variables

let userPoints = 0;
let numbers = [19, 20, 21, 22];
let incrementNumbers = numbers[Math.round(Math.random())];
let allCrystals = ["assets/images/Crystals-01.png", "assets/images/Crystals-02.png", "assets/images/Crystals-03.png", "assets/images/Crystals-04.png"];

$("#target-number").text(winningNumber);

//Dynamically updates each crystal and assigns it a random value
for (let i = 0; i < numbers.length; i++) {

    let imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-images");

    imageCrystal.attr("src", allCrystals[i]);

    imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

    $("#crystals").append(imageCrystal);
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