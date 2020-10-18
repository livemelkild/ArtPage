
/* Bruker jGuery inni canvas filen fordi jeg følte det ble mest oversiktlig.
Her henter jeg dokumentet*/
$(document).ready(function(){

var canvas = $('canvas');
var c = canvas[0].getContext('2d');

var width = 400;
var height = 450;
let new_y = 0;
let animation = null;

//starter med å tegne den røde stilken til blomsten. Det er ikke et rektangel,
//men en en tykk linje
function drawGrass() {
  c.beginPath();
  c.strokeStyle = 'black';
  c.lineWidth= 10;
  c.fillRect(380,350,10,80);
  c.stroke();
  c.fill();
  c.closePath();
}

//Her lager jeg logikken for klikkefunksjonen på canvas-boksen. Som jeg senere bruker
// i drawFlower()
canvas[0].onclick = function(){
  clicked = !clicked;
}

let clicked = false;

function drawFlower(){
  c.beginPath();
  c.arc(387,340,30,0,Math.PI*2,true);

  if(clicked){//om blomsten blir klikket på kommer dette til å skje
    c.strokeStyle = 'pink';
    c.fillStyle =  'red'
  }
  else{ //dette skjer hvis ikke blomsten blir klikket på.
    c.strokeStyle = 'pink';
    c.fillStyle = 'purple';
  }
  c.lineWidth = 5;
  c.fill();
  c.stroke();
  c.closePath();
}

//her blir bildet tegnet ved åpning av siden.
drawCanvas();

canvas.mouseenter(function(){
  new_y = 0; //slik vil eple starte fra topp, siden det ikke blir plusset på noe
            // ny y i drawApple()
});

canvas.mouseout(function(){
  HovermouseLeave();
});

canvas.hover(function() {
  if (animation){
    cancelAnimationFrame(animation);
  }
  animate();
})

function animate(){
  animation = requestAnimationFrame(animate);
  clear();
  drawCanvas();
}

//tegner hele alle elementene
function drawCanvas(){
  drawTree();
  drawApple();
  drawGrass();
  drawFlower();
}

function drawTree(){
  c.strokeStyle = 'black';
  c.fillStyle = 'brown';
  c.stroke();
  c.fill();
  c.fillRect(200,140,30,300);


  c.closePath();
  c.beginPath();
  c.arc(170,160,100,0,Math.PI*2,true);
  c.strokeStyle = 'black';
  c.fillStyle = 'green';
  c.lineWidth = 1;
  c.fill();
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(260,160,100,0,Math.PI*2,true);
  c.strokeStyle = 'black';
  c.fillStyle = 'green';
  c.fill();
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(220,110,100,0,Math.PI*2,true);
  c.strokeStyle = 'black';
  c.fillStyle = 'green';
  c.fill();
  c.stroke();

}

function drawApple(){
  c.beginPath();
  if (animation){
  c.moveTo(180, 183 + new_y);
  c.lineTo(180, 200 + new_y);
  c.lineWidth = 5;
  c.stroke();
  c.closePath();
  c.beginPath();
  c.arc(180,215 + new_y,20,0,Math.PI*2,true);
  // dette er logikken som får eple til å falle
  if (new_y < 200){ // 200 er max, fordi da har eple truffet "bakken"
    new_y += 1; // slik vil eple få ny y-verdi for hver gang eple blir tegnet på nytt.
  }
}
  else {
    c.moveTo(180, 183);
    c.lineTo(180, 200);
    c.lineWidth = 5;
    c.stroke();
    c.closePath();
    c.beginPath();
    c.arc(180,215,20,0,Math.PI*2,true);
  }
  c.strokeStyle = 'black';
  c.fillStyle = 'red';
  c.lineWidth = 1;
  c.stroke();
  c.fill();
  c.closePath();
}

//sletter alle tegningene
function clear(){
  c.beginPath();
  c.clearRect(0,0,width, height);
}

function HovermouseLeave(){
  cancelAnimationFrame(animation);
  animation = null;
  new_y = 0;
  clear();
  drawCanvas();
}
})
