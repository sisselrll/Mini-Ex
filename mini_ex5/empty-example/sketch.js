//When you define proporties of an object, you also leave some out.
// When you say "you have a square view upon things" it can mean that your view is simplified and less nuanced
let boxes = [];
var s;

function preload (){
  bg = loadImage('bg.jpg');
  myFont1 = loadFont('boxy.ttf');
  myFont2 = loadFont('marlboro.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  drawText();

  s = second();
  add();
}

function drawText(){
  //text
  fill(0);
  noStroke();
  textFont(myFont1);
  textSize(36);
  text('This is so square', 30, 50);
  textFont(myFont2);
  textSize(30);
  noStroke();
  text('Try clicking the squares to open them up',30, 90);
}
// Every second a new box is added to the canvas
function draw() {
  if(second() >= (s + 1)) {
    s = second();
    if (s >= 59) {
      s = 0;
    }
    else {
      add();
    }
  }
}

//Create box and add to list of boxes(array) and draw it!
function add () {
  append (boxes, new firkant(color(random(0,255), random(0,255), random(0,255)), random(0,windowWidth), random(120, windowHeight), random(70,200)));
  // You always start from 0, therefor we want the boxes.lenght -1
  boxes[boxes.length - 1].display();
}

// When mousepress, let boxes check if they are hit
function mousePressed () {
  background(bg);
  drawText();
  // Loop (check) over all amount of created boxes
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].slet(mouseX, mouseY);
    boxes[i].display();
  }
}

class firkant {
  constructor (getcolor, xpos, ypos, size) {
    // Initiate the box
    this.getcolor = getcolor;
    this.pos = new createVector(xpos, ypos);
    this.size = size;
    this.clicked = false;
  }

  //Displaying method
  display () {
    stroke(0);
    strokeWeight(4);
    // If box has been clicked, redraw only frame
    if (this.clicked) {
      noFill();
    }
    // Else draw the entire box
    else {
      fill(this.getcolor);
    }
    rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  // Checking if box has been clicked before. If is has been clicked the color should not draw again.
  slet (x, y) {
    if ((x > this.pos.x) &&
        (x < (this.pos.x + this.size)) &&
        (y > this.pos.y) &&
        (y < (this.pos.y + this.size))) {
          this.clicked = true;
        }
    }
}
