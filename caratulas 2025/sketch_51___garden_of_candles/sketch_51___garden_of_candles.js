function setup() {
    createCanvas(3000, 3000);
    background('#D7E7F3'); // Color de fondo
    noLoop();
}

function draw() {
    stroke('#5C1C5C');
    strokeWeight(6);
    
    let centerX = width / 2;
    let centerY = height / 2;
    let numAngles = 10; // Cantidad de ángulos adyacentes
    let maxLength = 800;
    
    for (let i = 0; i < numAngles; i++) {
        let baseAngle = random(TWO_PI); // Ángulo base aleatorio
        let angleOffset = random(PI / 6, PI / 3); // Ángulo adyacente aleatorio
        
        let x1 = centerX + cos(baseAngle) * maxLength;
        let y1 = centerY + sin(baseAngle) * maxLength;
        let x2 = centerX + cos(baseAngle + angleOffset) * maxLength;
        let y2 = centerY + sin(baseAngle + angleOffset) * maxLength;
        
        // Dibujar las líneas que forman el ángulo adyacente
        stroke('#5C1C5C');
        line(centerX, centerY, x1, y1);
        stroke('#EDF8FF');
        line(centerX, centerY, x2, y2);
    }
}
