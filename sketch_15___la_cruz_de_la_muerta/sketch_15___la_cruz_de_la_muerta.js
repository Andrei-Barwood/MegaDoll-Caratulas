function setup() {
  createCanvas(3000, 3000, WEBGL); // Lienzo en 3D con el modo WEBGL
  noFill();
  strokeWeight(24);

  // Colores de la paleta
  const color1 = color('#9990F2'); // Primer color
  const color2 = color('#7770B9'); // Segundo color
  const color3 = color('#9995BF'); // Tercer color

  perspective(PI / 3, width / height, 0.1, 10000); // Configuramos la perspectiva

  // Definir la posición de la cámara para ver los objetos en 3D
  rotateX(PI / 4); // Rota ligeramente para ver los objetos en 3D
  rotateY(PI / 4); 

  // Dibujar el primer plano con el primer color de la paleta
  drawPlane(-500, 0, 0, 1000, 1000, 0, color1); 

  // Dibujar el segundo plano con el segundo color de la paleta
  drawPlane(500, 0, 0, 1000, 1000, 0, color2);

  // Dibujar prismas en el centro de la intersección con el tercer color de la paleta
  for (let i = 0; i < 5; i++) {
    let x = random(-200, 200);
    let y = random(-200, 200);
    let z = random(200, 800);
    drawPrism(x, y, z, color3);
  }

  saveCanvas('mi_imagen', 'png'); // Guarda la imagen como 'mi_imagen.png'
}

// Función para dibujar un plano 3D
function drawPlane(x, y, z, w, h, angle, col) {
  push();
  rotateX(angle);
  translate(x, y, z);
  stroke(col);
  beginShape();
  vertex(-w / 2, -h / 2);
  vertex(w / 2, -h / 2);
  vertex(w / 2, h / 2);
  vertex(-w / 2, h / 2);
  endShape(CLOSE);
  pop();
}

// Función para dibujar un prisma 3D
function drawPrism(x, y, z, col) {
  push();
  translate(x, y, z);
  stroke(col);

  // Dibujar las caras del prisma
  beginShape();
  vertex(-50, -50, -50); 
  vertex(50, -50, -50);
  vertex(50, 50, -50);
  vertex(-50, 50, -50);
  endShape(CLOSE);
  
  beginShape();
  vertex(-50, -50, 50);
  vertex(50, -50, 50);
  vertex(50, 50, 50);
  vertex(-50, 50, 50);
  endShape(CLOSE);

  // Conectar las caras para formar el prisma
  line(-50, -50, -50, -50, -50, 50);
  line(50, -50, -50, 50, -50, 50);
  line(50, 50, -50, 50, 50, 50);
  line(-50, 50, -50, -50, 50, 50);

  pop();
}
