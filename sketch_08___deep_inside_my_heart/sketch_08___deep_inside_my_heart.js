function setup() {
  createCanvas(3000, 3000);
  noStroke();
}

function draw() {
  background("#132248");

  let luzX = width / 2;
  let luzY = height / 2;
  let objetoX = mouseX;
  let objetoY = mouseY;
  let objetoRadio = 504;

  // Punto de luz (oscuridad)
  fill("#EA428B");
  ellipse(luzX, luzY, 20, 20);

  // Objeto opaco
  fill("#FFFFFF");
  ellipse(objetoX, objetoY, objetoRadio * 2, objetoRadio * 2);

  // Sombra radial
  for (let i = 0; i < 360; i += 1) {
    let angulo = radians(i);
    let distanciaObjeto = dist(luzX, luzY, objetoX, objetoY);
    let distanciaSombra = distanciaObjeto + objetoRadio;
    let sombraX = luzX + cos(angulo) * distanciaSombra;
    let sombraY = luzY + sin(angulo) * distanciaSombra;
    let densidadSombra = map(distanciaSombra, distanciaObjeto, width, 960, 480); // Densidad disminuye con la distancia
    fill("#EA428B");
    ellipse(sombraX, sombraY, 5, 5);
  }
}
