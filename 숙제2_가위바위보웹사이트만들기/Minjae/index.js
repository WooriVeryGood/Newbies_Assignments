/* Initialize */
const choiceArray = ["R", "S", "P"];
var myScore = 0;
var comScore = 0;

for(let i = 0; i < 3; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", () => 
  game(choiceArray[i]));
}

/* Main game function */ 
function game(playerChoice){
  var comChoice = getComChoice();
  var res = playerChoice + comChoice;
  switch(res){
    case "RS":
    case "PR":
    case "SP":
      win();
      break;

    case "RR":
    case "PP":
    case "SS":
      draw();
      break;

    case "SR":
    case "RP":
    case "PS":
      lose();
      break;
  }

  /* Set Score Image */ 
  var playerImage = "image/" + playerChoice + ".jfif";
  var comImage = "image/" + comChoice + ".jfif";
  document.querySelectorAll(".score_image")[0].setAttribute("src", playerImage);
  document.querySelectorAll(".score_image")[1].setAttribute("src", comImage);
}

/* Computer random choice function */ 
function getComChoice() {
  var randomNum = Math.floor(Math.random()*3);
  return choiceArray[randomNum];
}

/* Game Result */ 
function win(){
  myScore++;
  document.querySelector("h3").style.color = "blue";
  document.querySelector("h3").innerHTML = "You Win!";
  document.querySelector("h3").style.fontSize = "60px";
  document.querySelector(".text").innerHTML = "Player " + myScore + "  :  " + comScore + " Computer";
}

function draw(){
  document.querySelector("h3").style.color = "black";
  document.querySelector("h3").innerHTML = "Draw!";
  document.querySelector("h3").style.fontSize = "60px";
  document.querySelector(".text").innerHTML = "Player " + myScore + "  :  " + comScore + " Computer";
}

function lose(){
  comScore++;
  document.querySelector("h3").style.color = "red";
  document.querySelector("h3").innerHTML = "You Lose..";
  document.querySelector("h3").style.fontSize = "60px";
  document.querySelector(".text").innerHTML = "Player " + myScore + "  :  " + comScore + " Computer";
  if(comScore === 3) {
    var hiddenImg = document.getElementById("hidden_img");
    hiddenImg.classList.remove("hidden");
    hiddenImg.addEventListener("click", function() {
      location.reload();
    })
  }
}

var reset = document.querySelectorAll(".reset")[0];
reset.addEventListener("click", function() {
  location.reload();
})
