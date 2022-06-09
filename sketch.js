directionSpeedX = 3;
directionSpeedY = 3;

function setup() {
  createCanvas(800, 800);
 
  circle_1 = new drawCircle();
  circle_2 = new drawCircle();
}

function draw() {

  circle_1.draw();
  circle_2.draw();
}
  
function drawCircle() {

  //position of x and y for ellipse
  this.x = random(0, width);
  this.y = random(0, height);

  //colour blending for the fill function of ellipse colour
  this.hueX = map(this.x, 0, width, 0, 360, true);
  this.hueY = map(this.y, 0, height, 0, 360, true);
  this.from = color(this.hueX, 100, 50, 1);
  this.to = color(this.hueY, 100, 50, 1,);
  this.ballColour = lerpColor(this.from, this.to, 0.33);
  
  this.draw = function () {
    colorMode(HSL);
    fill(this.ballColour);
    ellipse(this.x, this.y, 50, 50);
  
    if (this.x > width-25) {
      directionSpeedX = -3;
    } else if (this.x < 25){
      directionSpeedX = 3;
    }
  
    if (this.y > height-25) {
      directionSpeedY = -3;
    } else if (this.y < 25) {
      directionSpeedY = 3;
    }
  
    this.x = this.x + directionSpeedX;
    this.y = this.y + directionSpeedY;
  }
}