
let backgroundImage;
let unicorn;
let treats = [];
let obstacles = [];
let score = 0;


function preload(){
  backgroundImage = loadImage('images/kitchen2.jpg');
}

function setup() {
  createCanvas(600, 600);
  unicorn = new Unicorn();
}

function draw() {
  background(backgroundImage);


  // Draw and update unicorn
  unicorn.show();
  unicorn.update();

  // Draw and update treats
  for (let treat of treats) {
    treat.show();
    treat.update();

    // Check for collision with unicorn
    if (unicorn.hits(treat)) {
      treat.collect();
      score += 10;
    }
  }

  // Draw and update obstacles
  for (let obstacle of obstacles) {
    obstacle.show();
    obstacle.update();

    // Check for collision with unicorn
    if (unicorn.hits(obstacle)) {
      gameOver();
    }
  }

  // Remove off-screen treats and obstacles
  treats = treats.filter(treat => !treat.offscreen());
  obstacles = obstacles.filter(obstacle => !obstacle.offscreen());

  // Spawn new treats and obstacles randomly
  if (random(1) < 0.02) {
    treats.push(new Treat());
  }
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  // Display score
  fill(0);
  textSize(20);
  text('Score: ' + score, 10, 30);
}

function keyPressed() {
  // Move unicorn using arrow keys
  if (keyCode === LEFT_ARROW || key === 'A') {
    unicorn.move(-5);
  } else if (keyCode === RIGHT_ARROW || key === 'D') {
    unicorn.move(5);
  }
}

function keyReleased() {
  // Stop unicorn movement when keys are released
  unicorn.move(0);
}

function gameOver() {
  noLoop();
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text('Game Over\nScore: ' + score, width / 2, height / 2);
}








