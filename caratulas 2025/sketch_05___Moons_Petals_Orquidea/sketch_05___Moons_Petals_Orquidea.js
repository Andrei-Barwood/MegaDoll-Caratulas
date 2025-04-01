function setup() {
  createCanvas(3000, 3000);
  angleMode(DEGREES);
  noStroke();
}

function draw() {
  background("#5F4929"); // Fondo oscuro
  translate(width / 2, height / 2); // Centrar la flor

  let numPetals = 8; // Número de pétalos (fases lunares)
  let petalSize = 960;
  let radius = 150;

  for (let i = 0; i < numPetals; i++) {
    let angle = map(i, 0, numPetals, 0, 360);
    let x = radius * cos(angle);
    let y = radius * sin(angle);

    push();
    translate(x, y);
    rotate(angle);

    // Dibuja el pétalo (fase lunar)
    fill(200); // Color claro para la luna
    ellipse(0, 0, petalSize, petalSize); // Luna llena

    // Simula las fases lunares con elipses oscuras
    if (i % 2 === 0) {
      fill("#EBE68E"); // Oscuro para simular la sombra
      ellipse(petalSize / 4, 0, petalSize / 2, petalSize); // Simula cuarto creciente/menguante
    } else {
      fill("#C2A063");
      ellipse(-petalSize / 4, 0, petalSize / 2, petalSize);
    }

    pop();
  }

  // Centro de la flor
  fill("#277914"); // Centro amarillo
  ellipse(0, 0, 50, 50);
}
