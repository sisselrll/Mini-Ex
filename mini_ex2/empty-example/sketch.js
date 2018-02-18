var x = 0;
var t = 0;
function setup() {
  // put setup code here
createCanvas(700,400);

}

function draw() {
// The road
  background(11, 14, 111);
  noStroke();
  fill(200);
  rect(0, 340, 700, 60);
//( x, y, w, h)
  fill(255);
  // For loop. Tells that the first rect should start at 5 and not be bigger than 700.
for (var i = 5; i < 700; i += 100){
  rect(i, 365, 50, 10);
}

// The start and stop button
fill(255);
rect(0, 0, 700, 40);
// "buttons"/rectangles
// Start
stroke(50, 200, 20);
fill(255);
rect (200, 6, 65, 30);
// Stop
stroke(200, 50, 50);
fill(255);
rect (385, 6, 65, 30);

//text
noStroke();
textSize(18);
fill(50, 200, 50);
text("Start",213,25);

textSize(18);
fill(200, 50, 50);
text("Stop",400,25);

  //The car
  beginShape();
  noStroke();
  fill (244, 236, 26, 90);
  //(x1, y1, x2, y2, x3, y3)
  push(); // create a common 0 / starting point for all units until next pop.
  translate(x,0);
  triangle(293, 293, 360, 250, 360, 330);
  fill(0);
  ellipse (150, 330, 40, 40);
  ellipse (240, 330, 40, 40);
  fill(152, 54, 47);
  rect (100, 270, 200, 50, 60);
  ellipse (200, 265, 120, 80);
  endShape(CLOSE);
  pop();
  // loop car
  if (x > 600){
    x = -300;
  }
  // Move car (!= means "not equal")
  if (t != 0){
    x = x + t;
  }
}

// Helps finding the coordinates
function mousePressed() {
  //console.log(mouseX, mouseY);
  // Check if start button is pressed
  //the value 0 is assigned to var t, so that you can stop the car.
  if ((200 < mouseX) & (mouseX < 264) & (10 < mouseY) & (mouseY < 36)){
    console.log('Start pressed');
    t = 0;
  }
  // Check if stop button is pressed
    /*the value 2 is assigned to var t, so that you can start the car.
     As soon as the value is over 0, the car will start. the bigger the value,
     the higher the tempo. */
  else if ((388 < mouseX) & (mouseX < 451) & (8 < mouseY) & (mouseY < 36)){
    console.log('Stop pressed');
    t = 2;
  }
}
