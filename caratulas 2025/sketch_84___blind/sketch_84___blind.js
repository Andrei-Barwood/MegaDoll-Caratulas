function setup() {
    createCanvas(3000, 3000);
    background('#0ED1FF');
    noLoop();
}

function draw() {
    let colors = ['#99ABC7', '#ADBAD1', '#A7B7CF'];
    let numLines = 12;

    for (let i = 0; i < numLines; i++) {
        let x1 = random(width);
        let y1 = random(height);
        let x2 = random(width);
        let y2 = random(height);
        let col = random(colors);

        stroke(col);
        strokeWeight(4);
        line(x1, y1, x2, y2);

        let px = lerp(x1, x2, random(0.2, 0.8));
        let py = lerp(y1, y2, random(0.2, 0.8));
        fill(col);
        noStroke();
        ellipse(px, py, 12, 12);

        drawBezierCurve(px, py, col);
        drawQuadCurve(px, py, col);
    }
}

function drawBezierCurve(px, py, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    let bx1 = px + random(-200, 200);
    let by1 = py + random(-200, 200);
    let bx2 = px + random(-200, 200);
    let by2 = py + random(-200, 200);
    let bx3 = px + random(-200, 200);
    let by3 = py + random(-200, 200);
    bezier(px, py, bx1, by1, bx2, by2, bx3, by3);
}

function drawQuadCurve(px, py, col) {
    stroke(col);
    strokeWeight(3);
    noFill();
    let qx1 = px + random(-200, 200);
    let qy1 = py + random(-200, 200);
    let qx2 = px + random(-200, 200);
    let qy2 = py + random(-200, 200);
    quad(px, py, qx1, qy1, qx2, qy2, px + random(-100, 100), py + random(-100, 100));
}
