//Create variables here

function preload()
{
  //load images here
  dogImage = loadImage("images/dogimg.png");
  happydogImage = loadImage("images/dogimg1.png");
}
var database,dog,happydog,foodS,foodStock;

function setup() {
  database = firebase.database();
  createCanvas(500, 500);

  dog = createSprite(20,20,20,20);
  dog.addimage(dogImage);
  
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydogImage);
  }

  drawSprites();
  //add styles here

}



