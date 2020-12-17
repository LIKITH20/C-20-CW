var fixedRect,movingRect;
var ball1,ball2;
function setup() {
  createCanvas(800,400);
  
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  ball1 = createSprite(600,350,50,50);
  ball2 = createSprite(200,350,50,50);
  ball1.velocityX=-3;
  ball2.velocityX=3;

  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";

  object1=createSprite(600,200,50,50);
  object1.shapeColor="red";

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if( isTouching(object1,movingRect) ){
    object1.shapeColor="green";
  movingRect.shapeColor="green";
  }
  else{
    object1.shapeColor="red";
  movingRect.shapeColor="red";
  }
  
 bounceOff(ball1,ball2)
  
  

  drawSprites();
}

