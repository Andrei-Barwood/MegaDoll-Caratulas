function setup() {
  createCanvas(3000, 3000);
  background('#AD3A95'); // Color de fondo

  noStroke();
  
  // Partes del féretro
  fill('#6E225F'); // Color oscuro para el contorno
  beginShape();
  vertex(1100, 700);
  vertex(1900, 700);
  vertex(2200, 1500);
  vertex(1600, 2500);
  vertex(1400, 2500);
  vertex(800, 1500);
  endShape(CLOSE);
  
  fill('#93307F'); // Color principal del féretro
  beginShape();
  vertex(1150, 750);
  vertex(1850, 750);
  vertex(2100, 1500);
  vertex(1550, 2450);
  vertex(1450, 2450);
  vertex(900, 1500);
  endShape(CLOSE);

  // Detalles del féretro (bordes internos)
  stroke('#894278');
  strokeWeight(20);
  noFill();
  beginShape();
  vertex(1150, 750);
  vertex(1850, 750);
  vertex(2100, 1500);
  vertex(1550, 2450);
  vertex(1450, 2450);
  vertex(900, 1500);
  endShape(CLOSE);
  
  // Cruz en el centro del féretro
  fill('#81BB1E');
  noStroke();
  rect(1400, 1300, 200, 500);
  rect(1300, 1500, 400, 100);
}
