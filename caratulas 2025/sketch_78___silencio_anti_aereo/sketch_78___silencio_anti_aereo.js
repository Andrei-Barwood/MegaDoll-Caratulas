function setup() {
  createCanvas(3000, 3000);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  // Fondo oscuro (cielo)
  background('#12162C');
  
  // Luna
  fill('#282D5A');
  noStroke();
  ellipse(2500, 500, 500, 500); // Luna en el cielo
  
  // Árbol 1
  drawTree(600, 2300);
  
  // Árbol 2
  drawTree(1000, 2400);
  
  // Árbol 3
  drawTree(1800, 2300);
  
  // Árbol 4
  drawTree(2200, 2500);
}

function drawTree(x, y) {
  // Tronco del árbol (rectángulo)
  fill('#363E7A');
  noStroke();
  rect(x - 40, y - 200, 80, 200); // Tronco
  
  // Hojas del árbol (formas geométricas abstractas, usando triángulos)
  fill('#090E1D');
  triangle(x - 150, y - 200, x + 150, y - 200, x, y - 450);  // Parte inferior de las hojas
  triangle(x - 130, y - 300, x + 130, y - 300, x, y - 550);  // Parte media de las hojas
  triangle(x - 100, y - 400, x + 100, y - 400, x, y - 650);  // Parte superior de las hojas
  
  // Sombra en el suelo (elipse)
  fill(0, 0, 0, 50);
  ellipse(x, y + 100, 200, 80); // Sombra de las hojas sobre el suelo
}
