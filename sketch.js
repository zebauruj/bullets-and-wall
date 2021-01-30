
var wall;
var bullets;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
   thickness=random(22,83);
  wall=createSprite(1500, 200, thickness, 400);
  wall.shapeColor="grey";
   speed=random(223,321);
  weight=random(30,52);
  bullets=createSprite(10,50,20,8);
bullets.shapeColor="white";

}

function draw() {
  background(0); 
  bullets.velocityX=speed;
  var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
 if( bullets.collide(wall)){
  bullets.velocityX=0;
  if(damage<10){
    wall.shapeColor="green";
  }
  else{
   wall.shapeColor="red";
  }
 
}
  drawSprites();
}