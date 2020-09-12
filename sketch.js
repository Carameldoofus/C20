var r1, r2
function setup() {
  createCanvas(800,400);
r1 = createSprite(400, 200, 50, 50); 
r2 = createSprite(200, 200, 20, 20); 
r2.shapeColor = "red"
r1.shapeColor = "blue"
}

function draw() {
  background(0);  
  drawSprites();
  r2.x = mouseX
  r2.y = mouseY 
  
  if (r2.x-r1.x<r2.width/2+r1.width/2 
    && r1.x-r2.x<r2.width/2 + r1.width/2
    && r2.y-r1.y< r2.height/2 + r1.height/2
    && r1.y - r2.y< r1.height/2 + r2.height/2 
    
    )
  
  {
text ("hello",100, 100 )

  }


}
