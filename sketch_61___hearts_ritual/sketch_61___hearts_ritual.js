let colors = ["#EECFE1", "#FEF7FB", "#F2E6E9"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#FEFD96");
  let spacing = 500;
  for (let x = spacing; x < width; x += spacing * 2) {
    for (let y = spacing; y < height; y += spacing * 2) {
      drawCreativePolygon(x, y, spacing);
    }
  }
}

function drawCreativePolygon(x, y, size) {
  let r = size * 0.8;
  let angles = [3.14, 9.42]; // Ángulos en radianes
  let numVertices = int(random(5, 10)); // Número aleatorio de vértices
  let startAngle = random(TWO_PI);
  let currentAngle = startAngle;
  
  push();
  translate(x, y);
  noStroke();
  fill(random(colors));
  beginShape();
  
  for (let i = 0; i < numVertices; i++) {
    let angleOffset = random(angles);
    currentAngle += angleOffset;
    let px = r * cos(currentAngle);
    let py = r * sin(currentAngle);
    vertex(px, py);
  }
  
  endShape(CLOSE);
  
  // Efecto creativo: círculos concéntricos
  noFill();
  stroke(random(colors));
  strokeWeight(3);
  for (let i = 1; i <= 5; i++) {
    ellipse(0, 0, (r / 5) * i, (r / 5) * i);
  }
  
  pop();
}
