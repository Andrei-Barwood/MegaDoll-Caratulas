let colors = ["#785B88", "#B28DC1", "#F6B8D2"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#785B88");
  let spacing = 600;
  for (let x = spacing; x < width; x += spacing * 2) {
    for (let y = spacing; y < height; y += spacing * 2) {
      drawParallelLinesAndAngles(x, y, spacing);
    }
  }
}

function drawParallelLinesAndAngles(x, y, size) {
  let c1 = random(colors);
  let c2 = random(colors);
  noStroke();
  
  push();
  translate(x, y);
  
  let angle1 = random(PI / 6, (5 * PI) / 6); // Primer ángulo aleatorio
  let angle2 = PI - angle1; // Ángulo suplementario
  let r = size * 0.8;
  
  // Primera recta paralela
  stroke(255);
  strokeWeight(4);
  line(-size, -size / 2, size, -size / 2);
  line(-size, size / 2, size, size / 2);
  
  // Transversal
  line(0, -size, 0, size);
  noStroke();
  
  // Primer ángulo interno consecutivo
  fill(c1);
  beginShape();
  vertex(0, -size / 2);
  vertex(r * cos(0), -size / 2 + r * sin(0));
  vertex(r * cos(angle1), -size / 2 + r * sin(angle1));
  endShape(CLOSE);
  
  // Segundo ángulo interno consecutivo
  fill(c2);
  beginShape();
  vertex(0, size / 2);
  vertex(r * cos(PI), size / 2 + r * sin(PI));
  vertex(r * cos(angle1 + angle2), size / 2 + r * sin(angle1 + angle2));
  endShape(CLOSE);
  
  pop();
}
