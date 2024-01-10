class Obstacle {
    constructor() {
      this.x = random(width);
      this.y = 0;
      this.speed = random(2, 5);
    }
  
    show() {
      fill(200, 0, 0);
      rectMode(CENTER);
      rect(this.x, this.y, 20, 20);
    }
  
    update() {
      // This moves obstacle down
      this.y += this.speed;
    }
  
    offscreen() {
      // Check if the obstacle is off-screen
      return this.y > height;
    }
  }
  