function setup() {
    createCanvas(3000, 3000);
    background('#1F3E7D'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#05ECE6');
    strokeWeight(4);
    fill('#3167CC');
    
    // Definir los puntos para el primer conjunto de segmentos
    let A = createVector(800, 800);
    let B = createVector(2000, 700);
    let C = createVector(2200, 1800);
    let D = createVector(1000, 2000);
    
    // Dibujar el primer polígono (ABCD)
    beginShape();
    vertex(A.x, A.y);
    vertex(B.x, B.y);
    vertex(C.x, C.y);
    vertex(D.x, D.y);
    endShape(CLOSE);
    
    // Definir los puntos para el segundo conjunto de segmentos
    let E = createVector(1200, 1200);
    let F = createVector(1800, 1100);
    let G = createVector(1900, 1600);
    let H = createVector(1400, 1700);
    
    // Dibujar el segundo polígono (EFGH)
    fill('#05ECE6');
    beginShape();
    vertex(E.x, E.y);
    vertex(F.x, F.y);
    vertex(G.x, G.y);
    vertex(H.x, H.y);
    endShape(CLOSE);
}
