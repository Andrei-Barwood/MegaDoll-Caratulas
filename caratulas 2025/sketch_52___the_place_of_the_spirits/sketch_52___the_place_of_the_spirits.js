function setup() {
    createCanvas(3000, 3000);
    background('#993499'); // Color de fondo
    noLoop();
}

function draw() {
    let numAngles = 15; // Cantidad de ángulos rectos
    let maxSize = 600;
    
    for (let i = 0; i < numAngles; i++) {
        let x = random(width);
        let y = random(height);
        let size = random(200, maxSize);
        let rotation = random([0, HALF_PI, PI, PI + HALF_PI]); // Rotaciones en 90°
        
        drawRightAngle(x, y, size, rotation);
    }
}

function drawRightAngle(x, y, size, rotation) {
    push();
    translate(x, y);
    rotate(rotation);
    stroke('#FFFFFF');
    strokeWeight(8);
    line(0, 0, size, 0);
    stroke('#C3C3C3');
    line(0, 0, 0, size);
    pop();
}
