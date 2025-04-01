function setup() {
  createCanvas(3000, 3000);
  noFill();
  strokeWeight(3);
  background(0);
  let colors = ['#580D36', '#BC1D75', '#D9539D', '#FCB6DF']; // Los colores proporcionados
  for (let i = 0; i < 50; i++) {  // Generamos 50 pares de ángulos complementarios
    drawComplementaryAngles(random(90), random(colors));
  }
}

function drawComplementaryAngles(angle, color) {
  let x = random(width);
  let y = random(height);
  let radius = 300; // Radio de las líneas
  
  // Primer ángulo (aleatorio)
  let x1 = x + cos(radians(angle)) * radius;
  let y1 = y + sin(radians(angle)) * radius;
  
  // Segundo ángulo (complementario)
  let x2 = x + cos(radians(90 - angle)) * radius;
  let y2 = y + sin(radians(90 - angle)) * radius;
  
  // Dibujamos las líneas con el color aleatorio
  stroke(color);
  line(x, y, x1, y1); // Línea del primer ángulo
  line(x, y, x2, y2); // Línea del segundo ángulo
}
