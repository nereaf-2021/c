var catImage,mouseImage,gardenImage
var cat,mouse
function preload() {
    //load the images here
    catImage  = loadAnimation ("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    mouseImage = loadAnimation ("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png",)
    gardenImage = loadImage    ("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
   cat = createSprite(870,600)
   cat.addAnimation("cat",catImage)
   mouse = createSprite(200,600)
   mouse.addAnimation("mouse",mouseImage)
   cat.scale = 0.2 
   mouse.scale  = 0.15    
    //create tom and jerry sprites here

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2+mouse.width/2){cat.scale = 0.4
    mouse.scale = 0.1}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){cat.velocityX = -5
mouse.frameDelay = 25}


}
