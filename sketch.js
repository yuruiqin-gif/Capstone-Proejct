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

let highScore = 0;
let gameState = 'menu';

let timer = 60;
let timerState = false;
let gameLevel;

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
  else if (gameState === 'timerChoice'){
    timerChoice();
  }
  else if (gameState === 'levelChoice'){
    levelChoice();
  }
  else if (gameState === 'game'){
    game();
  }
  else if (gameState === 'end'){
    endScreen();
  }
}

function menu(){
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Electron Configuration Game', width / 2, height / 2 - 50);
  textSize(24);
  text('Click to Start', width / 2, height / 2);
}

function timerChoice(){
  textSize(32);
  textAlign(CENTER, TOP);
  text('Choose Your Time Limit', width / 2, height / 2 - 50);
  textSize(24);
  text('1 Minute', width / 2, height / 2);
  text('2 Minutes', width / 2, height / 2 + 30);
  text('3 Minutes', width / 2, height / 2 + 60);
}

function levelChoice(){
  textSize(32);
  textAlign(CENTER, TOP);
  text('Choose Your Time Limit', width / 2, height / 2 - 50);
  textSize(24);
  text('EASY (Bhor Configuration)', width / 2, height / 2);
  text('HARD (Lewis Dot Configuration)', width / 2, height / 2 + 30);
}

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

  if(frameCount % 60 == 0 && timer > 0){
    timer--;
  }
  if (timer == 0){
    if(correct > highScore){ //updating the high score
      highScore = correct;
    }
    gameState = 'end';
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, (width / 2)-200, (height / 2)-50);
}

function endScreen(){
  background(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  text('Game Over', width / 2, height / 2 - 150);
  textSize(24);
  text('Correct: ' + correct, width / 2, height / 2 - 100);
  text('Incorrect: ' + incorrect, width / 2, height / 2 - 50);
  text('High Score: ' + highScore, width / 2, height / 2);
  text('Click to Restart', width / 2, height / 2 + 50);
}

function mousePressed(){
  let currentShell = shells[shells.length - 1];

  if(gameState === 'menu'){
    gameState = 'timerChoice'
  }
  else if(gameState === 'timerChoice'){
    if (mouseY > height / 2 && mouseY < height / 2 + 30) {
      timer = 60; // 1 Minute
    } else if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
      timer = 120; // 2 Minutes
    } else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 90) {
      timer = 180; // 3 Minutes
    }
    gameState = 'levelChoice'
  }
  else if(gameState === 'levelChoice') {
    if (mouseY > height / 2 && mouseY < height / 2 + 30) {
      gameLevel = 0; //game level is for Bhor level
    } else if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
      gameLevel = 1; //game level is for Lewis Dot level
    }
    gameState = 'game';
    generatePromblem();
  } 
  else if(gameState == 'game'){

    if(currentShell.length < shellMax[shells.length-1]) {
      currentShell.push(1);
    } 
    else {
      // let radius = 30 + 50 * shells.length;
      // shells.push(radius);
      rad.push(rad[rad.length - 1] + 50); // Increase radius for new shell
      shells.push([1]);
    }
    electronTotal++;
  }
  else if (gameState == 'end') {
    gameState = 'menu';
    correct = 0;
    incorrect = 0;
    timer = 60;
    shells = [[]];
    electronTotal = 0;
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