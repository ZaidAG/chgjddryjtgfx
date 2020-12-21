
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperCuts,boxCuts,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paperCuts=new Paper(100,670,70);
	 boxCuts=new Check(600,670,150,20);
	 boxCguts=new Check20(675,670,20,300);
	 boxCnuts=new Check20(525,670,20,300);
	 ground=new Ground(0,700,1700,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  boxCuts.display();
  boxCguts.display();
  boxCnuts.display();
  ground.display();
  paperCuts.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperCuts.body,paperCuts.body.position,{x:55,y:-65});
	}
}


