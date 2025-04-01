let colors = ["#ACD1D9", "#8EC0CD", "#6EB1B8"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#5C8C27");
  let spacing = 400;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      drawConsecutiveAngles(x, y, spacing);
    }
  }
}

function drawConsecutiveAngles(x, y, size) {
  let c1 = random(colors);
  let c2 = random(colors);
  let c3 = random(colors);
  noStroke();
  
  push();
  translate(x, y);
  
  // Primer ángulo
  fill(c1);
  beginShape();
  vertex(0, 0);
  vertex(size, 0);
  vertex(random(size / 2, size), random(size / 2, size));
  vertex(random(0, size / 2), random(size / 2, size));
  endShape(CLOSE);
  
  // Segundo ángulo (comparten un lado con el primero)
  fill(c2);
  beginShape();
  vertex(0, 0);
  vertex(random(0, size / 2), random(0, size / 2));
  vertex(random(size / 2, size), random(0, size / 2));
  vertex(size, 0);
  endShape(CLOSE);
  
  // Efecto visual: superposición de transparencia
  fill(c3 + "88"); // Color con transparencia
  ellipse(size / 2, size / 2, size * 0.8, size * 0.8);
  
  pop();
}
