class Unicorn {
    constructor() {
      this.x = width / 2;
      this.y = height - 50;
      this.speed = 0;
    }
  
    show() {

      // Unicorn head
      fill(255, 182, 193); 
      ellipse(this.x, this.y, 100, 100);
  
      // Horn
      fill(255, 255, 0); 
      triangle(this.x, this.y - 80, this.x + 10, this.y - 40, this.x - 5, this.y - 40); // Triangle represents the horn
  
      // Eyes
      fill(255); 
      ellipse(this.x - 10, this.y - 10, 10, 10); // Left eye
      ellipse(this.x + 10, this.y - 10, 10, 10); // Right eye
  
      // Pupils
      fill(0); 
      ellipse(this.x - 10, this.y - 10, 4, 4); // Left pupil
      ellipse(this.x + 10, this.y - 10, 4, 4); // Right pupil
  
      // Smile
      noFill();
      stroke(0); // Black color
      arc(this.x, this.y + 10, 30, 20, 0, PI); // Smile arc
    }
  
    update() {
      // Moves unicorn horizontally,left to right and vice versa
      this.x += this.speed;
  
      // Keeps the unicorn within the frames of my canvas
      this.x = constrain(this.x, 15, width - 15);
    }
  
    move(speed) {
      this.speed = speed;
    }
  
    hits(other) {
      // Checks if the unicorn collides with another object
      let d = dist(this.x, this.y, other.x, other.y);
      return d < 20;
    }
  }