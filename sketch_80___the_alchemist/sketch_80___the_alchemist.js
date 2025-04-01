function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background('#F1F1F1');
}

function draw() {
  // Dibujar figuras gigantes y bisectrices
  for (let i = 0; i < 30; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    // Dibujar líneas aleatorias para formar un ángulo
    drawBisector(x1, y1, x2, y2);
  }
}

function drawBisector(x1, y1, x2, y2) {
  let angle = atan2(y2 - y1, x2 - x1);
  
  // Crear un ángulo aleatorio para generar una bisectriz
  let bisectorAngle = angle + random(-PI/2, PI/2); 
  
  // Puntos de la bisectriz
  let length = 1000; // Longitud de la bisectriz
  let x3 = x1 + cos(bisectorAngle) * length;
  let y3 = y1 + sin(bisectorAngle) * length;
  let x4 = x2 + cos(bisectorAngle) * length;
  let y4 = y2 + sin(bisectorAngle) * length;
  
  // Dibujar la bisectriz
  stroke('#9C9AAD');
  strokeWeight(4);
  line(x3, y3, x4, y4);
  
  // Detalles adicionales en las bisectrices
  stroke('#9291A3');
  strokeWeight(2);
  for (let i = 0; i < 10; i++) {
    let xOffset = random(-50, 50);
    let yOffset = random(-50, 50);
    line(x1 + xOffset, y1 + yOffset, x2 + xOffset, y2 + yOffset);  // Variaciones de líneas
  }
}
