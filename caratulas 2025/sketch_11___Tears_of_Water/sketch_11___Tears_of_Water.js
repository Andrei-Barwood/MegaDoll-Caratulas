let paletaColores = ["#FABA62", "#EF9C54", "#FFFFFF", "#B2884D", "#CA9A56"];
let puntos = [];
let contorno = [];

function setup() {
  createCanvas(3000, 3000);
  generarPuntos();
  contorno = grahamScan(puntos);
  noLoop();
}

function draw() {
  background("#EF9C54");
  dibujarNube();
}

function generarPuntos() {
  for (let i = 0; i < 5000; i++) {
    puntos.push({ x: random(width), y: random(height) });
  }
}

function grahamScan(puntos) {
  if (puntos.length < 3) return puntos;

  // Encontrar el punto más bajo
  let puntoInicial = puntos[0];
  for (let punto of puntos) {
    if (punto.y < puntoInicial.y || (punto.y === puntoInicial.y && punto.x < puntoInicial.x)) {
      puntoInicial = punto;
    }
  }

  // Ordenar los puntos por ángulo polar
  let puntosOrdenados = puntos.filter(p => p !== puntoInicial);
  puntosOrdenados.sort((a, b) => {
    let anguloA = atan2(a.y - puntoInicial.y, a.x - puntoInicial.x);
    let anguloB = atan2(b.y - puntoInicial.y, b.x - puntoInicial.x);
    if (anguloA !== anguloB) {
      return anguloA - anguloB;
    } else {
      // Si los ángulos son iguales, ordenar por distancia
      let distA = dist(puntoInicial.x, puntoInicial.y, a.x, a.y);
      let distB = dist(puntoInicial.x, puntoInicial.y, b.x, b.y);
      return distA - distB;
    }
  });

  // Construir el contorno convexo
  let contorno = [puntoInicial, puntosOrdenados[0], puntosOrdenados[1]];
  for (let i = 2; i < puntosOrdenados.length; i++) {
    while (contorno.length >= 3 && orientacion(contorno[contorno.length - 2], contorno[contorno.length - 1], puntosOrdenados[i]) <= 0) {
      contorno.pop();
    }
    contorno.push(puntosOrdenados[i]);
  }

  return contorno;
}

function orientacion(p1, p2, p3) {
  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
}

function dibujarNube() {
  let colorNube = color(random(paletaColores)); // Seleccionar color aleatorio de la paleta
  fill(colorNube);
  noStroke();
  beginShape();
  for (let punto of contorno) {
    vertex(punto.x, punto.y);
  }
  endShape(CLOSE);
}
