let colors = ['#E68CE3', '#CB7DD0', '#D8A0D9'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#FEF7FB");  // Fondo blanco
  drawObliqueTiling();  // Llamar a la función para dibujar el teselado oblicuo
}

function drawObliqueTiling() {
  // Crear líneas oblicuas que dividen el lienzo en 12 partes desiguales
  for (let i = 0; i < 12; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    
    // Dibujar la línea oblicua
    strokeWeight(12);
    stroke("#F2E6E9");
    line(x1, y1, x2, y2);
  }
  
  // Llamar a la función para rellenar cada sección con colores
  fillTiles();
}

function fillTiles() {
  let tileColors = [colors[0], colors[1], colors[2]]; // Colores para las piezas
  
  // Rellenar las piezas con colores (el área se divide en 12)
  for (let i = 0; i < 12; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    let x3 = random(width);
    let y3 = random(height);
    let x4 = random(width);
    let y4 = random(height);

    fill(tileColors[i % 3]);
    noStroke();
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    vertex(x4, y4);
    endShape(CLOSE);
  }
}
