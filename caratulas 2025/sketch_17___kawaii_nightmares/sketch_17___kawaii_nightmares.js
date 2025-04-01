function setup() {
  createCanvas(3000, 3000);
  background('#132248');
  strokeWeight(5);
}

function draw() {
  let colors = ['#243870', '#652D87', '#EA428B'];
  let points = [];

  // Generar puntos aleatorios para el polígono irregular
  for (let i = 0; i < 8; i++) {
    points.push(createVector(random(width * 0.2, width * 0.8), random(height * 0.2, height * 0.8)));
  }

  // Dibujar el polígono
  fill('#243870');
  stroke('#652D87');
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);

  // Dibujar 3 rectas
  stroke(colors[1]);
  for (let i = 0; i < 3; i++) {
    let p1 = points[int(random(points.length))];
    let p2 = points[int(random(points.length))];
    line(p1.x, p1.y, p2.x, p2.y);
  }

  // Dibujar 6 puntos
  fill(colors[2]);
  noStroke();
  for (let i = 0; i < 6; i++) {
    let p = points[int(random(points.length))];
    ellipse(p.x, p.y, 20, 20);
  }

  // Dibujar 12 semirectas
  stroke(colors[0]);
  for (let i = 0; i < 12; i++) {
    let p = points[int(random(points.length))];
    let angle = random(TWO_PI);
    let endX = p.x + cos(angle) * 500;
    let endY = p.y + sin(angle) * 500;
    line(p.x, p.y, endX, endY);
  }
}
