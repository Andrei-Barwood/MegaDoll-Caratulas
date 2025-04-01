function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background('#FAE37D');
}

function draw() {
  // Coordenadas para el centro del cubo
  let centerX = width / 2;
  let centerY = height / 2;
  let size = 500; // Tamaño del cubo
  
  // Dibujar el cubo gigante
  drawCube(centerX, centerY, size);
}

function drawCube(x, y, s) {
  // Puntos del cubo en 3D (proyección ortogonal)
  let p0 = createVector(x - s/2, y - s/2); // Arriba izquierda
  let p1 = createVector(x + s/2, y - s/2); // Arriba derecha
  let p2 = createVector(x + s/2, y + s/2); // Abajo derecha
  let p3 = createVector(x - s/2, y + s/2); // Abajo izquierda
  
  let p4 = createVector(x - s/2 + 150, y - s/2 + 150); // Traslación hacia la derecha
  let p5 = createVector(x + s/2 + 150, y - s/2 + 150);
  let p6 = createVector(x + s/2 + 150, y + s/2 + 150);
  let p7 = createVector(x - s/2 + 150, y + s/2 + 150);
  
  // Dibujar el cubo utilizando ángulos complementarios
  stroke('#995DB1');
  strokeWeight(6);
  noFill();
  
  // Conectar los puntos del cubo
  line(p0.x, p0.y, p1.x, p1.y);
  line(p1.x, p1.y, p2.x, p2.y);
  line(p2.x, p2.y, p3.x, p3.y);
  line(p3.x, p3.y, p0.x, p0.y);
  
  line(p4.x, p4.y, p5.x, p5.y);
  line(p5.x, p5.y, p6.x, p6.y);
  line(p6.x, p6.y, p7.x, p7.y);
  line(p7.x, p7.y, p4.x, p4.y);
  
  line(p0.x, p0.y, p4.x, p4.y);
  line(p1.x, p1.y, p5.x, p5.y);
  line(p2.x, p2.y, p6.x, p6.y);
  line(p3.x, p3.y, p7.x, p7.y);
  
  // Detalles en el cubo usando ángulos complementarios
  stroke('#DB9EE0');
  strokeWeight(4);
  for (let i = 0; i < 4; i++) {
    let angle = PI / 2 * i; // Ángulos complementarios (90 grados)
    let offsetX = cos(angle) * s * 0.5;
    let offsetY = sin(angle) * s * 0.5;
    
    let p8 = createVector(p0.x + offsetX, p0.y + offsetY);
    let p9 = createVector(p1.x + offsetX, p1.y + offsetY);
    
    line(p8.x, p8.y, p9.x, p9.y);
  }
  
  // Añadir efectos sutiles con líneas adicionales
  stroke('#DEB0EE');
  strokeWeight(2);
  for (let i = 0; i < 5; i++) {
    let xOffset = random(-100, 100);
    let yOffset = random(-100, 100);
    let randomAngle = random(TWO_PI);
    
    let endX = p0.x + cos(randomAngle) * s * 0.5 + xOffset;
    let endY = p0.y + sin(randomAngle) * s * 0.5 + yOffset;
    
    line(p0.x, p0.y, endX, endY);
  }
}
