function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background(255); // Fondo blanco

  // Paleta de colores
  let color1 = color('#BDC1C2');
  let color2 = color('#EAEEF0');
  let color3 = color('#DFE4E3');
  let color4 = color('#5693CF');
  
  let colors = [color1, color2, color3, color4];
  
  // Generar sumas de segmentos aleatorios con rectas aleatorias
  for (let i = 0; i < 10; i++) { // Cambia el número de iteraciones para más sumas
    let startX = random(width);
    let startY = random(height);

    // Escoge un color aleatorio de la paleta
    let lineColor = random(colors);
    stroke(lineColor);
    strokeWeight(2);

    // Número aleatorio de segmentos a sumar
    let numSegments = int(random(5, 15)); // Número de segmentos aleatorios

    // Dibuja los segmentos aleatorios
    for (let j = 0; j < numSegments; j++) {
      let angle = random(TWO_PI); // Ángulo aleatorio
      let length = random(50, 200); // Longitud aleatoria del segmento

      let endX = startX + cos(angle) * length;
      let endY = startY + sin(angle) * length;

      // Dibuja el segmento
      line(startX, startY, endX, endY);

      // Actualiza las coordenadas de inicio para el próximo segmento
      startX = endX;
      startY = endY;
    }
  }
}
