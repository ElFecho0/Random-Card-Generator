/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//♦ ♥ ♠ ♣
// if corazon || rombo {rojo}
//if pica || trebol {negro}
//switch

var boton = document.querySelector("button");
boton.addEventListener("click", e => {
  RandPinta();
  RandNum();
});

function RandPinta() {
  var p = Math.floor(Math.random() * 4 + 1);
  if (p == 1) {
    document.getElementById("pinta1").style.color = "red";
    document.getElementById("pinta2").style.color = "red";

    p = "♦";
  } else if (p == 2) {
    document.getElementById("pinta1").style.color = "red";
    document.getElementById("pinta2").style.color = "red";

    p = "♥";
  } else if (p == 3) {
    document.getElementById("pinta1").style.color = "black";
    document.getElementById("pinta2").style.color = "black";

    p = "♠";
  } else if (p == 4) {
    document.getElementById("pinta1").style.color = "black";
    document.getElementById("pinta2").style.color = "black";

    p = "♣";
  }

  document.getElementById("pinta1").innerHTML = p;
  document.getElementById("pinta2").innerHTML = p;
}

function RandNum() {
  var n = Math.floor(Math.random() * 13 + 1);

  if (n == 1) {
    n = "A";
  } else if (n == 11) {
    n = "J";
  } else if (n == 12) {
    n = "Q";
  } else if (n == 13) {
    n = "K";
  }

  document.getElementById("numero").innerHTML = n;
}
