let colors = ['#FDF5B7', '#FDD68F', '#FAC18A'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#E9BF6E");  // Fondo blanco
  drawObliqueLinesFromExteriorPoint();  // Llamar a la función para dibujar las líneas oblicuas desde un punto exterior
}

function drawObliqueLinesFromExteriorPoint() {
  // Dividir el plano en tres partes (con líneas oblicuas desde un punto exterior)
  
  let baseX1 = width / 3;  // Coordenada X de la primera línea
  let baseY1 = height / 2; // Coordenada Y de la primera línea
  let baseX2 = 2 * width / 3;  // Coordenada X de la segunda línea
  let baseY2 = height / 2; // Coordenada Y de la segunda línea

  // El punto exterior desde donde se van a trazar las líneas oblicuas
  let exteriorX = width / 4;
  let exteriorY = height / 4;

  // Dibujar la recta base
  stroke("#FFE398");
  strokeWeight(3);
  line(baseX1, baseY1, baseX2, baseY2);

  // Dibujar líneas oblicuas desde el punto exterior a la recta base
  for (let i = 0; i < 10; i++) {
    // Cálculo de las coordenadas de las líneas oblicuas
    let angle = random(-PI / 4, PI / 4);  // Ángulo aleatorio para las oblicuas
    let length = random(200, 800);  // Longitud aleatoria de las oblicuas
    
    // Cálculo de las nuevas coordenadas de los puntos de las oblicuas
    let xEnd = exteriorX + length * cos(angle);
    let yEnd = exteriorY + length * sin(angle);
    
    // Dibujar las oblicuas
    strokeWeight(2);
    stroke("#6E3B7F");
    line(exteriorX, exteriorY, xEnd, yEnd);
  }

  // Colorear las áreas formadas por las líneas oblicuas
  fillTiles(baseX1, baseY1, baseX2, baseY2, exteriorX, exteriorY);
}

function fillTiles(baseX1, baseY1, baseX2, baseY2, exteriorX, exteriorY) {
  let tileColors = [colors[0], colors[1], colors[2]]; // Colores para las piezas
  
  // Rellenar áreas entre las rectas oblicuas con colores
  for (let i = 0; i < 3; i++) {
    let x1 = random(baseX1, baseX2);
    let y1 = random(baseY1, baseY2);
    let x2 = random(baseX1, baseX2);
    let y2 = random(baseY1, baseY2);
    
    // Elegir el color para el relleno
    fill(tileColors[i % 3]);
    noStroke();
    
    // Dibujar un triángulo (como área coloreada)
    beginShape();
    vertex(exteriorX, exteriorY);
    vertex(x1, y1);
    vertex(x2, y2);
    endShape(CLOSE);
  }
}
