function circle(x,y,diameter){
  arc(x,y,diameter,diameter,0,TWO_PI);
  
}

function setup() {
  createCanvas(500,500);
  
}

function draw() {
   background(0,255,251);
   
  //First Circle
  
  stroke(0,0,0,255);
  fill(80,3,98);
  circle(width/2, height/2,200);
  
  //Second Circle
  stroke(0,0,0);
  fill(150,0,150);
  circle(width/2,height/2,100);
  
  //Third Circle
  stroke(0,0,0);
  fill(200,3,100);
  circle(width/2,height/2,75);
  
  //Fourth Circle
  stroke(0,0,0);
  fill(240,10,130);
  circle(width/2,height/2,40);
  
}