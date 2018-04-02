var data1;
var data2;
var i=-1;
var n=0;
var x=225;
var distance = 0;
var y =["1936", "1946", "1956", "1966", "1976", "1986", "1996", "2006", "2018"];

function preload() {
  img1 = loadImage ('com.png');
  img2 = loadImage ('mac.png');
  img3 = loadImage('command.png');
  img4 = loadImage('word.png');
  img5 = loadImage('enviroment.png')
  data1 = loadJSON ('words.json');
  data2 = loadJSON ('binary.json');
}

function setup () {
  createCanvas (1100, 700);
  background(255);
  frameRate(6);

  var words = data1.words;
  var numbers = data2.number;


  // //enviroment
  image(img5,0,0,1100,700);
  // fill(255,240,210);
  // quad(0,410,1099,410,1100,581,0,581);

  // Old pc
  image(img1, 30, 350, 400, 300);
  // fill(0);
  // rect(205,273,161,128);
  // New Mac
  image(img2, 700, 350, 350, 290);
  //old command
  image(img3,218,390,100,70);
  //new word document
  image(img4,730,370,285,170);

  //Timeline

  stroke(0);
  strokeWeight(2);
  translate(0,-40);
  line(50,150,1050,150);
  for (var i = 50; i < 1053; i += 125){
    rect(i, 135, 1, 30);
    }
  noStroke();
  textSize(14);
  for (var i = 0; i < y.length; i ++){
    text(y[i], 35+distance, 120);
    distance = distance+ 125;
  }



}

function draw () {





//text for poem
if(n%8==0){
  push();
  fill(255);
  noStroke();
  rect(792,403,161,110);
  pop();
  i=i+1;

  textSize(30);
  textAlign(CENTER);
  fill(0);
  text(data1.words[i], 874,467);

}

//numbers for binarycode
push();
translate(0,10);
fill(0,255,0);
textSize(15);
  text(data2.number[n],x,400);
  pop();
  n++;
  x=x+10;
  if (n%8 == 0) {
    x=225;
    translate(0,10);
    fill(0);
    rect(219,388,90,60);
  }

}

  function mousePressed () {
    console.log (mouseX, mouseY);
  }
