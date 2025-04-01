let colors = ['#FDF5B7', '#FDD68F', '#FAC18A'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  background("#F2E6E9");  // Fondo blanco
  drawReciprocalPerpendicularity();  // Llamar a la función para dibujar el teselado basado en la perpendicularidad
}

function drawReciprocalPerpendicularity() {
  // Definir el número de rectas
  let numLines = 10;
  
  // Dibujar las líneas que representan las relaciones de perpendicularidad recíproca
  for (let i = 0; i < numLines; i++) {
    // Definir la pendiente y las intersecciones
    let slope1 = random(1, 5);  // Pendiente de la primera recta
    let slope2 = 1 / slope1;  // Pendiente recíproca de la segunda recta
    
    // Generar coordenadas aleatorias para los puntos de las rectas
    let x1 = random(width);
    let y1 = random(height);
    let x2 = x1 + 500;  // Hacer la línea más larga
    let y2 = y1 + slope1 * (x2 - x1);
    
    let x3 = random(width);
    let y3 = random(height);
    let x4 = x3 + 500;
    let y4 = y3 + slope2 * (x4 - x3);
    
    // Dibujar las dos rectas perpendiculares
    stroke("#FEFD96");
    strokeWeight(3);
    line(x1, y1, x2, y2);  // Primera recta
    line(x3, y3, x4, y4);  // Segunda recta
    
    // Rellenar los espacios entre las líneas con colores
    fill(colors[i % 3]);
    noStroke();
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x4, y4);
    vertex(x3, y3);
    endShape(CLOSE);
  }
}
