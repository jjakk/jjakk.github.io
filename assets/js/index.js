
var counter = 0;

function flip(){
  document.getElementById('inner').style.transform = 'rotateY(' + (counter%2 ? 0 : 180) + 'deg)';
  counter++;
}
