function setup() {
    createCanvas(3000, 3000);
    background('#656565'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#000000');
    strokeWeight(4);
    
    let centerX = width / 2;
    let centerY = height / 2;
    let numLines = 30; // Cantidad de semirrectas
    let maxLength = 1200;
    let minLength = 400;
    
    for (let i = 0; i < numLines; i++) {
        let angle = random(TWO_PI); // Ángulo aleatorio
        let length = random(minLength, maxLength); // Longitud aleatoria
        
        let x2 = centerX + cos(angle) * length;
        let y2 = centerY + sin(angle) * length;
        
        line(centerX, centerY, x2, y2);
    }
    
    drawConcavePolygon();
}

function drawConcavePolygon() {
    let points = [];
    let numVertices = 8 + int(random(4)); // Entre 8 y 12 vértices
    let radius = 800;
    let centerX = width / 2;
    let centerY = height / 2;
    
    for (let i = 0; i < numVertices; i++) {
        let angle = map(i, 0, numVertices, 0, TWO_PI);
        let x = centerX + cos(angle) * (radius + random(-300, 300)); // Variaciones más amplias
        let y = centerY + sin(angle) * (radius + random(-300, 300));
        points.push(createVector(x, y));
    }
    
    // Ordenar los puntos para garantizar una forma cóncava
    points.sort((a, b) => atan2(a.y - centerY, a.x - centerX) - atan2(b.y - centerY, b.x - centerX));
    
    stroke('#580C5E');
    fill('#A336BB');
    beginShape();
    for (let p of points) {
        vertex(p.x, p.y);
    }
    endShape(CLOSE);
}
