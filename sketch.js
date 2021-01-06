const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState="towerisstanding";
var gamestate="onSling";
var ti
var chain;
var China, playbutton,ps,pi;
function preload(){
 ti=loadImage("t.jpg")
 China=loadSound("DonaldTrump.mp3");
 pi=loadImage("play0.png");
}

function setup(){
   
   createCanvas(800,600);
    back=createSprite(400,300,800,800);
   back.addImage(ti);
   ps=createSprite(10,20,200,20);
   ps.visible=false;
   //ps.addImage(pi);


   back.scale=0.5
   

   engine = Engine.create();
   world = engine.world;
gameState="towerisstanding";
   shooter=new Shooter(25,290,30,30);

   chain=new SlingShot(shooter.body,{x:106,y:200});

  gamestate="onSling";
  ground2=new Ground(400,580,800,20);
   block8=new Box(330,235,30,40);
   block9=new Box(360,235,30,40);
   block10=new Box(390,235,30,40);
   block11=new Box(420,235,30,40);
   block12=new Box(450,235,30,40);

   block13=new Box(360,195,30,40);
   block14=new Box(390,195,30,40);
   block15=new Box(420,195,30,40);

   block16=new Box(390,155,30,40);
   

   ground=new Ground(380,273.15,180,30);
}

function draw(){
  gameState="play";

  if(mousePressedOver(ps)){
    China.loop();
    }

  background(0);
  Engine.update(engine);
  drawSprites();
  back.display()
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  ground.display();

  shooter.display();
  chain.display();
  fill("blue");
  stroke("green");
  text("Click here to listen",10,20);
}

function mouseReleased(){
  chain.fly();
  gameState="cut";
}

function mouseDragged(){
 if(gamestate==="onSling"){
  Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
 }
}




function keyPressed(){
  if(keyCode === 32){
    chain.attach(shooter.body);
    gameState="towerisstanding";
    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
 
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
 
    block16=new Box(390,155,30,40);
    
}
}