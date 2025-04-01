let colors = ["#CEC8D1", "#EFEDED", "#BFBAC2", "#E0DDE3"];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background("#C4FBB0");
  let spacing = 600;
  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      drawAdjacentAngles(x, y, spacing);
    }
  }
}

function drawAdjacentAngles(x, y, size) {
  let c1 = random(colors);
  let c2 = random(colors);
  let c3 = random(colors);
  noStroke();
  
  push();
  translate(x, y);
  
  let angle1 = random(PI / 6, (5 * PI) / 6); // Primer ángulo aleatorio
  let angle2 = PI - angle1; // Ángulo suplementario
  
  let r = size * 0.8;
  
  // Primer ángulo
  fill(c1);
  beginShape();
  vertex(0, 0);
  vertex(r * cos(0), r * sin(0));
  vertex(r * cos(angle1), r * sin(angle1));
  endShape(CLOSE);
  
  // Segundo ángulo
  fill(c2);
  beginShape();
  vertex(0, 0);
  vertex(r * cos(angle1), r * sin(angle1));
  vertex(r * cos(angle1 + angle2), r * sin(angle1 + angle2));
  endShape(CLOSE);
  
  // Tercer polígono opcional
  if (random() < 0.5) {
    fill(c3);
    beginShape();
    vertex(0, 0);
    vertex(r * cos(angle1 + angle2), r * sin(angle1 + angle2));
    vertex(r * cos(TWO_PI), r * sin(TWO_PI));
    endShape(CLOSE);
  }
  
  pop();
}
