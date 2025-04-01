function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background("#E581B1"); // Fondo blanco
  
  // Definir colores para las líneas
  let color1 = color(243, 181, 207);  // Color similar a #F3B5CF
  let color2 = color(105, 200, 195);  // Color similar a #69C8C3
  let color3 = color(243, 228, 136);  // Color similar a #F3E488
  
  // Dibujar los semiplanos
  stroke("#02534D");
  strokeWeight(12);
  line(0, height / 2, width, height / 2); // Línea que divide los semiplanos

  // Dibujar las líneas cóncavas en el semiplano superior
  drawConcaveLines(0, height / 2, width, color1, color2, color3, true); // Semiplano superior

  // Dibujar las líneas cóncavas en el semiplano inferior
  drawConcaveLines(0, height / 2, width, color1, color2, color3, false); // Semiplano inferior
}

function drawConcaveLines(xStart, yStart, xEnd, color1, color2, color3, isUpper) {
  // Determinar el desplazamiento en y para las líneas cóncavas según el semiplano
  let yOffset = isUpper ? -100 : 100;

  for (let i = 0; i < 3; i++) {
    // Generar puntos de control para las líneas cóncavas
    let startX = xStart + random(50, 150);
    let endX = xEnd - random(50, 150);
    let controlX1 = random(startX, endX);
    let controlX2 = random(startX, endX);
    let controlY1 = random(yStart - 100, yStart + 100) + yOffset;
    let controlY2 = random(yStart - 100, yStart + 100) + yOffset;

    // Elegir el color
    let lineColor;
    if (i % 3 === 0) lineColor = color1;
    else if (i % 3 === 1) lineColor = color2;
    else lineColor = color3;

    // Dibujar la línea cóncava
    stroke(lineColor);
    strokeWeight(6);
    noFill();
    beginShape();
    vertex(startX, yStart);
    bezierVertex(controlX1, controlY1, controlX2, controlY2, endX, yStart);
    endShape();
  }
}
