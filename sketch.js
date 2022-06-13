function setup() {
  createCanvas(800, 800);
  colorMode(HSL);
  noStroke();
  
  circle_1 = new Circle();
  circle_2 = new Circle();
  circle_3 = new Circle();
  circle_4 = new Circle();
  circle_5 = new Circle();

}

function draw() {
  background(50);

  circle_1.draw();
  circle_2.draw();
  circle_3.draw();
  circle_4.draw();
  circle_5.draw();
}

function Circle() {

  //called once only for each circle
  this.x = random(0, width);
  this.y = random(0, height);
  this.directionSpeedX = 3;
  this.directionSpeedY = 3;
  this.alpha = random(1);

  this.draw = function () {
    this.hueX = map(this.x, 0, width, 0, 360, true);
    this.hueY = map(this.y, 0, height, 0, 360, true);
    this.from = color(this.hueX, 100, 50, this.alpha);
    this.to = color(this.hueY, 100, 50, this.alpha);
    this.ballColour = lerpColor(this.from, this.to, 0.33);
    
    fill(this.ballColour);
    ellipse(this.x, this.y, 50, 50);

      if (this.x > width - 25) {
        this.directionSpeedX = -3;
      } else if (this.x < 25) {
        this.directionSpeedX = 3;
      }

      if (this.y > height - 25) {
        this.directionSpeedY = -3;
      } else if (this.y < 25) {
        this.directionSpeedY = 3;
      }

      this.x = this.x + this.directionSpeedX;
      this.y = this.y + this.directionSpeedY;
    };
}
