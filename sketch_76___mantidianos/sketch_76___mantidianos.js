let vertices = [];
let intersectionPoints = [];

function setup() {
  createCanvas(3000, 3000);
  noLoop();
  angleMode(DEGREES);
  background("#FFFFFF");
  
  // Definir los vértices del polígono irregular
  vertices.push(createVector(500, 500));
  vertices.push(createVector(1000, 300));
  vertices.push(createVector(1500, 500));
  vertices.push(createVector(1700, 1000));
  vertices.push(createVector(1300, 1500));
  vertices.push(createVector(800, 1300));
  
  // Colores de la nueva paleta
  let colorPoligono = color('#9990F2');
  let colorCruzados = color('#C4BEF7');
  let colorIntersecciones = color('#7770B9');
  
  // Dibujar el polígono irregular
  noFill();
  stroke(colorPoligono);
  beginShape();
  for (let v of vertices) {
    vertex(v.x, v.y);
  }
  endShape(CLOSE);
  
  // Dibujar los segmentos de los vértices
  stroke(colorPoligono);
  let totalLengthVertices = 0;
  for (let i = 0; i < vertices.length; i++) {
    let start = vertices[i];
    let end = vertices[(i + 1) % vertices.length];
    line(start.x, start.y, end.x, end.y);
    totalLengthVertices += dist(start.x, start.y, end.x, end.y);
  }
  console.log("Suma de segmentos que unen los extremos: ", totalLengthVertices);
  
  // Crear segmentos que se cortan
  stroke(colorCruzados);
  let totalLengthIntersecting = 0;
  for (let i = 0; i < vertices.length; i++) {
    for (let j = i + 1; j < vertices.length; j++) {
      let start = vertices[i];
      let end = vertices[j];
      
      // Evitar los segmentos que ya están en el borde del polígono
      if (abs(i - j) > 1 && !(i == 0 && j == vertices.length - 1)) {
        // Dibujar las líneas cruzadas
        line(start.x, start.y, end.x, end.y);
        totalLengthIntersecting += dist(start.x, start.y, end.x, end.y);
        
        // Agregar el punto de intersección
        let intersection = getIntersection(start, end);
        if (intersection) {
          intersectionPoints.push(intersection);
        }
      }
    }
  }
  
  console.log("Suma de segmentos que se cruzan: ", totalLengthIntersecting);
  
  // Dibujar los puntos de intersección
  fill(colorIntersecciones);
  noStroke();
  for (let p of intersectionPoints) {
    ellipse(p.x, p.y, 10, 10);
  }
  
  // Mostrar las longitudes de los segmentos
  
}

function getIntersection(p1, p2) {
  for (let i = 0; i < vertices.length; i++) {
    let p3 = vertices[i];
    let p4 = vertices[(i + 1) % vertices.length];
    
    let denom = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
    if (denom === 0) continue;
    
    let x = ((p1.x * p2.y - p1.y * p2.x) * (p3.x - p4.x) - (p1.x - p2.x) * (p3.x * p4.y - p3.y * p4.x)) / denom;
    let y = ((p1.x * p2.y - p1.y * p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x * p4.y - p3.y * p4.x)) / denom;
    
    if (x >= min(p1.x, p2.x) && x <= max(p1.x, p2.x) && x >= min(p3.x, p4.x) && x <= max(p3.x, p4.x) &&
        y >= min(p1.y, p2.y) && y <= max(p1.y, p2.y) && y >= min(p3.y, p4.y) && y <= max(p3.y, p4.y)) {
      return createVector(x, y);
    }
  }
  return null;
}
