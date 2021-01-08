function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(400,200,50,50);
  car=createSprite(700,200,50,50);
  bike=createSprite(700,500,50,50);
  car.velocityY=5
  bike.velocityY=-5
  car.shapeColor="red"
  bike.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingrect.x=mouseX
  movingrect.y=mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="lightgreen"
    fixedrect.shapeColor="lightgreen"
  }
  else{
    movingrect.shapeColor="yellow"
    fixedrect.shapeColor="yellow" 
  }
  if(car.x-bike.x<car.width/2+bike.width/2&&
    bike.x-car.x<bike.width/2+car.width/2){
  car.velocityX=car.velocityX*(-1)
  bike.velocityX=bike.velocityX*(-1)
  }
  if(car.y-bike.y<car.height/2+bike.height/2&&
    bike.y-car.y<bike.height/2+car.height/2){
      car.velocityY=car.velocityY*(-1)
      bike.velocityY=bike.velocityY*(-1)
  }
  drawSprites();
}