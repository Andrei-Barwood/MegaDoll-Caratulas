let puntos = [];
let triangulos = [];
let paletaColores = ["#E7D462", "#FAF5AB"];

function setup() {
  createCanvas(3000, 3000);
  generarPuntos();
  triangulos = triangulate(puntos);
  noLoop();
}

function draw() {
  background("#78D863");
  dibujarPoligono();
}

function generarPuntos() {
  for (let i = 0; i < 30; i++) { // Reducir el número de puntos
    puntos.push({ x: random(width), y: random(height) });
  }
}

function triangulate(puntos) {
  let delaunay = Delaunator.from(puntos.map(p => [p.x, p.y]));
  let triangulos = [];
  for (let i = 0; i < delaunay.triangles.length; i += 3) {
    triangulos.push([
      puntos[delaunay.triangles[i]],
      puntos[delaunay.triangles[i + 1]],
      puntos[delaunay.triangles[i + 2]]
    ]);
  }
  return triangulos;
}

function dibujarPoligono() {
  stroke("#FAF5AB");
  strokeWeight(12);
  for (let triangulo of triangulos) {
    fill(random(paletaColores)); // Color aleatorio de la paleta
    beginShape();
    for (let punto of triangulo) {
      vertex(punto.x, punto.y);
    }
    endShape(CLOSE);
  }
}
