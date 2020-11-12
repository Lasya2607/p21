var bullet;
var wall;
var speed;
var weight;
var thickness;




function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet = createSprite(50,200,60,20);
  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = "black";

  bullet.velocityX = speed;
 

}

function draw() {
  background("pink");  
 function hasCollided(lbullet,lwall) {
bulletRightEdge = lbullet.x+lbullet.width;
wallLeftEdge = lwall.x
if(bulletRightEdge>=wallLeftEdge) {
  return true
}
return false
 }
 if(hasCollided(bullet,wall)) {
   bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 }
 if(damage > 10) {
wall.shapeColor = "red";
 }
 if(damage < 10) {
wall.shapeColor = "green";
 }

  drawSprites();
}