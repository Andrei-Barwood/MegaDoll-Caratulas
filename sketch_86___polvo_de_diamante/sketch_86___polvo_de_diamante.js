function setup() {
    createCanvas(3000, 3000);
    background('#71A2CD');
    noLoop();
}

function draw() {
    let colors = ['#6EA3D3', '#ADCCEA', '#82DEF4', '#FFFFFF'];
    stroke('#B7E0FA');
    strokeWeight(24);
    noFill();

    for (let i = 0; i < 12; i++) {
        let col = random(colors);
        fill(col);
        
        let x1 = random(width);
        let y1 = random(height);
        let x2 = x1 + random(-1800, 800);
        let y2 = y1 + random(-1800, 800);
        let x3 = x1 + random(-1800, 800);
        let y3 = y1 + random(-1800, 800);

        triangle(x1, y1, x2, y2, x3, y3);
    }
}
