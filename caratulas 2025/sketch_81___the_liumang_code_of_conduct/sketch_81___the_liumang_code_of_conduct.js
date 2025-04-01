function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background('#3F5085');
}

function draw() {
  // Generar patrones con ángulos adyacentes aleatorios
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(200, 500); // Tamaño de las figuras grandes
    let angleOffset = random(PI / 4, PI / 2); // Variar los ángulos adyacentes
    
    // Dibujar una figura con ángulos adyacentes
    drawAngleShape(x, y, size, angleOffset);
  }
}

function drawAngleShape(x, y, size, angleOffset) {
  let baseAngle = random(TWO_PI); // Ángulo base aleatorio para las figuras
  
  // Calcular los puntos de los ángulos adyacentes
  let x1 = x + cos(baseAngle) * size;
  let y1 = y + sin(baseAngle) * size;
  let x2 = x + cos(baseAngle + angleOffset) * size;
  let y2 = y + sin(baseAngle + angleOffset) * size;
  
  // Colores y grosor
  stroke('#2D3558');
  strokeWeight(6);
  noFill();
  
  // Dibujar las líneas que forman los ángulos adyacentes
  line(x, y, x1, y1);
  line(x, y, x2, y2);
  
  // Detalles de las líneas adyacentes
  stroke('#43558C');
  strokeWeight(3);
  line(x1, y1, x2, y2); // Conectar las dos líneas adyacentes
  
  // Crear más detalles alrededor del vértice
  for (let i = 0; i < 5; i++) {
    let offsetX = random(-50, 50);
    let offsetY = random(-50, 50);
    let randomAngle = random(TWO_PI);
    let endX = x + cos(randomAngle) * size * 0.5 + offsetX;
    let endY = y + sin(randomAngle) * size * 0.5 + offsetY;
    
    stroke('#233250');
    line(x, y, endX, endY); // Líneas adicionales en ángulos aleatorios
  }
}
