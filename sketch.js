
var monkey , monkey_running;
var bananaImage, obstacleImage,land;
var bananaGroup, obstacleGroup;
var score;
var st = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(360,370);
  monkey = createSprite(75,280,15,15);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  land = createSprite(180,320,360,20);
  land.x = land.width/2;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  textSize(20);
  fill("black");
  st = Math.round(frameCount/20);
  text("Survival Time : "+st,100,30);
  
  if(keyWentDown("space")){
     monkey.velocityY = -12;
     }
  monkey.velocityY+= 0.8;      
  monkey.collide(land);
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(370,150,15,15);
    banana.y = Math.round(random(120,190));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -4;
    
    banana.lifetime = 100;
    
    bananaGroup.add(banana);
  }  
  
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(370,284,15,15);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.14;
    obstacle.velocityX = -6;
    
    obstacle.lifetime = 130;
    
    obstacleGroup.add(obstacle);
  }  
  
  drawSprites();
}

//function spawnObstacles() {
  
//}