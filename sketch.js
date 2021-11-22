var player,playerImg;
var bg,bgImg;
var vulture, vultureImg, vultureGroup;

function setup() {
  createCanvas(displayWidth, displayHeight-150);
  
  bg=createSprite(width/2, height/2, 0,0)
  bg.addImage(bgImg)
  bg.scale=1.5



  player=createSprite(70, height/2, 50, 50);
  player.addImage(playerImg)
  player.scale=0.5

  vultureGroup= new Group()



}
function preload(){
playerImg= loadImage("player.png")
bgImg= loadImage("bg.webp")
vultureImg= loadImage("png_vulture.png")

}
function draw() {
  background(bgImg);  
 
if(keyDown(UP_ARROW)){
  player.y-=10;
}
player.y+=2;

bg.x-=2;
if(bg.x<0){
  bg.x=width/2
}






  //spawnVulture();
  drawSprites();
}

function spawnVulture(){

  if(frameCount%60==0){
    vulture=createSprite(width+10,height/2,0,0)
    vulture.addImage(vultureImg)
    vulture.velocityX= -5;
    vultureGroup.add(vulture)
  }
}