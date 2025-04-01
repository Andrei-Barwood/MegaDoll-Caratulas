function setup() {
    createCanvas(3000, 3000);
    background('#CB4DB6'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#05ECE6');
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
    
    drawConvexPolygon();
}

function drawConvexPolygon() {
    let points = [];
    let numVertices = 6 + int(random(4)); // Entre 6 y 10 vértices
    let radius = 800;
    let centerX = width / 2;
    let centerY = height / 2;
    
    for (let i = 0; i < numVertices; i++) {
        let angle = map(i, 0, numVertices, 0, TWO_PI);
        let x = centerX + cos(angle) * (radius + random(-100, 100));
        let y = centerY + sin(angle) * (radius + random(-100, 100));
        points.push(createVector(x, y));
    }
    
    stroke('#05ECE6');
    fill('#CB4DB6');
    beginShape();
    for (let p of points) {
        vertex(p.x, p.y);
    }
    endShape(CLOSE);
}
