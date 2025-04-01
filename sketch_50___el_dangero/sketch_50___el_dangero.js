function setup() {
    createCanvas(3000, 3000);
    background('#09717A'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#01C7BA');
    strokeWeight(5);
    fill('#03A08E');
    
    let centerX = width / 2;
    let centerY = height / 2;
    let radius = 1000;
    
    // Dibujar la circunferencia
    noFill();
    stroke('#00EAD8');
    strokeWeight(8);
    ellipse(centerX, centerY, radius * 2);
    
    drawBisectors(centerX, centerY, radius);
}

function drawBisectors(cx, cy, r) {
    stroke('#01C7BA');
    strokeWeight(4);
    let numLines = 12;
    
    for (let i = 0; i < numLines; i++) {
        let angle = i * (PI / 6) + random(-PI / 12, PI / 12); // Jugar con π y radianes
        let x1 = cx + cos(angle) * r;
        let y1 = cy + sin(angle) * r;
        let x2 = cx - cos(angle) * r;
        let y2 = cy - sin(angle) * r;
        
        line(x1, y1, x2, y2);
    }
}
