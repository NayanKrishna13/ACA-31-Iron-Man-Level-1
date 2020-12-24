
var bg, backgroundImg,ironMan,ironManImg;
var stoneGroup,stoneImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironManImg = loadImage("images/iron.png");
  
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=-6;


  ironMan =createSprite(500,500,80,90);
  ironMan.addImage(ironManImg);
  ironMan.scale =0.2;
  
    
 }

function draw() {
  if(keyDown("up")){
    ironMan.velocityY=-10;
  }
  
  if(keyDown("left")){
    ironMan.x=ironMan.x-5;
  }
  if(keyDown("right")){
    ironMan.x=ironMan.x+5;
  }
  ironMan.velocityY=ironMan.velocityY+0.5;
  
  
  if(bg.y<100){
    bg.y=bg.height/4;
  }
    drawSprites();
  
}
