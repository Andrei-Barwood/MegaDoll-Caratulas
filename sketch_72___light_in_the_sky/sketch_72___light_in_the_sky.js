let colors = ['#C671D0', '#DE9FE2', '#BE62C8'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#EECFE1");  // Fondo blanco
  drawLinesAndParallels();  // Llamar a la función para dibujar las rectas y sus paralelas
}

function drawLinesAndParallels() {
  // Definir los puntos y las rectas que se cortarán
  let x1 = width / 4;
  let y1 = height / 4;
  let x2 = 3 * width / 4;
  let y2 = height / 4;
  
  let x3 = width / 4;
  let y3 = height / 4;
  let x4 = width / 4;
  let y4 = 3 * height / 4;
  
  // Generar las rectas principales
  stroke("#FFEFBC");
  strokeWeight(3);
  line(x1, y1, x2, y2);  // Recta 1 horizontal
  line(x3, y3, x4, y4);  // Recta 2 vertical
  
  // Generar las paralelas a las rectas
  let numParallels = 10;  // Número de paralelas
  
  // Paralelas horizontales a la recta 1
  for (let i = 1; i < numParallels; i++) {
    let offset = i * (height / numParallels);
    line(0, offset, width, offset);  // Paralela horizontal
  }

  // Paralelas verticales a la recta 2
  for (let i = 1; i < numParallels; i++) {
    let offset = i * (width / numParallels);
    line(offset, 0, offset, height);  // Paralela vertical
  }
  
  // Rellenar las áreas entre las rectas con colores
  fillTiles(x1, y1, x2, y2, x3, y3);
}

function fillTiles(x1, y1, x2, y2, x3, y3) {
  let tileColors = [colors[0], colors[1], colors[2]];  // Colores para las piezas
  
  // Rellenar las áreas entre las rectas con colores
  for (let i = 0; i < 3; i++) {
    let xStart = random(x1, x2);
    let yStart = random(y1, y2);
    let xEnd = random(x3, x2);
    let yEnd = random(y3, y2);
    
    // Elegir el color para el relleno
    fill(tileColors[i % 3]);
    noStroke();
    
    // Dibujar un rectángulo para cada área
    beginShape();
    vertex(xStart, yStart);
    vertex(xEnd, yEnd);
    vertex(xEnd, y2);
    vertex(xStart, y2);
    endShape(CLOSE);
  }
}
