function setup() {
    createCanvas(3000, 3000);
    background('#580D36'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#BC1D75');
    strokeWeight(6);
    fill('#D9539D');
    
    // Definir los vértices del triángulo grande
    let A = createVector(1500, 600);
    let B = createVector(600, 2400);
    let C = createVector(2400, 2400);
    
    // Dibujar el triángulo principal
    beginShape();
    vertex(A.x, A.y);
    vertex(B.x, B.y);
    vertex(C.x, C.y);
    endShape(CLOSE);
    
    // Definir puntos para la intersección horizontal
    let D = createVector(900, 1500);
    let E = createVector(2100, 1500);
    
    // Dibujar la intersección horizontal
    stroke('#FCB6DF');
    line(D.x, D.y, E.x, E.y);
    
    // Dibujar los triángulos internos con líneas punteadas
    stroke('#BC1D75');
    drawingContext.setLineDash([20, 15]); // Línea punteada
    
    // Triángulo izquierdo
    line(A.x, A.y, D.x, D.y);
    line(D.x, D.y, B.x, B.y);
    line(B.x, B.y, A.x, A.y);
    
    // Triángulo derecho
    line(A.x, A.y, E.x, E.y);
    line(E.x, E.y, C.x, C.y);
    line(C.x, C.y, A.x, A.y);
    
    // Triángulo inferior
    line(D.x, D.y, E.x, E.y);
    line(E.x, E.y, B.x, B.y);
    line(B.x, B.y, D.x, D.y);
}
