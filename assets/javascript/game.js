$(document).ready(function() {  

  //Variables

  let userPoints = 0;
  $("#total-score").text("Your score: " + userPoints);
  let wins= 0;
  $("#wins").text("Wins: " + wins);
  let losses= 0;
  $("#losses").text("Losses: " + losses);
  let allCrystals = ["assets/images/Crystals-01.png", "assets/images/Crystals-02.png", "assets/images/Crystals-03.png", "assets/images/Crystals-04.png"];

//Functions 

  function genCrystalValues() {
  
    for (let i = 0; i < allCrystals.length; i++) {

      let imageCrystal = $("<img>");

      imageCrystal.addClass("crystal-images");

      imageCrystal.attr("src", allCrystals[i]);

      imageCrystal.attr("data-crystalvalue", Math.floor(Math.random() * 12) + 1);

      $("#crystals").append(imageCrystal);
    }
  }

  function initialize() {

    userPoints = 0;
    $("#total-score").text("Your score: " + userPoints);

    let winningNumber = Math.floor(Math.random() * 101 + 19);
    $("#target-number").text(winningNumber);
    console.log(winningNumber);
 
    $(".crystal-images").on("click", function() {
      let crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);

      userPoints += crystalValue;
      $("#total-score").text("Your score: " + userPoints);
      console.log(userPoints);

      if (userPoints === winningNumber) {
        alert("You win!");
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#crystals").empty();
        genCrystalValues();
        initialize();
      }

      else if (userPoints > winningNumber) {
        alert("You lose!!");
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#crystals").empty();
        genCrystalValues();
        initialize();
      }

    });
  }
  genCrystalValues();
  initialize();
});
