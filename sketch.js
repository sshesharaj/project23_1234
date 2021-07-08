var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var player;


function preload()
{

  carAnimation1 = loadAnimation("images/car1.png");
  carAnimation2 = loadAnimation("images/car2.png");
 playerAnimation = loadAnimation("images/Player-03.png");
 logAnimation1 = loadAnimation("images/log1.png")
 logAnimation2 = loadAnimation("images/log2.png")
cityAnimation1 = loadAnimation("images/city1.png")
cityAnimation2 = loadAnimation("images/city2.png")
wallAnimation = loadAnimation("images/wall.png")

}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  //Grasses where player can rest
  for(var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)//adding road
    {
     var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)
      road.shapeColor="black";
    }
    bottomGrass1.shapeColor = "green";
  }
  //To create rows of car
   for(var i = 0; i < 40; i++){
     cars = new Car(2);
     carGroup1.add(cars.spt);
   }
  //To create rows of Logs
    for(var i = 0; i < 40; i++){
      log = new Log(-3);
      logGroup1.add(log.spt);
    }

  //to create player
  player = new Player(width/2,height-75);

   
 }

function draw() {
  background("skyblue");

 // move the screan to location of player
 translate (0,-player.spt.y+height-150);


  //Making the cars re-apper
  for(i=1;i<carGroup1.length;i++) {
    if(carGroup1[i].x>width)
    {
     carGroup1[i].x=0;
    }
    if(carGroup1[i].x<0)
    {
      carGroup1[i].x=width;
    }
  }

  //making the logs reapper
  for(i=1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;
    }
  }

// To make the player to go back if he touches the car
if (carGroup1.isTouching(player.spt)){
  player.spt.x = width/2;
  player.spt.y = height-75;
}

// to make the player float if he touches the logs and get restarted id he falls to the river
if (logGroup1.isTouching(player.spt)){
  player.spt.x = player.spt.x3;
}
else if ((player.spt.y> height-1550 && player.spt.y<height-1330)||
 (player.spt.y<height-500 && player.spt.y>hight-850)||
 (player.spt.y > height)||
 (player.spt.x<0)||
 (player.spt.x>width)){
   
   player.spt.x = width/2;
   player.spt.y = height-75;
 }


  drawSprites();
}


function keyPressed(){
if(keyCode == UP_ARROW){
  player.move(0,-2)
}

else if(keyCode == DOWN_ARROW){
  player.move(0,2);
}

else if(keyCode == LEFT_ARROW){
  player.move(-2,0);
}

else if(keyCode == RIGHT_ARROW){
  player.move(2,0);
}



}