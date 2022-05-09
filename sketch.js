var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup=new Group();
  climbersGroup=new Group();

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
 tower.velocityY = 1;
 ghost=createSprite(50,180,20,50)
 ghost.addImage("ghost",ghostImg)
 ghost.scale=0.5
  
}

function draw() {
  background(200);
  drawSprites();
  if(tower.y > 400){
   tower.y = 300
   }
   spawnDoors();
   if(keyIsDown(LEFT_ARROW))
   {ghost.x=ghost.x-1}
  
   if (keyIsDown(RIGHT_ARROW)) 
   {ghost.x=ghost.x-1}
  

}
function spawnDoors(){
if(frameCount%240===0){
  var door=createSprite(155,-50)
  door.velocityY= 1;
  var climber=createSprite(155,-0)
  climber.addImage("climber",climberImg);
  climber.velocityY= 1;
 door.x=Math.round(random(120,400))
  climber.x=door.x
  door.addImage("door",doorImg);
  door.lifetime=900
  doorsGroup.add(door)
}


}

