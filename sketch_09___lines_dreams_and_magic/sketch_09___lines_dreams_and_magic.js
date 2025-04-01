let rectas = [];
let puntos = [];

function setup() {
  createCanvas(3000, 3000);
  generarRectas();
  generarPuntos();
}

function draw() {
  background("#652D87");
  dibujarRectas();
  dibujarPuntos();
}

function generarRectas() {
  for (let i = 0; i < 12; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    rectas.push({ x1, y1, x2, y2 });
  }
}

function generarPuntos() {
  // Puntos de intersección (simplificado)
  for (let i = 0; i < rectas.length; i++) {
    for (let j = i + 1; j < rectas.length; j++) {
      let puntoInterseccion = calcularInterseccion(rectas[i], rectas[j]);
      if (puntoInterseccion) {
        puntos.push(puntoInterseccion);
      }
    }
  }

  // Puntos adicionales en las rectas
  for (let i = 0; i < 36 - puntos.length; i++) {
    let rectaAleatoria = random(rectas);
    let t = random(1); // Parámetro para interpolar a lo largo de la recta
    let x = lerp(rectaAleatoria.x1, rectaAleatoria.x2, t);
    let y = lerp(rectaAleatoria.y1, rectaAleatoria.y2, t);
    puntos.push({ x, y });
  }
}

function calcularInterseccion(recta1, recta2) {
  let x1 = recta1.x1, y1 = recta1.y1, x2 = recta1.x2, y2 = recta1.y2;
  let x3 = recta2.x1, y3 = recta2.y1, x4 = recta2.x2, y4 = recta2.y2;

  let denominador = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (denominador === 0) {
    return null; // Las rectas son paralelas
  }

  let px = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominador;
  let py = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominador;

  return { x: px, y: py };
}

function dibujarRectas() {
  stroke("#EA428B");
  for (let recta of rectas) {
    line(recta.x1, recta.y1, recta.x2, recta.y2);
  }
}

function dibujarPuntos() {
  fill("#8D5DA4");
  noStroke();
  for (let punto of puntos) {
    ellipse(punto.x, punto.y, 5, 5);
  }
}
