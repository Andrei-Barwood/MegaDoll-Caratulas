let colors = ['#3D9DC4', '#48BAA9', '#7A9BDE'];  // Colores definidos
let angle1 = 0.785;  // Primer ángulo en radianes
let angle2 = 2.35;   // Segundo ángulo en radianes

function setup() {
  createCanvas(3000, 3000, WEBGL);  // Crear un lienzo 3D
}

function draw() {
  background("#F2E6E9");  // Fondo negro

  // Rotar la escena en los ejes X, Y, Z utilizando los ángulos dados
  rotateX(angle1);
  rotateY(angle2);

  // Dibujar un polígono (un cubo como ejemplo)
  push();
  fill(colors[0]);
  stroke(255);
  strokeWeight(2);
  beginShape();
  vertex(-100, -100, -100);
  vertex(100, -100, -100);
  vertex(100, 100, -100);
  vertex(-100, 100, -100);
  endShape(CLOSE);

  beginShape();
  vertex(-100, -100, 100);
  vertex(100, -100, 100);
  vertex(100, 100, 100);
  vertex(-100, 100, 100);
  endShape(CLOSE);

  beginShape();
  vertex(-100, -100, -100);
  vertex(-100, -100, 100);
  vertex(-100, 100, 100);
  vertex(-100, 100, -100);
  endShape(CLOSE);

  beginShape();
  vertex(100, -100, -100);
  vertex(100, -100, 100);
  vertex(100, 100, 100);
  vertex(100, 100, -100);
  endShape(CLOSE);

  beginShape();
  vertex(-100, -100, -100);
  vertex(100, -100, -100);
  vertex(100, -100, 100);
  vertex(-100, -100, 100);
  endShape(CLOSE);

  beginShape();
  vertex(-100, 100, -100);
  vertex(100, 100, -100);
  vertex(100, 100, 100);
  vertex(-100, 100, 100);
  endShape(CLOSE);
  pop();

  // Rotar para una animación fluida
  angle1 += 0.01;
  angle2 += 0.01;
}
