function setup() {
  createCanvas(3000, 3000);
  background('#4A1767');
  noFill();
  strokeWeight(3);
  
  // Dibujar curva A
  stroke('#794897');
  strokeWeight(6);
  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = random(width * 0.2, width * 0.4);
    let y = random(height * 0.3, height * 0.7);
    curveVertex(x, y);
  }
  endShape();
  
  // Dibujar curva B
  stroke('#5E50A0');
  beginShape();
  for (let i = 0; i < 10; i++) {
    let x = random(width * 0.6, width * 0.8);
    let y = random(height * 0.3, height * 0.7);
    curveVertex(x, y);
  }
  endShape();
  
  // Dibujar 4 puntos y conectar con rectas
  stroke('#DFE4E3');
  strokeWeight(6);
  let pointsA = [];
  let pointsB = [];
  
  for (let i = 0; i < 4; i++) {
    let xA = random(width * 0.2, width * 0.4);
    let yA = random(height * 0.3, height * 0.7);
    let xB = random(width * 0.6, width * 0.8);
    let yB = random(height * 0.3, height * 0.7);
    
    pointsA.push(createVector(xA, yA));
    pointsB.push(createVector(xB, yB));
    
    strokeWeight(12);
    point(xA, yA);
    point(xB, yB);
    
    strokeWeight(6);
    line(xA, yA, xB, yB);
  }
}
