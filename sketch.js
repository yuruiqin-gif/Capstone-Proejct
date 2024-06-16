// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

let shells = [[]];
let shellMax = [2,8,18,32];
let rad = [100];
let electronTotal = 0;
let elementElectron = 0; //number of electrons in current element

let correct = 0;
let incorrect = 0;

let gameState = 'menu';
let timerState = false;

function setup(){
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  noFill();
}

function draw(){
  background(255);

  if (gameState === 'menu'){
    menu();
  } 
  else if (gameState === 'game'){
    game();
  }
}

function menu(){
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Electron Configuration Game', width / 2, height / 2 - 50);
  textSize(24);
  text('Click to Start', width / 2, height / 2);
}

function timer()[
  if (frameCount % 60 == 0 && timer > 0){
    timer--;
  }
  if (timer == 0){
    timerState = !timerState;
  }
]

function game(){
  noFill();
  background(255);
  translate(width/2, height/2);
  circle(0, 0, 10, 10);

  for(i = 0; i < shells.length; i++){
    let shellRadius = rad[i];
    circle(0,0,shellRadius * 2, shellRadius * 2);

    for(let j = 0; j < shells[i].length; j++){
      let angle = TWO_PI / shells[i].length * j;
      let x = shellRadius * cos(angle);
      let y = shellRadius * sin(angle);
      circle(x,y,10,10)
    }
  }

  textSize(16);
  textAlign(LEFT, TOP);
  text('Total Electrons: ' + electronTotal, 10 - width / 2, 10 - height / 2);

  textSize(16);
  textAlign(LEFT, TOP);
  text('Correct: ' + correct, 10 - width / 2, 50 - height / 2);

  textSize(16);
  textAlign(LEFT, TOP);
  text('Incorrect: ' + incorrect, 10 - width / 2, 70 - height / 2);

  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentElement, 0, -(height / 3)-25); // Display the current element
}

function mousePressed(){
  let currentShell = shells[shells.length - 1];

  if(gameState == 'menu') {
    gameState = 'game';
    generatePromblem();
  } 
  else{

    if(currentShell.length < shellMax[shells.length-1]) {
      currentShell.push(1);
    } else {
      // let radius = 30 + 50 * shells.length;
      // shells.push(radius);
      rad.push(rad[rad.length - 1] + 50); // Increase radius for new shell
      shells.push([1]);
    }
    electronTotal++;
  }
}

function keyPressed(){
  if (key == ' '){
    checkAnswer();
  }
}

function generatePromblem(){
  let elements = ['H', 'Li', 'Na', 'Be','Mg','O','S','F','Cl','He','Ne','Ar'];
  for (let i = elements.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [elements[i], elements[j]] = [elements[j], elements[i]];
  }
  currentElement = elements[0];

  if(currentElement == 'H'){
    elementElectron = 1;
  }
  else if(currentElement == 'Li'){
    elementElectron = 3;
  }
  else if(currentElement == 'Na'){
    elementElectron = 11;
  }
  else if(currentElement == 'Be'){
    elementElectron = 4;
  }
  else if(currentElement == 'Mg'){
    elementElectron = 12;
  }
  else if(currentElement == 'O'){
    elementElectron = 8;
  }
  else if(currentElement == 'S'){
    elementElectron = 16;
  }
  else if(currentElement == 'F'){
    elementElectron = 9;
  }
  else if(currentElement == 'Cl'){
    elementElectron = 17;
  }
  else if(currentElement == 'He'){
    elementElectron = 2;
  }
  else if(currentElement == 'Ne'){
    elementElectron = 10;
  }
  else if(currentElement == 'Ar'){
    elementElectron = 18;
  }
}

function checkAnswer() {
  if(electronTotal == elementElectron){
    textSize(16);
    textAlign(CENTER, CENTER);
    text('correct!', 0, -(height / 3));
    correct++;
  }
  else{
    incorrect++;
  }
  generatePromblem();
  shells = [[]];
  electronTotal = 0;
}