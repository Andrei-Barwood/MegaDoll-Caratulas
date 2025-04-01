let colors = ['#CBF5C0', '#80A4EE', '#AEDEFC'];  // Colores definidos

function setup() {
  createCanvas(3000, 3000, WEBGL);  // Crear un lienzo 3D
}

function draw() {
  background("#FEFD96");  // Fondo blanco

  // Rotar la escena para tener una vista 3D interesante
  rotateX(PI / 6);
  rotateY(PI / 4);

  // Dibujar el cuerpo de la bañera
  push();
  fill(colors[0]);  // Color del cuerpo de la bañera
  stroke("#AEDEFC");
  strokeWeight(2);
  beginShape();
  vertex(-400, 100, -200);  // Esquina inferior izquierda frontal
  vertex(400, 100, -200);   // Esquina inferior derecha frontal
  vertex(400, 100, 200);    // Esquina inferior derecha trasera
  vertex(-400, 100, 200);   // Esquina inferior izquierda trasera
  endShape(CLOSE);

  // Laterales de la bañera
  beginShape();
  vertex(-400, 100, -200);   // Frente izquierdo
  vertex(-400, 100, 200);    // Frente izquierdo trasero
  vertex(-400, -50, 200);    // Parte inferior izquierda trasera
  vertex(-400, -50, -200);   // Parte inferior izquierda frontal
  endShape(CLOSE);

  beginShape();
  vertex(400, 100, -200);    // Frente derecho
  vertex(400, 100, 200);     // Frente derecho trasero
  vertex(400, -50, 200);     // Parte inferior derecha trasera
  vertex(400, -50, -200);    // Parte inferior derecha frontal
  endShape(CLOSE);

  // Fondo de la bañera
  beginShape();
  vertex(-400, -50, -200);   // Parte inferior izquierda frontal
  vertex(400, -50, -200);    // Parte inferior derecha frontal
  vertex(400, -50, 200);     // Parte inferior derecha trasera
  vertex(-400, -50, 200);    // Parte inferior izquierda trasera
  endShape(CLOSE);
  pop();

  // Dibujar el agua dentro de la bañera
  push();
  fill(colors[1]);  // Color del agua
  noStroke();
  beginShape();
  vertex(-380, 90, -180);   // Frente izquierdo
  vertex(380, 90, -180);    // Frente derecho
  vertex(380, 90, 180);     // Parte trasera derecha
  vertex(-380, 90, 180);    // Parte trasera izquierda
  endShape(CLOSE);
  pop();

  // Borde superior de la bañera (más redondeado)
  push();
  fill(colors[2]);  // Color del borde superior
  noStroke();
  beginShape();
  vertex(-400, 100, -200);   // Parte frontal izquierda
  vertex(400, 100, -200);    // Parte frontal derecha
  vertex(380, 110, -180);    // Parte superior derecha
  vertex(-380, 110, -180);   // Parte superior izquierda
  endShape(CLOSE);

  beginShape();
  vertex(-400, 100, 200);    // Parte trasera izquierda
  vertex(400, 100, 200);     // Parte trasera derecha
  vertex(380, 110, 180);     // Parte superior derecha
  vertex(-380, 110, 180);    // Parte superior izquierda
  endShape(CLOSE);
  pop();
}
