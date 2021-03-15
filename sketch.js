const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var ground;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    var groundOptions ={
        isStatic: true
    }
    var boxOptions ={
        restitution:2
    }

   box= Bodies.rectangle(400,300,50,50,boxOptions);
    World.add(world,box);
   ground = Bodies.rectangle(400,550,800,20,groundOptions);
    World.add(world,ground);


    console.log(box);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);
    rect(ground.position.x,ground.position.y,800,20);
}
