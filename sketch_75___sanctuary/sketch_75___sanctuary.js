function setup() {
  createCanvas(3000, 3000, WEBGL);
  noLoop();
  angleMode(DEGREES);
  stroke("#7796EC");
  strokeWeight(12);
}

function draw() {
  background('#0C6182');
  
  // Configuración de luces
  //directionalLight(255, 255, 255, 0, -1, 0);
  
  // Colores
  let color1 = color('#00B6A3');
  let color2 = color('#67E6D0');
  
  // Giro para la visualización
  rotateX(30);
  rotateZ(30);
  
  // Semi pirámide (base de un triángulo rectángulo)
  beginShape();
  fill(color1);
  vertex(0, 0, 0); // Base
  vertex(400, 0, 0); // Base
  vertex(0, 400, 400); // Punta
  endShape(CLOSE);
  
  beginShape();
  fill(color1);
  vertex(0, 0, 0); // Base
  vertex(0, 400, 400); // Punta
  vertex(-400, 0, 0); // Base
  endShape(CLOSE);
  
  beginShape();
  fill(color1);
  vertex(400, 0, 0); // Base
  vertex(0, 400, 400); // Punta
  vertex(400, 0, 400); // Base
  endShape(CLOSE);
  
  beginShape();
  fill(color1);
  vertex(-400, 0, 0); // Base
  vertex(0, 400, 400); // Punta
  vertex(-400, 0, 400); // Base
  endShape(CLOSE);
  
  // Rombo en 3D dentro de la pirámide
  push();
  translate(0, 0, 200); // Movemos el rombo hacia adentro
  rotateY(45);
  fill(color2);
  beginShape();
  vertex(0, -150, 0);  // Parte superior
  vertex(150, 0, 0);   // Esquina derecha
  vertex(0, 150, 0);   // Parte inferior
  vertex(-150, 0, 0);  // Esquina izquierda
  endShape(CLOSE);
  pop();
}
