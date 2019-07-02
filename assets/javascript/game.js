let wins= 0;
$("#wins").text("Wins: " + wins);

let losses= 0;
$("#losses").text("Losses: " + losses);

let userSales = 0;
$("#total-score").text("Your sales: $" + userSales);

let clickSound = new Audio("assets/sound/coin-drop.mp3");
let winSound = new Audio("assets/sound/win-sound.wav");
let lossSound = new Audio("assets/sound/acid-bubble.wav");

let crystalOne = Math.floor(Math.random() * 12) + 1;
let crystalTwo = Math.floor(Math.random() * 12) + 1;
let crystalThree = Math.floor(Math.random() * 12) + 1;
let crystalFour = Math.floor(Math.random() * 12) + 1;

let winningAmount = Math.floor(19 + Math.random() * (120 + 1 - 19));
$("#target-number").text("$" + winningAmount);


function initialize() {

  userSales = 0;
  $("#total-score").text("Your sales: $" + userSales);
  
  winningAmount = Math.floor(19 + Math.random() * (120 + 1 - 19));
  $("#target-number").text("$" + winningAmount);

  crystalOne = Math.floor(Math.random() * 12) + 1;
  crystalTwo = Math.floor(Math.random() * 12) + 1;
  crystalThree = Math.floor(Math.random() * 12) + 1;
  crystalFour = Math.floor(Math.random() * 12) + 1;
 
} 

function didYouWin() {
  if (userSales === winningAmount) {
    $("#directions").text("Walt will be pleased.");
    wins++;
    $("#wins").text("Wins: " + wins);
    winSound.play();
    initialize();
  }

  else if (userSales > winningAmount) {
    $("#directions").text("This won't be pretty.");
    losses++;
    $("#losses").text("Losses: " + losses);
    lossSound.play();
    initialize();
  }
}

$("#crystal-one").on("click", function() {

  $("#directions").text("");
    
  clickSound.play();

  userSales += crystalOne;
  $("#total-score").text("Your sales: $" + userSales);
  console.log(userSales);

  didYouWin(); 
});

$("#crystal-two").on("click", function() {

  $("#directions").text("");
    
  clickSound.play();

  userSales += crystalTwo;
  $("#total-score").text("Your sales: $" + userSales);
  console.log(userSales);

  didYouWin(); 
});

$("#crystal-three").on("click", function() {

  $("#directions").text("");
    
  clickSound.play();

  userSales += crystalThree;
  $("#total-score").text("Your sales: $" + userSales);
  console.log(userSales);

  didYouWin(); 
});

$("#crystal-four").on("click", function() {

  $("#directions").text("");
    
  clickSound.play();

  userSales += crystalFour;
  $("#total-score").text("Your sales: $" + userSales);
  console.log(userSales);

  didYouWin(); 
});

