const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gameState = "play";
var ground,plinko;
//var scores =[500,500,100,100,200,200];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 600;
var score=0;
var turn = 0;
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
    world = engine.world;
    
  ground = new Ground(240,690,480,20);
  /*fill("white");
  text("500",600,40);*/
  for(var k =0;k<=width;k=k+80){
    divisions.push(new Divisions(k,divisionHeight,10,height =divisionHeight/2 ))
  }
  
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,75));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,175));
  } 
  for(var j=40;j<=width;j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
  for(var j=15;j<=width-10;j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  } 

}

function draw() {
  background(0,0,0);
  Engine.update(engine); 
  text("Score : "+score,20,30);
  
  /*if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10)); 
  } 
    for(var j=0;j<particles.length;j++) { 
    particles[j].display(); 
  }
  for(var j=0;j<particles.length;j++)
  {
  particles[j].display();
  }*/

  if(particle !=null){
    particle.display();
    if(particle.body.position.y>660)
    {
      if(particle.body.position.x<300)
      {
        score=score+500;
        mousePressed();
        //particle = null;
        if(turn>=5){
        gameState ="end";
        text("GAME OVER",240,500);
        }
      }
      else if(particle.body.position.x>301 && particle.body.position.x<600){
        score=score+100;
        mousePressed();
        //particle = null;
        if(turn>=5){
        gameState ="end";
        text("GAME OVER",240,500);
        }
      }
      else{
        score=score+200;
        mousePressed();
        //particle = null;
        if(turn>=5){
        gameState ="end";
        text("GAME OVER",240,500);
        }
      }
    }
  }
  for(var k=0;k<divisions.length;k++){
   divisions[k].display();
  } 
  for(var j=0;j<plinkos.length;j++) { 
   plinkos[j].display(); }
  
  ground.display();
  
  
  drawSprites();
}
function mousePressed(){
  if(gameState != "end"){
    turn++;
    particle = new Particle(mouseX,10,10,10);
  }
}





