function setup() {
    createCanvas(3000, 3000);
    background('#EAEEF4');
    noLoop();
}

function draw() {
    let colors = ['#C3CEDE', '#FFFFFF', '#BCC5D9'];
    let numShapes = 50; // Número de patrones en la composición

    for (let i = 0; i < numShapes; i++) {
        let x = random(width);
        let y = random(height);
        let col = random(colors);
        let type = random(["curve", "broken"]);

        if (type === "curve") {
            drawCurvedLine(x, y, col);
        } else {
            drawBrokenLine(x, y, col);
        }
    }
}

function drawCurvedLine(x, y, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    beginShape();
    for (let i = 0; i < 6; i++) {
        let xOffset = random(-300, 300); // Aumentado para hacer las líneas más extensas
        let yOffset = random(-300, 300);
        curveVertex(x + xOffset, y + yOffset);
    }
    endShape();
}

function drawBrokenLine(x, y, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    let numPoints = int(random(3, 12));
    beginShape();
    for (let i = 0; i < numPoints; i++) {
        let xOffset = random(-504, 504); // Aumentado para hacer las líneas más extensas
        let yOffset = random(-504, 504);
        vertex(x + xOffset, y + yOffset);
    }
    endShape();
}
