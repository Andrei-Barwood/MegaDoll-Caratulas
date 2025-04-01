function setup() {
  createCanvas(3000, 3000); // Ajusta el tamaño según necesites
  angleMode(DEGREES); // Usamos grados para facilitar los cálculos
  noLoop(); // Dibujamos una sola vez
}

function draw() {
  background("#ACC849"); // Fondo gris claro

  let centerX = width / 2;
  let centerY = height / 2;
  let radius = 150; // Radio general de la flor
  let petals = 7; // Número de pétalos
  let petalSize = 80; // Tamaño de los pétalos

  for (let i = 0; i < petals; i++) {
    let angle = map(i, 0, petals, 0, 360); // Ángulo para cada pétalo
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

    push(); // Guarda el estado actual de la transformación
    translate(x, y); // Traslada el origen al centro del pétalo
    rotate(angle); // Rota el pétalo

    // Dibuja el pétalo (un triángulo o forma similar)
    fill("#D2EA91"); // Color aleatorio para cada pétalo
    noStroke();
    triangle(0, 0, petalSize, petalSize / 2, petalSize / 2, petalSize);

    pop(); // Restaura el estado anterior de la transformación
  }

  // Centro de la flor (un círculo)
  fill("#9AA596"); // Color naranja para el centro
  strokeWeight(12);
  stroke("#A4C040");
  ellipse(centerX, centerY, 50, 50);
}
