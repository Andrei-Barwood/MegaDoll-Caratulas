function setup() {
  createCanvas(3000, 3000);
  noLoop();
}

function draw() {
  background('#1B98D1'); // Color de fondo

  // Cuadrilátero gigante
  fill('#FFFFFF');
  stroke('#EC4141');
  strokeWeight(8);
  quad(500, 500, 2500, 600, 2300, 2500, 600, 2200);

  // Cuadriláteros espejados
  fill('#EC4141');
  stroke('#FDE85F');
  let quad1 = [
    [800, 1000], [1400, 1100], [1300, 1800], [700, 1700]
  ];
  quad(...quad1.flat());

  fill('#FDE85F');
  stroke('#EC4141');
  let quad2 = quad1.map(([x, y]) => [3000 - x, y]); // Espejado en el eje vertical
  quad(...quad2.flat());

  // Caja basada en un cuadrilátero irregular
  fill('#FFFFFF');
  stroke('#1B98D1');
  let baseQuad = [
    [1300, 2200], [1700, 2100], [1600, 2700], [1200, 2600]
  ];
  quad(...baseQuad.flat());

  // Líneas para simular la caja
  line(baseQuad[0][0], baseQuad[0][1], baseQuad[0][0], baseQuad[0][1] - 200);
  line(baseQuad[1][0], baseQuad[1][1], baseQuad[1][0], baseQuad[1][1] - 200);
  line(baseQuad[2][0], baseQuad[2][1], baseQuad[2][0], baseQuad[2][1] - 200);
  line(baseQuad[3][0], baseQuad[3][1], baseQuad[3][0], baseQuad[3][1] - 200);

  quad(
    baseQuad[0][0], baseQuad[0][1] - 200,
    baseQuad[1][0], baseQuad[1][1] - 200,
    baseQuad[2][0], baseQuad[2][1] - 200,
    baseQuad[3][0], baseQuad[3][1] - 200
  );
}
