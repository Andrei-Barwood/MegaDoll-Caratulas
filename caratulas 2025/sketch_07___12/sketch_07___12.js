function setup() {
  createCanvas(3000, 3000);
  background("#A46BBD");
  stroke(192);
  //noFill();
  dibujarPoligonoAbstracto();
}

function dibujarPoligonoAbstracto() {
  let lineas = [];
  let centroX = width / 2;
  let centroY = height / 2;

  // Generar 12 líneas aleatorias
  for (let i = 0; i < 12; i++) {
    let x1, y1, x2, y2;
    if (i < 6) { // 6 líneas convergen al centro
      x1 = centroX;
      y1 = centroY;
      x2 = random(width);
      y2 = random(height);
    } else { // 6 líneas aleatorias en cualquier lugar
      x1 = random(width);
      y1 = random(height);
      x2 = random(width);
      y2 = random(height);
    }
    lineas.push({ x1, y1, x2, y2 });
    line(x1, y1, x2, y2);
  }

  // Encontrar puntos de intersección
  let intersecciones = [];
  for (let i = 0; i < lineas.length; i++) {
    for (let j = i + 1; j < lineas.length; j++) {
      let interseccion = encontrarInterseccion(lineas[i], lineas[j]);
      if (interseccion) {
        intersecciones.push(interseccion);
      }
    }
  }

  // Dibujar el polígono con los puntos de intersección
  beginShape();
  for (let punto of intersecciones) {
    vertex(punto.x, punto.y);
  }
  endShape(CLOSE);
}

function encontrarInterseccion(linea1, linea2) {
  let x1 = linea1.x1, y1 = linea1.y1, x2 = linea1.x2, y2 = linea1.y2;
  let x3 = linea2.x1, y3 = linea2.y1, x4 = linea2.x2, y4 = linea2.y2;

  let denominador = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (denominador === 0) return null; // Líneas paralelas

  let px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominador;
  let py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominador;

  return { x: px, y: py };
}
