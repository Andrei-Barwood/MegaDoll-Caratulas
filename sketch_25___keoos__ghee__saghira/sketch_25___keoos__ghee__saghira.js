function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background("#5693CF"); // Fondo blanco

  // Paleta de colores
  let color1 = color('#20476B');
  let color2 = color('#3977B8');
  let color3 = color('#DFE4E3');
  let color4 = color('#76ADE5');
  let color5 = color('#B8E1F0');
  
  let colors = [color1, color2, color3, color4, color5];

  // Dibujar sustracción de segmentos con efecto espejo
  for (let i = 0; i < 10; i++) { // Cambia el número de iteraciones para más figuras
    let startX = random(width);
    let startY = random(height);

    // Escoge un color aleatorio de la paleta
    let lineColor = random(colors);
    stroke(lineColor);
    strokeWeight(24);

    // Número aleatorio de segmentos
    let numSegments = int(random(5, 15)); // Número de segmentos aleatorios

    // Eje central para el efecto de espejo
    let centerX = width / 2;

    // Dibujar los segmentos con el efecto espejo
    for (let j = 0; j < numSegments; j++) {
      let angle = random(TWO_PI); // Ángulo aleatorio
      let length = random(50, 200); // Longitud aleatoria del segmento

      // Calculamos las coordenadas del final del segmento
      let endX = startX + cos(angle) * length;
      let endY = startY + sin(angle) * length;

      // Dibujar el segmento original
      line(startX, startY, endX, endY);

      // Sustracción de segmento: generar el segmento reflejado en el eje central (efecto espejo)
      let reflectedX = centerX + (centerX - endX);
      line(startX, startY, reflectedX, endY);

      // Actualiza las coordenadas de inicio para el próximo segmento
      startX = endX;
      startY = endY;
    }
  }
}
