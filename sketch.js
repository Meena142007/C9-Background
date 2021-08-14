var btn_pink;
var btn_yellow;
var p = 0;
var y = 0;
var b = 0;


function setup() {
  createCanvas(400, 400);  
 
  btn_pink = createButton("PINK");
  btn_pink.position(100,50);
  btn_pink.mousePressed(pink_bg);

  btn_yellow = createButton("YELLOW");
  btn_yellow.position(250,50);
  btn_yellow.mousePressed(yellow_bg);
}

function pink_bg()
{
  p = 255;
  y = 192;
  b = 203;
}

function yellow_bg()
{
  p = 246;
  y = 235;
  b = 74;
}



function draw() {
  background(p,y,b);
}

//drawsprites
drawSprites();

