let colors = ['#D085D0', '#44B1CE', '#8CDEE4'];  // Colores definidos
let angle = 1.257;  // Ángulo complementario en radianes (72°)

function setup() {
  createCanvas(3000, 3000, WEBGL);  // Crear un lienzo 3D
}

function draw() {
  background("#50CDA5");  // Fondo negro

  // Rotar la escena en los ejes X y Y utilizando el ángulo complementario
  rotateX(angle);
  rotateY(angle);

  // Dibujar un féretro 3D (una caja con tapa inclinada)
  push();
  fill(colors[0]);
  stroke("#F2E6E9");
  strokeWeight(2);
  
  // Cuerpo del féretro (un prisma rectangular)
  beginShape();
  vertex(-150, -50, -50);  // Esquina inferior izquierda frontal
  vertex(150, -50, -50);   // Esquina inferior derecha frontal
  vertex(150, 100, -50);   // Esquina superior derecha frontal
  vertex(-150, 100, -50);  // Esquina superior izquierda frontal
  endShape(CLOSE);

  beginShape();
  vertex(-150, -50, 50);   // Esquina inferior izquierda trasera
  vertex(150, -50, 50);    // Esquina inferior derecha trasera
  vertex(150, 100, 50);    // Esquina superior derecha trasera
  vertex(-150, 100, 50);   // Esquina superior izquierda trasera
  endShape(CLOSE);

  beginShape();
  vertex(-150, -50, -50);  // Frontal izquierdo
  vertex(-150, -50, 50);   // Trasero izquierdo
  vertex(-150, 100, 50);   // Superior izquierdo
  vertex(-150, 100, -50);  // Superior izquierdo
  endShape(CLOSE);

  beginShape();
  vertex(150, -50, -50);   // Frontal derecho
  vertex(150, -50, 50);    // Trasero derecho
  vertex(150, 100, 50);    // Superior derecho
  vertex(150, 100, -50);   // Superior derecho
  endShape(CLOSE);

  beginShape();
  vertex(-150, -50, -50);  // Parte inferior frontal izquierdo
  vertex(150, -50, -50);   // Parte inferior frontal derecho
  vertex(150, -50, 50);    // Parte inferior trasero derecho
  vertex(-150, -50, 50);   // Parte inferior trasero izquierdo
  endShape(CLOSE);

  beginShape();
  vertex(-150, 100, -50);  // Parte superior frontal izquierdo
  vertex(150, 100, -50);   // Parte superior frontal derecho
  vertex(150, 100, 50);    // Parte superior trasero derecho
  vertex(-150, 100, 50);   // Parte superior trasero izquierdo
  endShape(CLOSE);
  
  // Tapa del féretro (inclinada)
  fill(colors[1]);
  beginShape();
  vertex(-150, 100, -50);  // Esquina inferior izquierda frontal
  vertex(150, 100, -50);   // Esquina inferior derecha frontal
  vertex(200, 200, -50);   // Esquina superior derecha trasera (inclinada)
  vertex(-200, 200, -50);  // Esquina superior izquierda trasera (inclinada)
  endShape(CLOSE);

  // Tapa trasera del féretro
  fill(colors[2]);
  beginShape();
  vertex(-150, 100, 50);   // Esquina inferior izquierda frontal
  vertex(150, 100, 50);    // Esquina inferior derecha frontal
  vertex(200, 200, 50);    // Esquina superior derecha trasera (inclinada)
  vertex(-200, 200, 50);   // Esquina superior izquierda trasera (inclinada)
  endShape(CLOSE);

  pop();

  // Rotar para una animación fluida
  angle += 0.01;
}
