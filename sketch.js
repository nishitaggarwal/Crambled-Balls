const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 500);
	engine = Engine.create();
	world = engine.world;
	log1 = new Log(750,400,20,120,PI/2)
	log2 = new Log(680,470,100,20,PI/2)
	log3 = new Log(620,400,20,120,PI/2)

	//Create the Bodies Here.
 	 ball = new Papper(50, 300,20,20)
	 
	  ground = new Ground(400,480,800,40)
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 textSize(22);
 fill("red")
 text("Safely Drop the Packet in the basket ",200,200)

 
if(ball.y < 0){
keyCode = 0
ball.body.position.x = 50;
ball.y = 300;
}
  if(keyCode === UP_ARROW){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:5.35,y:-100.5})
    keyCode = 0;
  }
  else if(keyCode === 0){

	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-0})

  }

  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites();
 
}





