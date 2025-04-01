let colors = ['#E68CE3', '#CB7DD0', '#D8A0D9'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000, WEBGL);  // Lienzo 3D de 3000x3000
  noStroke();
}

function draw() {
  background("#5F2F7A");  // Fondo blanco

  // Rotar la escena para una vista 3D
  rotateX(PI / 4);
  rotateY(PI / 4);

  // Dibujar la pirámide invertida
  drawInvertedPyramid();
}

// Función para dibujar la pirámide invertida
function drawInvertedPyramid() {
  // La base de la pirámide
  fill(colors[0]);
  beginShape();
  vertex(-400, -200, -400);   // Esquina inferior izquierda frontal
  vertex(400, -200, -400);    // Esquina inferior derecha frontal
  vertex(400, -200, 400);     // Esquina inferior derecha trasera
  vertex(-400, -200, 400);    // Esquina inferior izquierda trasera
  endShape(CLOSE);

  // Caras laterales (triángulos)
  fill(colors[1]);
  beginShape();
  vertex(-400, -200, -400);   // Esquina inferior izquierda frontal
  vertex(0, 200, 0);          // Vértice superior
  vertex(400, -200, -400);    // Esquina inferior derecha frontal
  endShape(CLOSE);

  fill(colors[2]);
  beginShape();
  vertex(400, -200, -400);    // Esquina inferior derecha frontal
  vertex(0, 200, 0);          // Vértice superior
  vertex(400, -200, 400);     // Esquina inferior derecha trasera
  endShape(CLOSE);

  fill(colors[0]);
  beginShape();
  vertex(400, -200, 400);     // Esquina inferior derecha trasera
  vertex(0, 200, 0);          // Vértice superior
  vertex(-400, -200, 400);    // Esquina inferior izquierda trasera
  endShape(CLOSE);

  fill(colors[1]);
  beginShape();
  vertex(-400, -200, 400);    // Esquina inferior izquierda trasera
  vertex(0, 200, 0);          // Vértice superior
  vertex(-400, -200, -400);   // Esquina inferior izquierda frontal
  endShape(CLOSE);
}
