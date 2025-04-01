function setup() {
  createCanvas(3000, 3000);
  noFill();
  stroke("#ADD9D5");
  noLoop(); // Evita que se dibuje repetidamente
}

function draw() {
  background("#EB575A"); // Fondo negro para resaltar las líneas

  // Generar una mezcla aleatoria de líneas rectas y curvas
  let numSegments = 20; // Número de segmentos a dibujar

  for (let i = 0; i < numSegments; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);

    // Decide aleatoriamente si dibujar una línea recta o una curva
    if (random(1) > 0.5) {
      // Línea recta
      fill("#FFFFFF");
      line(x1, y1, x2, y2);
    } else {
      // Curva de Bézier
      let x3 = random(width);
      let y3 = random(height);
      let x4 = random(width);
      let y4 = random(height);
      bezier(x1, y1, x3, y3, x4, y4, x2, y2);
    }
  }
}
