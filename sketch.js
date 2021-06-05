var ninja, ninja_img, ninja_anima
var bg, bg_img


function preload(){
  ninja_img = loadImage("ninja.png")
  bg_img = loadImage("bg.jpg")
  
}


function setup(){
  
  createCanvas(600,300)
  
  
  ninja = createSprite(400,150,10,10)
  ninja.addImage(ninja_img)
  
}


function draw(){
  
  background(bg_img)
  drawSprites()
}