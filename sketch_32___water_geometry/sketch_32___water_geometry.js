function setup() {
  createCanvas(3000, 3000);
  background('#37248B'); // Color de fondo

  let colors = ['#6453B9', '#8173CE', '#8F8CF5', '#FFFFFF']; // Paleta de colores
  let spacing = 150; // Espaciado entre los puntos
  
  strokeWeight(24);
  noFill();

  for (let x = 0; x <= width; x += spacing) {
    let y = map(x, 0, width, 0, height); // Asegurar la diagonal
    stroke(random(colors)); // Color aleatorio de la paleta
    point(x, y);
  }
}
