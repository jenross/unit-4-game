//Variables

let userPoints = 0;
let numbers = [19, 20, 21, 22];
let incrementNumbers = numbers[Math.round(Math.random())];
let winningNumber = 22;

$("#number-to-guess").text(winningNumber);

for (let i = 0; i < numbers.length; i++) {

    let imageCrystal = $("<img>");

    imageCrystal.addClass("crystal-images");

    imageCrystal.attr("src", "assets/images/crystal-1.jpg");

    imageCrystal.attr("data-crystalvalue", numbers[i]);

    $("#crystals").append(imageCrystal);
  }

//On-click functions 
$(".crystal-images").on("click", function() {
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    userPoints += crystalValue;

    alert("New score: " + userPoints);

    if (userPoints === winningNumber) {

        // If the numbers match, user wins
        alert("You win!");
      }

    else if (userPoints >= winningNumber) {

        // Then they are alerted with a loss.
        alert("You lose!!");
      }

});