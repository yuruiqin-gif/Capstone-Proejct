// Capstone Project
// Yurui Qin
// CS30
// Lewis Dot Structure Game

let currentElement = ' ';
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


//for snapping controls of Lewis Dot game
let electrons = [];
let snapDistance = 30;
let bondDistance = 20;

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
  else if (gameState === 'game' && gameLevel === 0){
    bohrGame();
  }
  else if (gameState === 'game' && gameLevel === 1){
    lewisGame();
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

function bohrGame(){
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

function lewisGame() {
  noFill();
  background(255);
  translate(width / 2, height / 2);

  // Draw ring
  stroke(0);
  circle(0, 0, 200);

  // Draw electrons
  for (let electron of electrons) {
    electron.show();
    electron.drag();
  }

  // drawLewisDotStructure(currentElement, electronTotal);
  checkForBondsAndSnapping();

  textSize(16);
  textAlign(LEFT, TOP);
  text('Total Electrons: ' + electronTotal, 10 - width / 2, 10 - height / 2);
  text('Correct: ' + correct, 10 - width / 2, 50 - height / 2);
  text('Incorrect: ' + incorrect, 10 - width / 2, 70 - height / 2);

  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentElement, 0, -(height / 3) - 25); // Display the current element

  if (frameCount % 60 == 0 && timer > 0) {
    timer--;
  }
  if (timer == 0) {
    if (correct > highScore) { // Updating the high score
      highScore = correct;
    }
    gameState = 'end';
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, (width / 2) - 200, (height / 2) - 50);
}

function checkForBondsAndSnapping() {
  for (let i = 0; i < electrons.length; i++) {
    for (let j = i + 1; j < electrons.length; j++) {
      let d = dist(electrons[i].x, electrons[i].y, electrons[j].x, electrons[j].y);
      if (d < snapDistance) {
        electrons[i].snapToElectron(electrons[j]);
        stroke(0);
        line(electrons[i].x, electrons[i].y, electrons[j].x, electrons[j].y);
      }
    }
  }
}

function drawLewisDotStructure(element, electrons) {
  let positions = [
    { x: -20, y: -40 }, // Top left
    { x: 20, y: -40 },  // Top right
    { x: 40, y: -20 },  // Right top
    { x: 40, y: 20 },   // Right bottom
    { x: 20, y: 40 },   // Bottom right
    { x: -20, y: 40 },  // Bottom left
    { x: -40, y: 20 },  // Left bottom
    { x: -40, y: -20 }  // Left top
  ];

  for (let i = 0; i < electrons; i++) {
    let pos = positions[i % 8];
    let x = pos.x;
    let y = pos.y;
    circle(x, y, 25);
  }
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
    generateProblem();
  } 
  else if(gameState === 'game' && gameLevel === 0){
let currentShell = shells[shells.length - 1];
    if(currentShell.length < shellMax[shells.length-1]) {
      currentShell.push(1);
    } 
    else {
      rad.push(rad[rad.length - 1] + 50); // Increase radius for new shell
      shells.push([1]);
    }
    electronTotal++;
  }
  else if(gameState === 'game' && gameLevel === 1){
    if (dist(mouseX, mouseY, width / 2, height / 2) < 100 + 20) {
      let angle = atan2(mouseY - height / 2, mouseX - width / 2);
      let electron = new Electron(angle);
      electrons.push(electron);
      electronTotal++;
    }
  }
  else if (gameState === 'end') {
    gameState = 'menu';
    correct = 0;
    incorrect = 0;
    timer = 60;
    shells = [[]];
    electronTotal = 0;
  }
}

function mouseReleased() {
  for (let electron of electrons) {
    electron.stopDragging();
  }
}

function mouseDragged() {
  for (let electron of electrons) {
    if (electron.isMouseOver()) {
      electron.startDragging();
      break;
    }
  }
}

function keyPressed(){
  if (key == ' ' && gameState === 'game'){
    checkAnswer();
    if (gameLevel === 1) {
      electrons = [];
      electronTotal = 0;
    }
  }
}

function generateProblem(){ //For Bohr Model Level
    if (gameLevel === 0){
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
  else if (gameLevel === 1){ //For Lewis Dot Structure Level
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
      elementElectron = 1;
    }
    else if(currentElement == 'Na'){
      elementElectron = 2;
    }
    else if(currentElement == 'Be'){
      elementElectron = 3;
    }
    else if(currentElement == 'Mg'){
      elementElectron = 4;
    }
    else if(currentElement == 'O'){
      elementElectron = 5;
    }
    else if(currentElement == 'S'){
      elementElectron = 6;
    }
    else if(currentElement == 'F'){
      elementElectron = 7;
    }
    else if(currentElement == 'Cl'){
      elementElectron = 8;
    }
    else if(currentElement == 'He'){
      elementElectron = 1;
    }
    else if(currentElement == 'Ne'){
      elementElectron = 2;
    }
    else if(currentElement == 'Ar'){
      elementElectron = 3;
    }
    else if (currentElement == 'Si') {
      elementElectron = 4;
    } 
    else if (currentElement == 'P') {
      elementElectron = 5;
    } 
    else if (currentElement == 'S') {
      elementElectron = 6;
    } 
    else if (currentElement == 'Cl') {
      elementElectron = 7;
    } 
    else if (currentElement == 'Ar') {
      elementElectron = 8;
    }
  }
}

function checkAnswer() {
  if(gameLevel === 0){
    if(electronTotal == elementElectron){
      textSize(16);
      textAlign(CENTER, CENTER);
      text('correct!', 0, -(height / 3));
      correct++;
    }
    else{
      incorrect++;
    }
    generateProblem();
    shells = [[]];
    electronTotal = 0;
  } 
  else if(gameLevel === 1){
    if (electronTotal === elementElectron) {
      textSize(16);
      textAlign(CENTER, CENTER);
      text('Correct!', 0, -(height / 3));
      correct++;
    } 
    else {
      incorrect++;
    }
    generateProblem();
    electronTotal = 0;
  }
}

class Electron {
  constructor(angle) {
    this.angle = angle; // Angle position on the ring
    this.radius = 10;
    this.dragging = false;
    this.x = 100 * cos(angle);
    this.y = 100 * sin(angle);
  }

  show() {
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  isMouseOver() {
    let d = dist(mouseX - width / 2, mouseY - height / 2, this.x, this.y);
    return d < this.radius;
  }

  startDragging() {
    this.dragging = true;
  }

  stopDragging() {
    this.dragging = false;
    this.snapToRing();
  }

  drag() {
    if (this.dragging) {
      let dx = mouseX - width / 2;
      let dy = mouseY - height / 2;
      this.angle = atan2(dy, dx);
      this.updatePosition();
    }
  }

  snapToRing() {
    this.x = 100 * cos(this.angle);
    this.y = 100 * sin(this.angle);
  }

  updatePosition() {
    this.x = 100 * cos(this.angle);
    this.y = 100 * sin(this.angle);
  }

  snapToElectron(otherElectron) {
    // Calculate the direction vector from the other electron
    let dx = this.x - otherElectron.x;
    let dy = this.y - otherElectron.y;
    let distance = dist(this.x, this.y, otherElectron.x, otherElectron.y);
    
    // Normalize the direction vector
    dx /= distance;
    dy /= distance;
    
    // Place this electron next to the other electron
    this.x = otherElectron.x + (this.radius + otherElectron.radius) * dx;
    this.y = otherElectron.y + (this.radius + otherElectron.radius) * dy;
  }
}