const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    box1 = new Box(800,380,50,50);
    box2 = new Box(1000,380,50,50);
    pig1 = new Pig(900, 380)
    log = new Log(900, 320, 250, PI /2)
    box3 = new Box(800,290,50,50);
    box4 = new Box(1000,290,50,50);
    pig2 = new Pig(900, 290)
    log2 = new Log(900, 240, 250, PI /2)
    box5 = new Box(900,210,50, 50);
    log3 = new Log(850, 190, 100, PI / 6)
    log4 = new Log(950, 190, 100, PI / -6)
    bird = new Bird(50, 50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
    log.display()
    box3.display();
    box4.display();
    pig2.display()
    log2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()
}