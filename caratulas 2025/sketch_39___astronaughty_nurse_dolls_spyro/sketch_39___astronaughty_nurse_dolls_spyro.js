function setup() {
  createCanvas(3000, 3000);
  noLoop(); // Solo dibujar una vez
}

function draw() {
  background("#C5A6D0");

  // Colores de la paleta
  let colors = ['#FD41F8', '#A02699', '#BF5D93', '#AB3266'];

  // Dibuja la elipse gigante (mitad superior del lienzo)
  fill(random(colors));
  noStroke();
  ellipse(width / 2, height / 4, 2000, 1500); // Elipse gigante en la mitad superior

  // Dibuja la pequeña elipse conectada
  fill(random(colors));
  ellipse(width / 2, height / 1.5, 400, 300); // Elipse pequeña en la parte inferior

  // Dibuja la elipse relativamente grande
  fill(random(colors));
  ellipse(width / 2, height / 1.2, 800, 600); // Elipse grande en la parte inferior conectada a la pequeña
}
