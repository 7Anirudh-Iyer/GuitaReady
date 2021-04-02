let yoohoo
let i,final,done,x = 40,f

function preload(){
  final = loadSound("beat.mp3")
}

function setup() {
  createCanvas(windowWidth, 500);
}

function draw() {
  background(220);

  rectMode(CENTER)
  line(40, windowHeight / 2, windowWidth - 40, windowHeight / 2)
  
  if(mouseIsPressed){
    x = mouseX
  }

  map(x,0,100,0,10)
  
  i = x-40
  f = 60/i
  
  rect(x, windowHeight / 2, 10,40)
  text(i + 'bpm', windowWidth / 2, 100)
  
}

function yayhoo(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  rect(this.x, this.y, this.width, this.height)
}

var timerID = setInterval(function() {
  console.log(f)  
}, f * 1000);