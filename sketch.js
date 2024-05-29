// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

let startButton;
let easyMode;

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

function playEasy() { //Easy Mode

  //chemical formulas
  let carbonDioxide = "";
}