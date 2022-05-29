var ball
function preload(){
  ballimage=loadImage("ball.jpg")
}
function setup() {
  createCanvas(400,400);
  ball= createSprite (100,100,50,50);
  ball.addImage(ballimage)
}

function draw() 
{
  background(30);
  ball.velocityY=0
  if (keyDown("up")){
  //ball.y=ball.y-5
  ball.velocityY=-5
  }
  if(keyDown("down")){
    ball.y=ball.y+5
  }
  if (keyDown("left")){
    ball.x=ball.x-5
  }
  if (keyDown("right")){
    ball.x+=5
  }
  drawSprites()
}