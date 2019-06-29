$(document).ready(function() {

  let wins= 0;
  $("#wins").text("Wins: " + wins);

  let losses= 0;
  $("#losses").text("Losses: " + losses);

  let userSales = 0;
  $("#total-score").text("Your sales: $" + userSales);

  let clickSound = new Audio("assets/sound/cha-ching.wav");

  let crystalOne = Math.floor(Math.random() * 12) + 1;
  let crystalTwo = Math.floor(Math.random() * 12) + 1;
  let crystalThree = Math.floor(Math.random() * 12) + 1;
  let crystalFour = Math.floor(Math.random() * 12) + 1;
  
  function genCrystalValues() {
    $("#crystal-one").attr("data-crystalvalue", crystalOne);
    $("#crystal-two").attr("data-crystalvalue", crystalTwo);
    $("#crystal-three").attr("data-crystalvalue", crystalThree);
    $("#crystal-four").attr("data-crystalvalue", crystalFour);
  }

  function initialize() {

    let userSales = 0;
    $("#total-score").text("Your sales: $" + userSales);
  
    let winningAmount = Math.floor(19 + Math.random() * (120 + 1 - 19));
    $("#target-number").text("$" + winningAmount);
    console.log(winningAmount);
 
    $(".crystal-images").on("click", function() {

      $("#directions").text("");

      clickSound.play();

      let crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);

      userSales += crystalValue;
      $("#total-score").text("Your sales: $" + userSales);
      console.log(userSales);

      if (userSales === winningAmount) {
        $("#directions").text("Walt will be pleased.");
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#crystal-one").empty();
        $("#crystal-two").empty();
        $("#crystal-three").empty();
        $("#crystal-four").empty();
        genCrystalValues();
        initialize();
      }

      else if (userSales > winningAmount) {
        $("#directions").text("This won't be pretty.");
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#crystal-one").empty();
        $("#crystal-two").empty();
        $("#crystal-three").empty();
        $("#crystal-four").empty();
        genCrystalValues();
        initialize();
      }

    });
  }
  genCrystalValues();
  initialize();
});
