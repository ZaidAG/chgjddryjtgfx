
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
	 paperCuts=new Paper(100,670,100);
	 boxCuts=new Check(700,670,160,900);
	 boxCguts=new Check20(705,670,20,800);
	 boxCnuts=new Check20(505,670,20,800);
	 ground=new Ground(0,700,1700,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paperCuts.display();
  boxCuts.display();
  boxCguts.display();
  boxCnuts.display();
  ground.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperCuts.body,paperCuts.body.position,{x:1005,y:-2535});
	}
}


