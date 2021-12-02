function rpsgame(choice) {
  var humanchoice, botchoice;
  humanchoice = choice.id;
  botchoice = rpsRandom();
  result = decide(humanchoice, botchoice);
  var finalmessage = CalRes(result);
  rpsFrontEnd(humanchoice, botchoice, finalmessage);
}
function CalRes(result) {
  if (result[0] == 0.5 && result[1] == 0.5) {
    let notation = { message: "tied", color: "blue" };
    return notation;
  } else if (result[0] == 1 && result[1] == 0) {
    let notation = { message: "You WON", color: "green" };
    return notation;
  } else if (result[0] == 0 && result[1] == 1) {
    let notation = { message: "YOU LOST", color: "red" };
    return notation;
  }
}

function decide(humanchoice, botchoice) {
  if (humanchoice == botchoice) {
    return [0.5, 0.5];
  } else if (humanchoice == "rock" && botchoice == "paper") {
    return [0, 1];
  } else if (humanchoice == "paper" && botchoice == "scissors") {
    return [0, 1];
  } else if (humanchoice == "scissors" && botchoice == "rock") {
    return [0, 1];
  } else if (humanchoice == "paper" && botchoice == "rock") {
    return [1, 0];
  } else if (humanchoice == "scissors" && botchoice == "paper") {
    return [1, 0];
  } else if (humanchoice == "rock" && botchoice == "scissors") {
    return [1, 0];
  }
}
function rpsRandom() {
  var bot = ["rock", "paper", "scissors"];

  var num = Math.floor(Math.random() * 3);
  return bot[num];
}

function rpsFrontEnd(humanImagechoice, botImagechoice, finalmessage) {
  var imgdb = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  let humandiv = document.createElement("div");
  let botdiv = document.createElement("div");
  let messdiv = document.createElement("div");

  humandiv.innerHTML =
    "<img src='" +
    imgdb[humanImagechoice] +
    "' height=150 width=150 style=box-shadow: 0px,10px,30px rgba(255,0,0,1);>";
  botdiv.innerHTML =
    "<img src='" +
    imgdb[botImagechoice] +
    "' height=150 width=150 style=box-shadow: 0px,10px,30px rgba(0,0,255,1);>";
  messdiv.innerHTML =
    "<h1 style=' color:" +
    finalmessage["color"] +
    "; font-size:60px; padding:20px;'>" +
    finalmessage["message"] +
    "</h1><a style='color:red;display:flex;justify-content:space-evenly; text-align:center; font-size: 40px; text-decoration:none;' href='index.html'>RETRY</a>";
  document.getElementById("flex-box-div").appendChild(humandiv);
  document.getElementById("flex-box-div").appendChild(messdiv);
  document.getElementById("flex-box-div").appendChild(botdiv);
}
