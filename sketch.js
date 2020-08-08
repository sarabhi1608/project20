
var r = 0;
var g = 50;
var b=255;
var circle;

function setup(){
  createCanvas(400,400);
}


function draw(){
  
 background(r,g,b);
 
 r=map(mouseX,0,1100,255,233);
 
 g=map(mouseX,0,1100,255,16);
  
 b=map(mouseX,0,1100,255,233);
 

 
  fill('white');
  circle=ellipse(mouseX,mouseY,55);
  
}