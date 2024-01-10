class Treat {
    constructor() {
      this.x = random(width);
      this.y = 0;
      this.speed = random(2, 5);
      this.collected = false;
    }
  
   show() {
    //cone is brown
    fill(76, 46, 4);
    triangle(this.x - 35, this.y + 40, this.x-5, this.y + 50, this.x - 15, this.y + 85);
    //scoop of ice cream - RIGHT BOTTOM 
    fill(239, 136, 236);
    ellipse(this.x-5, this.y + 35, 30, 30);
    //scoop of ice cream - LEFT BOTTOM
    fill(239, 36, 136);
    ellipse(this.x - 35, this.y + 35, 30, 30);
    //scoop of ice cream - top
    fill(139, 86, 136);
    ellipse(this.x - 20, this.y + 10, 30, 30);
  }
  
    // This moves treat down
    update() {
      this.y += this.speed;
    }
  
    // Marks treat as collected
    collect() {
      this.collected = true;
    }
  
    // Checks if the treat is off-screen or collected
    offscreen() {
      return this.y > height || this.collected;
    }
  }