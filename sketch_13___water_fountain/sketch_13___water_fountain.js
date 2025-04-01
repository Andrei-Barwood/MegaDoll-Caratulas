function setup() {
  createCanvas(3000, 3000); // Lienzo de 3000x3000
  noFill();
  stroke("#B68145");
  noLoop(); // Evita que se dibuje repetidamente
}

function draw() {
  background("#9AA596"); // Fondo negro para hacer las líneas más visibles

  // Generamos 12 curvas usando Bezier
  for (let i = 0; i < 12; i++) {
    // Variables para controlar el movimiento y ángulos de las curvas
    let angleOffset = TWO_PI / 12 * i;

    // Ajustamos las coordenadas para que las curvas estén centradas y visibles en el lienzo
    let x1 = cos(angleOffset) * 1200 + width / 2;
    let y1 = sin(angleOffset) * 1200 + height / 2;
    let x2 = cos(angleOffset + PI / 6) * 1000 + width / 2;
    let y2 = sin(angleOffset + PI / 6) * 1000 + height / 2;
    let x3 = cos(angleOffset + PI / 3) * 800 + width / 2;
    let y3 = sin(angleOffset + PI / 3) * 800 + height / 2;
    let x4 = cos(angleOffset + PI / 2) * 600 + width / 2;
    let y4 = sin(angleOffset + PI / 2) * 600 + height / 2;

    // Dibujamos las curvas de Bezier
    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}
