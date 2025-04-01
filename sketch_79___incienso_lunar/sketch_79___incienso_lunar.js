let smokeVertices = [];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  // Fondo oscuro
  background('#363E7A');
  
  // Base del incienso (rectángulo)
  fill('#0C6182');
  noStroke();
  rect(1450, 2500, 100, 300); // Base del incienso
  
  // Humo del incienso (curvas dinámicas utilizando vértices)
  stroke('#67E6D0');
  strokeWeight(5);
  noFill();
  
  // Crear un conjunto de vértices para el humo
  smokeVertices = [];
  let numVertices = 10; // Número de puntos de control
  let startX = 1500;
  let startY = 2300; // Empezar desde la punta del incienso
  
  // Llenar los vértices con posiciones aleatorias para crear el humo
  for (let i = 0; i < numVertices; i++) {
    let xOffset = random(-50, 50); // Aleatorizar el desplazamiento en X
    let yOffset = -i * 70 + random(-100, 100); // Aleatorizar el desplazamiento en Y
    smokeVertices.push(createVector(startX + xOffset, startY + yOffset));
  }

  // Dibujar el humo utilizando líneas curvas entre los vértices
  beginShape();
  vertex(smokeVertices[0].x, smokeVertices[0].y);
  for (let i = 1; i < smokeVertices.length; i++) {
    let midPoint = createVector((smokeVertices[i-1].x + smokeVertices[i].x) / 2, (smokeVertices[i-1].y + smokeVertices[i].y) / 2);
    bezierVertex(smokeVertices[i-1].x, smokeVertices[i-1].y, midPoint.x, midPoint.y, smokeVertices[i].x, smokeVertices[i].y);
  }
  endShape();
  
  // Detalles adicionales en el humo
  stroke('#7796EC');
  strokeWeight(3);
  for (let i = 1; i < smokeVertices.length - 1; i++) {
    line(smokeVertices[i].x, smokeVertices[i].y, smokeVertices[i+1].x, smokeVertices[i+1].y);
  }
  
  // Agregar sutiles efectos al humo
  fill('#67E6D0');
  noStroke();
  for (let i = 0; i < smokeVertices.length; i++) {
    ellipse(smokeVertices[i].x, smokeVertices[i].y, 15, 15); // Efectos suaves en el humo
  }
}
