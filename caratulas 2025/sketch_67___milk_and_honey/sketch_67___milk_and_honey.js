let colors = ['#E68CE3', '#CB7DD0', '#D8A0D9'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#5F2F7A");  // Fondo blanco
  drawIrregularTiling();  // Llamar a la función para dibujar el teselado irregular
}

function drawIrregularTiling() {
  // Coordenadas para los puntos de las líneas que dividen el lienzo
  let x1 = width / 3;
  let y1 = height / 3;
  let x2 = width / 1.5;
  let y2 = height / 1.5;
  
  // Colores para las 4 piezas
  let tileColors = [colors[0], colors[1], colors[2], colors[0]];

  // Dibujar las 4 piezas del teselado
  drawTile(x1, y1, 0, 0, x2, y1, x1, y2, tileColors[0]); // Pieza 1
  drawTile(x1, y1, x2, y1, x2, y2, x1, y2, tileColors[1]); // Pieza 2
  drawTile(x2, y1, width, y1, width, height, x2, y2, tileColors[2]); // Pieza 3
  drawTile(x1, y2, x2, y2, x2, height, x1, height, tileColors[3]); // Pieza 4
}

// Función para dibujar cada pieza del teselado
function drawTile(x1, y1, x2, y2, x3, y3, x4, y4, color) {
  fill(color);
  noStroke();
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);
  endShape(CLOSE);
  
  // Dibujar líneas perpendiculares dentro de cada pieza
  stroke("#FDF5B7");
  strokeWeight(5);
  line(x1, y1, x1, y3);  // Línea vertical
  line(x1, y1, x3, y1);  // Línea horizontal
}
