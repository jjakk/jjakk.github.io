
var counter = 0;

function flip(){
  document.getElementById("inner").style.transform = counter%2 ? "rotateY(0deg)" : "rotateY(180deg)";
  counter++;
}
