// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

let startButton;
let easyMode;

var timerValue = 10;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);

  textSize(100);
  text('Lewis Dot Sim', (windowWidth/2)-200, 300);
  //Intro Screen Button
  startButton = createButton("Click To Start");
  startButton.mousePressed(GameStart);
  // startButton.style("font-family", "Optima bold");
  startButton.style("font-size", "30px");
  startButton.position(windowWidth/2, windowHeight/2);
}

function draw() {
}

function GameStart() {
  background(237, 39, 36);
  startButton.remove();

  textSize(100);
  fill(220);
  text('Chose your level', (windowWidth/2)-300, 300);

 //Mode selection scene
  easyMode = createButton("EASY");
  easyMode.mousePressed(playEasy);
  easyMode.style("font-size", "30px");
  easyMode.position(windowWidth/2, windowHeight/2);
}

function timer(){
  textAlign(CENTER, CENTER);
  textSize(100);
  text(timerValue, width/2, height/2);
  while(timerValue != 0){
    if (frameCount % 60 == 0 && timerValue > 0){
      timerValue -= 1;
    }
  }
  if (timerValue == 0){
    text('FINISHED',50,50);
  }
}

function playEasy() { //Easy Mode
  background(220);
  easyMode.remove();
  timer();
  //chemical formulas
  let carbonDioxide = "";
}

// var timerValue = 100;
// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(255);
//   textAlign(CENTER, CENTER);
//   textSize(100);
//   text(timerValue, width/2, height/2);
//   if (frameCount % 60 == 0 && timerValue > 0){
//     timerValue -= 1;
//   }
//   if (timerValue == 0){
//     text('FINISHED',width/2, height/2);
//   }
// }