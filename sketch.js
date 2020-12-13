var wall, bullet;
var thickness, speed, weight;

function setup(){
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  //random values
  thickness = random(20,90);
  speed = random(200,300);
  weight = random(30,50);

  //creating sprites
  wall = createSprite(750,200,thickness,height/2);
  bullet = createSprite(10,200,20,20);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  isTouching(bullet,wall);
}

function isTouching(object1,object2) {
if(object1.x - object2.x < object1.width/2 + object1.width/2){
damage = 0.5*weight*speed*speed/(thickness+thickness+thickness);
console.log(damage);
if(damage > 10){
object2.shapeColor = "red";
}
else if(damage < 10){
object2.shapeColor = "green";
}

}  
}