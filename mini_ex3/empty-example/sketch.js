var song;
var myFont;
function preload (){
  img = loadImage ('assets/coffee.png');
   song = loadSound('assets/Afternoon.mp3');
   myFont = loadFont('assets/prisma.ttf');
}

function setup() {
 createCanvas(600, 600);
 frameRate (7);  //The speed of the rotation
 song.loop();
 // Text setup
 textFont(myFont);
 textSize(90);
}

function draw() {
 noStroke();
 fill(54,79,108, 80);  //The aplha value decides the pattern/shades of the cup
 rect(0, 0, width, height); //The rect keeps on drawinf itself, which creates the pattern.
 //text
 fill('#073468');
  text('Enjoy a cup', 30, 100);
  text('of coffee', 70, 250);
  text('while you', 50, 400);
  text('wait!', 160, 550);
 drawThrobber(20); //This value descides the speed of the rotation and hereby the hap between the cup(s)
}

function drawThrobber(num) {
  push();
  translate(width/3.4, height/3.4);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the ellipse
  var circle = 360/num*(frameCount%num);
  rotate (radians(circle));
  noStroke();
  fill(2,30,200);
push();
translate(80,80);
/*If don't roate the circle radians negatively as well as positively,
the cup would also roate around it self while rotation around the center of the circle*/
rotate(radians(-circle));
    image(img,80,80,80,80);
    pop();
  pop();

}
