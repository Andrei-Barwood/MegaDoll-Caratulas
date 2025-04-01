let colors = ["#AB3266", "#F5415F", "#F6B8D2", "#BF5D93", "#A02699", "#FD41F8"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#E0DDE3");
  let spacing = 600;
  for (let x = spacing; x < width; x += spacing * 2) {
    for (let y = spacing; y < height; y += spacing * 2) {
      drawAnglesAroundPoint(x, y, spacing);
    }
  }
}

function drawAnglesAroundPoint(x, y, size) {
  let r = size * 0.8;
  let angles = [HALF_PI, HALF_PI, HALF_PI, HALF_PI]; // Cuatro ángulos rectos
  let startAngle = random(TWO_PI);
  let currentAngle = startAngle;
  
  push();
  translate(x, y);
  noStroke();
  
  for (let i = 0; i < angles.length; i++) {
    let c = random(colors);
    fill(c);
    beginShape();
    vertex(0, 0);
    vertex(r * cos(currentAngle), r * sin(currentAngle));
    currentAngle += angles[i];
    vertex(r * cos(currentAngle), r * sin(currentAngle));
    endShape(CLOSE);
  }
  
  pop();
}
