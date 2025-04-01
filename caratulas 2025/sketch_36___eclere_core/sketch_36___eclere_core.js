function setup() {
  createCanvas(3000, 3000);
  noLoop(); // Evita que se vuelva a dibujar automáticamente
}

function draw() {
  background('#20476B'); // Color de fondo
  
  let colors = ['#3977B8', '#5693CF', '#76ADE5', '#B8E1F0'];
  
  let seg1 = drawSegment(random(300, 2700), random(300, 2700), random(150, 500), colors);
  let seg2 = drawSegment(random(300, 2700), random(300, 2700), random(150, 500), colors);
  let seg3 = drawSegment(random(300, 2700), random(300, 2700), random(150, 500), colors);
  
  drawDoubleLine(seg1.center, seg2.center);
  drawDoubleLine(seg2.center, seg3.center);
}

function drawSegment(x, y, size, colors) {
  let numPoints = int(random(5, 10)); // Número de vértices del polígono
  let angleStep = TWO_PI / numPoints;
  let poly = [];
  
  for (let i = 0; i < numPoints; i++) {
    let angle = i * angleStep;
    let radius = size * random(0.5, 1.2); // Radio variable para irregularidad
    let px = x + cos(angle) * radius;
    let py = y + sin(angle) * radius;
    poly.push(createVector(px, py));
  }
  
  fill(random(colors)); // Color aleatorio de la paleta
  stroke("#82C1DC");
  strokeWeight(3);
  beginShape();
  for (let p of poly) {
    vertex(p.x, p.y);
  }
  endShape(CLOSE);
  
  return { center: createVector(x, y) }; // Devuelve el centro del segmento
}

function drawDoubleLine(p1, p2) {
  stroke('#DFE4E3');
  strokeWeight(5);
  line(p1.x - 10, p1.y - 10, p2.x - 10, p2.y - 10);
  line(p1.x + 10, p1.y + 10, p2.x + 10, p2.y + 10);
}
