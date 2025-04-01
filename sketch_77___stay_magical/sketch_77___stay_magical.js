function setup() {
  createCanvas(3000, 3000);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  background('#12162C');
  
  // Colores
  let colorBase = color('#090E1D');
  let colorVela = color('#363E7A');
  let colorLlama = color('#5684E5'); // Color cálido para la llama, puedes cambiarlo según tu preferencia
  
  // Vela - base
  fill(colorBase);
  noStroke();
  rect(1300, 2500, 400, 200);  // Base de la vela
  
  // Vela - cuerpo
  fill(colorVela);
  rect(1400, 1500, 200, 1000);  // Cuerpo de la vela

  // Llama - forma abstracta
  fill(colorLlama);
  beginShape();
  vertex(1500, 1500); // base de la llama
  bezierVertex(1450, 1200, 1550, 1100, 1500, 900); // curva hacia arriba
  bezierVertex(1550, 1100, 1450, 1100, 1500, 800); // curva de la llama
  bezierVertex(1550, 1000, 1450, 1000, 1500, 500); // segunda curva
  endShape(CLOSE);
  
  // Detalles adicionales en la llama (opcional, para más abstracción)
  fill(110, 102, 192, 150);
  ellipse(1500, 700, 50, 50);  // Forma en el centro de la llama para dar un toque más abstracto
  ellipse(1550, 800, 40, 40);  // Forma más pequeña hacia arriba

  // Sombra de la vela
  fill(0, 0, 0, 100);
  ellipse(1500, 2700, 300, 100);  // Sombra suave para dar más profundidad
}
