let colors = ['#C671D0', '#DE9FE2', '#BE62C8'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background(255);  // Fondo blanco
  drawParallelLines();  // Llamar a la función para dibujar las rectas paralelas
}

function drawParallelLines() {
  // Definir la cantidad de rectas paralelas y su separación
  let numLines = 3;
  let step = height / numLines;  // Espaciado entre las rectas
  
  // Dibujar las rectas paralelas
  for (let i = 0; i < numLines; i++) {
    let yPosition = i * step;
    
    // Dibujar la recta paralela
    stroke(0);
    strokeWeight(3);
    line(0, yPosition, width, yPosition);  // Recta horizontal
  }
  
  // Rellenar las áreas entre las rectas con colores
  fillTiles(step);
}

function fillTiles(step) {
  let tileColors = [colors[0], colors[1], colors[2]];  // Colores para las piezas
  
  // Rellenar las áreas entre las rectas paralelas con colores
  for (let i = 0; i < 3; i++) {
    let yStart = i * step;
    let yEnd = (i + 1) * step;
    
    // Elegir el color para el relleno
    fill(tileColors[i % 3]);
    noStroke();
    
    // Dibujar un rectángulo para cada área entre las rectas
    rect(0, yStart, width, yEnd - yStart);
  }
}
