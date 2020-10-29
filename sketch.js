// Namespacing object of matter.js
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;

// variables for engine world & bodies
var engine , world , ground , ball ;
var box1 , box2;


function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 

  world = engine.world;

  box1=new Box(200,200,50,50);
  box2 = new Box(220,100,50,100);
  ground= new Ground(400,360,800,20)
  }

function draw() {
  background(0);  
  // for the updating the ENGINE.
  Engine.update(engine);

  box1.show();
  box2.show();
  ground.show();


}