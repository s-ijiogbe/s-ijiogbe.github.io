let cnv;

function setup() {
    cnv = createCanvas(900, 600);
    cnv.parent('canvas-container');
    background(20);
    noStroke();
}


function draw() {
    fill(20, 20, 20, 5);
    rect(0, 0, width, height);

    if (mouseIsPressed) {
        let radius = random(10, 40);
        let r = map(mouseX, 0, width, 100, 255);
        let g = map(mouseY, 0, height, 100, 255);
        let b = map(mouseX + mouseY, 0, width + height, 150, 255);
        fill(r, g, b, 180);
        ellipse(mouseX, mouseY, radius);
    }
}
