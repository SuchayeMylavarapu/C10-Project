var ship, sea
function preload() {
  shipimage = loadAnimation("ship-1.png","ship-2.png");
  seaimage = loadImage("sea.png");
}
function setup() {
  createCanvas(1000,1000)
  

  sea = createSprite(500,500)
  sea.addImage(seaimage)
  sea.scale = 0.6
  ship = createSprite(150,600,500,500)
  ship.addAnimation("shipmoving",shipimage)
  ship.scale = 0.3
}
function draw() {
  background(0)
  sea.velocityX = -5
  if (sea.x<0) {
    sea.x = sea.width/4
  }
  drawSprites()
}