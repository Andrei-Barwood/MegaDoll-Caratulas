let colors = ['#AEDEFC', '#E599F2', '#F2C4FD'];  // Paleta de colores
let angle = 0;  // Ángulo para la animación de las luces

function setup() {
  createCanvas(3000, 3000);  // Lienzo de 3000x3000
  noStroke();  // Desactivar el contorno de las formas
}

function draw() {
  background("#F2E6E9");  // Fondo oscuro para contrastar las luces

  // Efectos de luces polares y voces (líneas suaves que fluyen)
  drawPolarLights();
  
  // Dibujar las palabras "Polar Light Voices" de forma fluida
  drawText();

  // Incrementar el ángulo para la animación
  angle += 0.01;
}

// Función para crear las luces polares
function drawPolarLights() {
  push();
  translate(width / 2, height / 2);  // Mover al centro del lienzo
  for (let i = 0; i < 10; i++) {
    let alpha = map(i, 0, 10, 50, 255);
    let x = cos(angle + i * TWO_PI / 10) * 600;
    let y = sin(angle + i * TWO_PI / 10) * 600;
    let size = map(i, 0, 10, 100, 300);

    fill(colors[i % 3] + hex(alpha, 2));  // Cambiar color con opacidad
    ellipse(x, y, size, size);  // Dibujar círculos de luz
  }
  pop();
}
