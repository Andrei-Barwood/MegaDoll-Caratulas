function setup() {
  createCanvas(3000, 3000);
  noLoop();
  background("#02534D"); // Fondo negro

  // Paleta de colores
  let color1 = color('#F3B5CF');
  let color2 = color('#69C8C3');
  let color3 = color('#F3E488');

  // Coordenadas de los tres planos
  let plane1 = createVector(500, 500); // Primer plano
  let plane2 = createVector(2500, 500); // Segundo plano
  let plane3 = createVector(1500, 2500); // Tercer plano

  // Generamos 4 líneas poligonales convexas entre los planos
  for (let i = 0; i < 4; i++) {
    let points = [];

    // Definir puntos para cada línea poligonal
    for (let j = 0; j < 4; j++) {
      let x = random(plane1.x, plane2.x); // x entre plane1 y plane2
      let y = random(plane1.y, plane3.y); // y entre plane1 y plane3
      points.push(createVector(x, y));
    }

    // Dibujar las líneas poligonales con un color aleatorio de la paleta
    beginShape();
    for (let j = 0; j < points.length; j++) {
      let currentColor;
      if (j % 3 === 0) currentColor = color1;
      else if (j % 3 === 1) currentColor = color2;
      else currentColor = color3;

      stroke(currentColor);
      strokeWeight(5);
      vertex(points[j].x, points[j].y);
    }
    endShape(CLOSE);
  }
}
