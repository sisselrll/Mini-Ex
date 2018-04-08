var clouds = [];

var weather;

var imgCloud;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=6b7f725f428ed8b35efefeffe23bfe27'
var units = '&units=metric';

var cloudSize = 120;
var canvasSize = [900, 500]

var input;

function preload () {
  imgCloud = loadImage('cloud.png')
}

function setup () {
  createCanvas (canvasSize[0], canvasSize[1]);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  // Delete old clouds (resets array)
  clouds = [];

  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

// Function to manage the API data input, resolves double click
function gotData(data) {
  weather = data;

  if (data) { //her er forloopet som laver alle skyerne efter parametrene fra JSON filen
    for (let i = 0; i < weather.clouds.all; i++) {
      // Random between the canvas size, subtracted the image size to keep clouds within bounds
      var x = random(20, canvasSize[0] - cloudSize);
      var y = random(10, canvasSize[1] - cloudSize);
      // Pick a random starting direction from array
      clouds[i] = new Cloudy (x, y, random([-1, 1]) * weather.wind.speed);
    }
  }
  console.log(data)
}

function draw() {
  background(150, 200, 255);
  print(clouds.length);
  for (let p = 0; p < clouds.length; p++) {
    clouds[p].move();
    clouds[p].show();
  }
}

class Cloudy { //classen med skyerne
  constructor (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move () {
    this.x = this.x + this.speed;
    if (this.x < 0) {
      // -this.speed makes the obejcts move back on the x axis when reaching the end of canvas
      this.speed = - this.speed;
    } else if (this.x > canvasSize[0] - cloudSize) {
      this.speed = - this.speed; //men det duer så ikke når de rammer den anden side
    }
  }
  show () {
    image(imgCloud, this.x, this.y, cloudSize, cloudSize);
  }
}
