function setup() {
    createCanvas(3000, 3000);
    background('#FFFFE2'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#000000');
    strokeWeight(24);
    fill('#BEA2B0');
    
    // Definir los puntos
    let A = createVector(500, 500);
    let B = createVector(1500, 400);
    let C = createVector(2000, 1000);
    let D = createVector(1800, 1800);
    let E = createVector(1200, 2000);
    let F = createVector(700, 1700);
    let G = createVector(400, 900);
    
    // Dibujar los segmentos
    beginShape();
    vertex(A.x, A.y);
    vertex(B.x, B.y);
    vertex(C.x, C.y);
    vertex(D.x, D.y);
    vertex(E.x, E.y);
    endShape(CLOSE);
    
    beginShape();
    vertex(A.x, A.y);
    vertex(G.x, G.y);
    vertex(F.x, F.y);
    vertex(E.x, E.y);
    endShape(CLOSE);
    
    // Relleno adicional
    fill('#F5EEDC');
    beginShape();
    vertex(A.x, A.y);
    vertex(B.x, B.y);
    vertex(G.x, G.y);
    endShape(CLOSE);
}
