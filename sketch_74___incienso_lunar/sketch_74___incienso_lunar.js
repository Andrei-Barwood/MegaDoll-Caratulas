let colors = ['#12162C', '#363E7A', '#090E1D', '#282D5A'];  // Paleta de colores

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  frameRate(30);  // Ajustar la tasa de fotogramas
  noStroke();
}

function draw() {
  background("#282D5A");  // Fondo blanco
  
  // Dibujar la base de la fogata (troncos)
  drawLogs();
  
  // Dibujar las llamas de la fogata
  drawFlames();
}

function drawLogs() {
  // Dibujar troncos
  fill(colors[3]);
  rect(width / 2 - 200, height - 300, 400, 40);  // Tronco horizontal
  fill(colors[2]);
  rect(width / 2 - 180, height - 260, 40, 40);  // Tronco vertical (en medio)
  rect(width / 2 + 140, height - 260, 40, 40);  // Tronco vertical (en lado derecho)
}

function drawFlames() {
  // Crear una animación de llamas
  let flameHeight = random(150, 300);
  let flameWidth = random(80, 150);
  
  // Dibujar la primera llama
  fill(colors[0]);
  beginShape();
  vertex(width / 2 - flameWidth / 2, height - 300); // Punto de inicio de la llama
  for (let i = 0; i < 5; i++) {
    let x = random(width / 2 - flameWidth / 2, width / 2 + flameWidth / 2);
    let y = height - 300 - random(100, flameHeight); // Controlar la altura de la llama
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Dibujar la segunda llama
  fill(colors[1]);
  beginShape();
  vertex(width / 2 - flameWidth / 3, height - 300); // Punto de inicio de la llama
  for (let i = 0; i < 5; i++) {
    let x = random(width / 2 - flameWidth / 3, width / 2 + flameWidth / 3);
    let y = height - 300 - random(100, flameHeight); // Controlar la altura de la llama
    vertex(x, y);
  }
  endShape(CLOSE);
  
  // Dibujar la tercera llama
  fill(colors[2]);
  beginShape();
  vertex(width / 2 - flameWidth / 4, height - 300); // Punto de inicio de la llama
  for (let i = 0; i < 5; i++) {
    let x = random(width / 2 - flameWidth / 4, width / 2 + flameWidth / 4);
    let y = height - 300 - random(100, flameHeight); // Controlar la altura de la llama
    vertex(x, y);
  }
  endShape(CLOSE);
}
