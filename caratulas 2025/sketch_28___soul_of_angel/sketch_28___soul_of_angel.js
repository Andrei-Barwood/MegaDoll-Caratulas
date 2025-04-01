function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background('#D9C574'); // Fondo azul claro

  // Paleta de colores
  let colorEnvuelta = color('#F3F49B'); // Amarillo
  let colorEnvolvente = color('#D1B568'); // Azul claro
  let colorLineas = color('#EAE28B'); // Azul oscuro

  // Puntos inicial y final comunes
  let startX = 500;
  let startY = random(1000, 2000);
  let endX = 2500;
  let endY = random(1000, 2000);

  let numPuntos = 6; // Número de puntos intermedios en cada poligonal

  let envuelta = [];
  let envolvente = [];

  // Generar puntos para la envuelta (poligonal interna)
  for (let i = 1; i < numPuntos; i++) {
    let x = lerp(startX, endX, i / numPuntos);
    let y = random(startY + 50, startY + 200);
    envuelta.push(createVector(x, y));
  }

  // Generar puntos para la envolvente (poligonal externa, más larga)
  for (let i = 1; i < numPuntos; i++) {
    let x = lerp(startX, endX, i / numPuntos);
    let y = random(startY - 200, startY - 50);
    envolvente.push(createVector(x, y));
  }

  // Dibujar la envuelta (poligonal interna)
  fill(colorEnvuelta);
  noStroke();
  beginShape();
  vertex(startX, startY);
  for (let p of envuelta) vertex(p.x, p.y);
  vertex(endX, endY);
  endShape(CLOSE);

  // Dibujar la envolvente (poligonal externa)
  fill(colorEnvolvente);
  noStroke();
  beginShape();
  vertex(startX, startY);
  for (let p of envolvente) vertex(p.x, p.y);
  vertex(endX, endY);
  endShape(CLOSE);

  // Dibujar los bordes de las poligonales
  stroke(colorLineas);
  strokeWeight(4);
  noFill();
  
  beginShape();
  vertex(startX, startY);
  for (let p of envuelta) vertex(p.x, p.y);
  vertex(endX, endY);
  endShape();

  beginShape();
  vertex(startX, startY);
  for (let p of envolvente) vertex(p.x, p.y);
  vertex(endX, endY);
  endShape();
}
