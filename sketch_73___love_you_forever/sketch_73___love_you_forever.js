let colors = ['#12162C', '#363E7A', '#090E1D', '#282D5A'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#363E7A");  // Fondo blanco
  drawPerpendicular();  // Llamar a la función para dibujar la perpendicular
}

function drawPerpendicular() {
  // Definir las coordenadas de los extremos del segmento
  let x1 = width / 4;
  let y1 = height / 2;
  let x2 = 3 * width / 4;
  let y2 = height / 2;

  // Calcular el punto medio del segmento
  let mx = (x1 + x2) / 2;
  let my = (y1 + y2) / 2;

  // Dibujar el segmento
  stroke(colors[0]);
  strokeWeight(4);
  line(x1, y1, x2, y2);

  // Dibujar la perpendicular desde el punto medio
  let slope = -(x2 - x1) / (y2 - y1);  // Calcular la pendiente de la perpendicular
  let angle = atan(slope);  // Obtener el ángulo de la pendiente
  let length = 500;  // Longitud de la perpendicular
  
  let x3 = mx + length * cos(angle + PI / 2);  // Coordenada x del extremo de la perpendicular
  let y3 = my + length * sin(angle + PI / 2);  // Coordenada y del extremo de la perpendicular
  let x4 = mx - length * cos(angle + PI / 2);  // Otro extremo de la perpendicular
  let y4 = my - length * sin(angle + PI / 2);  // Otro extremo de la perpendicular

  // Dibujar la perpendicular
  stroke(colors[1]);
  strokeWeight(4);
  line(x3, y3, x4, y4);
  
  // Rellenar áreas alrededor de las líneas con colores
  fillTiles(x1, y1, x2, y2, mx, my);
}

function fillTiles(x1, y1, x2, y2, mx, my) {
  let tileColors = [colors[2], colors[3]];  // Colores para las piezas
  
  // Rellenar áreas entre las rectas con colores
  for (let i = 0; i < 2; i++) {
    let xStart = random(x1, x2);
    let yStart = random(y1, y2);
    let xEnd = random(mx, x2);
    let yEnd = random(my, y2);
    
    // Elegir el color para el relleno
    fill(tileColors[i % 2]);
    stroke("#090E1D");
    strokeWeight(12);
    
    // Dibujar un rectángulo para cada área
    beginShape();
    vertex(xStart, yStart);
    vertex(xEnd, yEnd);
    vertex(xEnd, y2);
    vertex(xStart, y2);
    endShape(CLOSE);
  }
}
