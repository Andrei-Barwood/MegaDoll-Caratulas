function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background("#E880B0"); // Fondo blanco

  // Definimos los puntos de inicio y final del segmento
  let startX = 500;
  let startY = 1500;
  let endX = 2500;
  let endY = 1500;

  // Número de divisiones
  let numDivisions = 18;

  // Dibujar el segmento y sus divisiones
  stroke("#DD6FA4");
  strokeWeight(24);
  line(startX, startY, endX, endY); // Dibuja el segmento principal

  // Calcular la distancia entre los puntos intermedios
  let segmentLengthX = (endX - startX) / numDivisions;
  let segmentLengthY = (endY - startY) / numDivisions;

  // Dibujar los puntos de división
  for (let i = 1; i < numDivisions; i++) {
    let divX = startX + segmentLengthX * i;
    let divY = startY + segmentLengthY * i;

    // Dibujar un punto en cada división
    ellipse(divX, divY, 10, 10); // Dibujar un círculo en cada división
  }
}
