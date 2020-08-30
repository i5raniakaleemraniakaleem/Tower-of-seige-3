const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var score=0

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1= new Box(330,235,30,40);
    box2= new Box(360,235,30,40);
    box3= new Box(390,235,30,40);
    box4= new Box(420,235,30,40);
    box5= new Box(450,235,30,40);
    box6= new Box(360,195,30,40);
    box7= new Box(390,195,30,40);
    box8= new Box(420,195,30,40);
    box9= new Box(390,155,30,40);
    polygon=Bodies.circle(50,200,20);
    this.polygon.Visiblity = 255;
    this.polygon.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    World.add(world,polygon);
    slingshot= new SlingShot(this.polygon,{x:100,y:200})
}

function draw(){
  noStroke();
  textSize(35);
  fill("white");
  text("Score:"+score,width-300,50);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
  slingshot.attach(this.polygon);
  }
  }

  async function getTime(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;
    var hour= datetime.slice (11,13);
    backgroundImg = loadImage(bg);
    console.log(hour);
    }