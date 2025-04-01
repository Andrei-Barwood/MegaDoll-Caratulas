function setup() {
  createCanvas(3000, 3000);
  background('#9C1D00');
  noFill();
  strokeWeight(3);
  
  // Dibujar 3 puntos
  stroke('#FFFFFF');
  for (let i = 0; i < 3; i++) {
    let x = random(width * 0.2, width * 0.8);
    let y = random(height * 0.2, height * 0.8);
    strokeWeight(12);
    point(x, y);
  }
  
  // Dibujar una curva abstracta
  stroke('#FF5529');
  strokeWeight(6);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = random(width * 0.2, width * 0.8);
    let y = random(height * 0.2, height * 0.8);
    curveVertex(x, y);
  }
  endShape();
  
  // Dibujar 3 semicurvas
  stroke('#46389B');
  for (let i = 0; i < 3; i++) {
    let x1 = random(width * 0.2, width * 0.4);
    let y1 = random(height * 0.2, height * 0.4);
    let x2 = random(width * 0.6, width * 0.8);
    let y2 = random(height * 0.6, height * 0.8);
    let cx = random(width * 0.4, width * 0.6);
    let cy = random(height * 0.4, height * 0.6);
    strokeWeight(6);
    beginShape();
    curveVertex(x1, y1);
    curveVertex(cx, cy);
    curveVertex(x2, y2);
    endShape();
  }
}
