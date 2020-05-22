var mercury,venus,earth,mars;
var angle=0;
var angleSpeed=0.2;
var sunradius;
var mercuryimg,venusimg,earthimg,marsimg;
function preload(){
mercuryimg=loadImage("e.png")
venusimg=loadImage("ep.png");
earthimg=loadImage("ju.png");
marsimg=loadImage("m.png");

}
function setup() {
  createCanvas(800,800);
  createSprite(400, 200, 50, 50)
 mercury=createSprite(0,0);
 mercury.addImage("mercury",mercuryimg);
 mercury.scale=0.15;
 venus=createSprite(370,50);
 venus.addImage("venus",venusimg);
 venus.scale=0.15;
 earth=createSprite(580,180);
 earth.addImage("earth",earthimg);
 earth.scale=0.15;
 mars =createSprite(200,200);
 mars.addImage("mars",marsimg);
 mars.scale=0.15;
}
function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);

  if (venus.collide(mercury)) {
      mercury.destroy();
  }


  angle = angle + anglespeed;
  if (frameCount % 1 === 0) {
      venus.scale = venus.scale + 0.01;
  }
  drawSprites();
}