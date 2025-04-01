function setup() {
    createCanvas(3000, 3000);
    background('#9B2CA6'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#E867CD');
    strokeWeight(5);
    fill('#A336BB');
    
    let centerX = width / 2;
    let centerY = height / 2;
    let size = 1000;
    
    // Dibujar un triángulo principal
    let A = createVector(centerX, centerY - size / 2);
    let B = createVector(centerX - size / 2, centerY + size / 2);
    let C = createVector(centerX + size / 2, centerY + size / 2);
    
    beginShape();
    vertex(A.x, A.y);
    vertex(B.x, B.y);
    vertex(C.x, C.y);
    endShape(CLOSE);
    
    drawBisectors(A, B, C);
}

function drawBisectors(A, B, C) {
    stroke('#E0A0F5');
    strokeWeight(3);
    
    // Calcular puntos medios de los lados
    let AB_mid = createVector((A.x + B.x) / 2, (A.y + B.y) / 2);
    let BC_mid = createVector((B.x + C.x) / 2, (B.y + C.y) / 2);
    let CA_mid = createVector((C.x + A.x) / 2, (C.y + A.y) / 2);
    
    // Calcular puntos internos para efecto creativo
    let interiorA = createVector((A.x + AB_mid.x) / 2, (A.y + AB_mid.y) / 2);
    let interiorB = createVector((B.x + BC_mid.x) / 2, (B.y + BC_mid.y) / 2);
    let interiorC = createVector((C.x + CA_mid.x) / 2, (C.y + CA_mid.y) / 2);
    
    // Dibujar bisectrices
    line(A.x, A.y, interiorB.x, interiorB.y);
    line(B.x, B.y, interiorC.x, interiorC.y);
    line(C.x, C.y, interiorA.x, interiorA.y);
}
