function setup() {
    createCanvas(3000, 3000);
    background('#BC1A76');
    noLoop();
}

function draw() {
    let colors = ['#B1C5CD', '#FFFFFF', '#EE6D2E'];
    let yPositions = [800, 1500, 2200]; // Posiciones de las rectas paralelas
    let margin = 200; // Margen respecto a los extremos
    let lineLength = 2600; // Longitud de las rectas

    for (let i = 0; i < yPositions.length; i++) {
        let y = yPositions[i];
        let x1 = margin;
        let x2 = width - margin;
        let col = random(colors);

        stroke(col);
        strokeWeight(4);
        line(x1, y, x2, y);

        let px1 = random(x1, x2);
        let px2 = random(x1, x2);
        let py1 = y;
        let py2 = y;

        fill(col);
        noStroke();
        ellipse(px1, py1, 15, 15);
        ellipse(px2, py2, 15, 15);

        drawCurvedSegment(px1, py1, x2, y, col);
        drawTriangularSegment(px2, py2, x1, y, col);
    }
}

function drawCurvedSegment(px, py, ex, ey, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    let cx1 = px + random(-200, 200);
    let cy1 = py + random(-200, 200);
    let cx2 = px + random(-200, 200);
    let cy2 = py + random(-200, 200);
    bezier(px, py, cx1, cy1, cx2, cy2, ex, ey);
}

function drawTriangularSegment(px, py, ex, ey, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    let tx = px + random(-150, 150);
    let ty = py + random(-200, 200);
    triangle(px, py, ex, ey, tx, ty);
}
