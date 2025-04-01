function setup() {
  createCanvas(3000, 3000);
  noLoop(); // Solo dibujar una vez
}

function draw() {
  background("#BD1F77");
  
  // Colores de la paleta
  let colors = ['#482562', '#B28EC0', '#C5A6D0', '#E7CEE4'];
  
  // Dibuja la red de triángulos (estilo teselado)
  let triangleSize = 100;  // Tamaño de los triángulos
  for (let y = 0; y < height; y += triangleSize * sqrt(3) / 2) {
    for (let x = 0; x < width; x += triangleSize) {
      // Elige un color aleatorio para cada triángulo
      fill(random(colors));
      noStroke();

      // Dibuja el triángulo
      let xOffset = (y / (triangleSize * sqrt(3) / 2)) % 2 == 0 ? 0 : triangleSize / 2;
      beginShape();
      vertex(x + xOffset, y); // Vértice superior
      vertex(x + triangleSize / 2 + xOffset, y + triangleSize * sqrt(3) / 2); // Vértice inferior derecho
      vertex(x - triangleSize / 2 + xOffset, y + triangleSize * sqrt(3) / 2); // Vértice inferior izquierdo
      endShape(CLOSE);
    }
  }

  // Dibuja el cinturón (una línea)
  let beltY = random(height / 2, height - 50); // Y aleatorio para el cinturón
  stroke('#482562'); // color del cinturón
  strokeWeight(10); // grosor del cinturón
  line(100, beltY, width - 100, beltY); // cinturón desde el borde izquierdo hasta el derecho
}
