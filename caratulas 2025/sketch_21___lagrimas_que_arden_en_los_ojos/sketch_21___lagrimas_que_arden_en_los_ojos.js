function setup() {
  createCanvas(3000, 3000, WEBGL);
  background('#D5EBAD');
  strokeWeight(3);
  
  // Dibujar dos planos intersectados
  noFill();
  stroke('#985E9F');
  push();
  rotateY(PI / 4);
  plane(800, 2000);
  pop();
  
  push();
  rotateX(PI / 4);
  plane(2000, 800);
  pop();
  
  // Dibujar dos puntos de intersección
  stroke('#96CE7D');
  strokeWeight(15);
  point(0, 0, 0);
  point(200, 200, 0);
  
  // Dibujar los semiplanos resultantes con líneas punteadas manuales
  stroke('#985E9F');
  strokeWeight(2);
  
  for (let i = -400; i <= 400; i += 100) {
    for (let j = -1000; j < 1000; j += 20) {
      if ((j / 20) % 2 === 0) {
        line(i, j, 0, i, j + 10, 0);
      }
    }
    for (let j = -1000; j < 1000; j += 20) {
      if ((j / 20) % 2 === 0) {
        line(j, i, 0, j + 10, i, 0);
      }
    }
  }
}
