var hr;
var mn;
var sc;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
    background(0);
    //Translation and rotation
    translate(200, 200);
    rotate(-90);
    hr = hour();
    mn = minute();
    sc = second();
    scAngle = map(sc, 0, 60, 0, 360);
    push();
    rotate(scAngle);
    stroke('green');
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop()
    mnAngle = map(mn, 0, 60, 0, 360);
    push();
    rotate(mnAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 70, 0);
    pop()
    hrAngle = map(hr % 12, 0, 12, 0, 360);
    push();
    rotate(hrAngle);
    stroke('white');
    strokeWeight(7);
    line(0, 0, 50, 0);
    pop()
    strokeWeight(10);
    noFill();
    stroke('green');
    arc(0, 0, 300, 300, 0, scAngle);
    stroke('red');
    arc(0, 0, 270, 270, 0, mnAngle);
    stroke('white');
    arc(0, 0, 250, 250, 0, hrAngle);
  drawSprites();
}
