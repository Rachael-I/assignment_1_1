directionSpeedX = 3;
directionSpeedY = 3;

function setup() {
  createCanvas(800, 800);
  x = random(0, width);
  y = random(0, height);
}

function draw() {
  background(0, 100, 0, 1);
  colorMode(HSL);
  let hueX = map(x, 0, width, 0, 360, true);
  let hueY = map(y, 0, height, 0, 360, true);
  let from = color(hueX, 100, 50, 1);
  let to = color(hueY, 100, 50, 1,);
  let ballColour = lerpColor(from, to, 0.33);
  fill(ballColour);
  ellipse(x, y, 50, 50);
  
  if (x > width-25) {
    directionSpeedX = -3;
  } else if (x < 25){
    directionSpeedX = 3;
  }
  
  if (y > height-25) {
    directionSpeedY = -3;
  } else if (y < 25) {
    directionSpeedY = 3;
  }
  
  x = x + directionSpeedX;
  y = y + directionSpeedY;
}