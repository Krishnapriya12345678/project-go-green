var waste,wasteBody,waste_options
var ground,groundBody,ground_options,
 box1,box2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
  
  waste_options={
    isStatic:true,
    restitution:0.3,
     friction:0.5,
    densityP:1.2
  }
  ground_options={
    isStatic:true
  }
 
  
	engine = Engine.create();
  world = engine.world;
  waste=createSprite(100,580,15,15,waste_options)
  World.add(world,waste)
  
  wasteBody=Bodies.circle(100,580,400,waste_options)
World.add(world,wasteBody)
    
    ground=createSprite(400,590,900,10,ground_options)
     World.add(world,ground)

  groundBody=Bodies.rectangle(400,600,900,10,ground_options)
  World.add(world,groundBody)
  Engine.run(engine);
    
box1=new Box(580,530)
box2=new Box(420,530)
box3=new Box2(500,580,120,20)

}


function draw() {
 
  background('black');
  

  drawSprites();
waste.x=wasteBody.position.x
waste.y=wasteBody.position.y
  
  ground.x=groundBody.position.x
ground.y=groundBody.position.y

box1.display();
box2.display();
box3.display();

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(waste,wasteBody.position,{x:90,y:-90})
  }
}




}




