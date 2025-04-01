let paletaColores = ["#985E9F", "#C290C6", "#96CE7D", "#D5EBAD", "#AF72B6"];

function setup() {
  createCanvas(3000, 3000); // Ajustar el tamaño del lienzo
  angleMode(DEGREES);
}

function draw() {
  background("#AFD95E");
  for (let i = 0; i < 5; i++) {
    generarReloj();
  }
  noLoop();
}

function generarReloj() {
  push();
  translate(random(width), random(height));
  let escala = random(2, 4); // Aumentar la escala para relojes grandes
  scale(escala);

  // Seleccionar colores aleatorios de la paleta
  let colorFondo = color(random(paletaColores));
  let colorMarcas = color(random(paletaColores));
  let colorAgujas = color(random(paletaColores));

  // Dibujar el rombo base
  fill(colorFondo);
  stroke("#DCF188");
  dibujarRombo(0, 0, 100, 50);

  // Dibujar marcas de hora (rombos pequeños)
  fill(colorMarcas);
  noStroke();
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);
    translate(80, 0);
    dibujarRombo(0, 0, 10, 5);
    pop();
  }

  // Dibujar agujas del reloj
  let hora = random(12);
  let minutos = random(60);
  let segundos = random(60);

  // Aguja de la hora
  push();
  rotate(hora * 30 + minutos / 2);
  fill(colorAgujas);
  dibujarRombo(30, 0, 40, 5);
  pop();

  // Aguja de los minutos
  push();
  rotate(minutos * 6);
  fill(colorAgujas);
  dibujarRombo(20, 0, 60, 3);
  pop();

  // Aguja de los segundos
  push();
  rotate(segundos * 6);
  fill(colorAgujas);
  dibujarRombo(10, 0, 80, 2);
  pop();

  pop();
}

function dibujarRombo(x, y, ancho, alto) {
  beginShape();
  vertex(x, y - alto);
  vertex(x + ancho, y);
  vertex(x, y + alto);
  vertex(x - ancho, y);
  endShape(CLOSE);
}
