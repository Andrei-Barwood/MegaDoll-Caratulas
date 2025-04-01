function setup() {
  createCanvas(3000, 3000);
  background('#287916');
  noStroke();
}

function draw() {
  let colors = ['#61BA4E', '#78D863', '#CAECC4'];
  
  // Dibujar 3 llamas de fuego
  for (let i = 0; i < 3; i++) {
    let x = random(width * 0.3, width * 0.7);
    let y = random(height * 0.5, height * 0.8);
    drawFlame(x, y, colors);
  }

  // Dibujar 12 estrellas
  for (let i = 0; i < 12; i++) {
    let x = random(width);
    let y = random(height * 0.2);
    drawStar(x, y, 30, 60, 5, colors[2]);
  }
}

function drawFlame(x, y, colors) {
  push();
  translate(x, y);
  for (let i = 0; i < 3; i++) {
    fill(colors[i]);
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += PI / 8) {
      let r = 100 + random(-20, 20);
      let px = cos(angle) * r;
      let py = sin(angle) * r * 1.5;
      vertex(px, py);
    }
    endShape(CLOSE);
  }
  pop();
}

function drawStar(x, y, radius1, radius2, npoints, color) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  fill(color);
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
