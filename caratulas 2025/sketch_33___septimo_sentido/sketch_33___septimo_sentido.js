function setup() {
  createCanvas(3000, 3000);
  background('#FA99CA'); // Color de fondo

  let colors = ['#FFCBE4', '#E189B5', '#E3B6CC', '#A761F4', '#C697F4', '#BF8FF5']; // Paleta de colores
  
  strokeWeight(8); // Grosor de las líneas

  for (let i = 0; i < 3; i++) {
    stroke(random(colors)); // Color aleatorio de la paleta
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2);
  }
}
