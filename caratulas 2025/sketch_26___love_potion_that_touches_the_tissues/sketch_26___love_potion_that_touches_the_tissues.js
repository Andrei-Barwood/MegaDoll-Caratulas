function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background("#632E86"); // Fondo blanco

  // Nueva paleta de colores
  let color1 = color('#580D36'); // Púrpura oscuro
  let color2 = color('#BC1D75'); // Rosa fuerte
  let color3 = color('#D9539D'); // Rosa suave
  let color4 = color('#FCB6DF'); // Rosa claro

  let colors = [color1, color2, color3, color4];

  // Parámetro de multiplicación (número real)
  let multiplier = random(1.5, 3); // Puedes cambiar este valor según el efecto que quieras

  // Dibujar el lago abstracto usando la multiplicación de segmentos
  for (let i = 0; i < 10; i++) { // Cambia el número de iteraciones para más patrones
    let startX = random(width);
    let startY = random(height);

    // Escoge un color aleatorio de la paleta
    let lineColor = random(colors);
    stroke(lineColor);
    strokeWeight(2);

    // Número aleatorio de segmentos a multiplicar
    let numSegments = int(random(5, 15));

    // Dibujar segmentos multiplicados por el número real
    for (let j = 0; j < numSegments; j++) {
      let angle = random(TWO_PI); // Ángulo aleatorio
      let length = random(50, 200); // Longitud aleatoria del segmento

      // Multiplicamos la longitud del segmento por el número real
      length *= multiplier;

      // Calculamos las coordenadas del final del segmento
      let endX = startX + cos(angle) * length;
      let endY = startY + sin(angle) * length;

      // Dibujar el segmento
      line(startX, startY, endX, endY);

      // Actualiza las coordenadas de inicio para el próximo segmento
      startX = endX;
      startY = endY;
    }
  }
}
