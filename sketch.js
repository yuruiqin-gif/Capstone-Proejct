// Electron Configuration Game (Capstone Project)
// Yurui Qin.
// CS30
// June.24, 2024
// Program to allow users to practice placing electrons on a Bhor Model or on a Lewis Dot Model
// Users plays with mouse and space bar interactions.

let currentElement = ' '; //current question

//variables for the electron shells (Bohr Model)
let shells = [[]];
let shellMax = [2,8,18,32];
let rad = [100];

let electronTotal = 0; //number of electrons user placed
let elementElectron = 0; //number of electrons in current element

let correct = 0; //User's number of correct and incorrect answers
let incorrect = 0;
let highScore = 0;

let gameState = 'menu'; //switches between "screens" of game

//timer variables
let timer = 60;
let timerState = false;

let gameLevel; //activates Bohr or Lewis game


//for snapping controls of Lewis Dot game
let electrons = [];
let snapDistance = 30;
let bondDistance = 20;

//background images
function preload(){
  title = loadImage("images/Program Background.png");
  lewisTitle = loadImage("images/Lewis Background.png");
  bohrTitle = loadImage("images/Bohr Background.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  noFill();
}

function draw(){ //draws the "screen" of the game
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

function menu(){ //intro screen
  background(title);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text('Electron Configuration Game', width / 2, height / 2 - 50);
  textSize(24);
  text('Click to Start', width / 2, height / 2);
}

function timerChoice(){ //timer selection
  background(title);

  textSize(32);
  textAlign(CENTER, TOP);
  text('Choose Your Time Limit', width / 2, height / 2 - 50);
  textSize(24);
  text('1 Minute', width / 2, height / 2);
  text('2 Minutes', width / 2, height / 2 + 30);
  text('3 Minutes', width / 2, height / 2 + 60);
}

function levelChoice(){ // level selection
  background(title);

  textSize(32);
  textAlign(CENTER, TOP);
  text('Choose Your Level', width / 2, height / 2 - 50);
  textSize(24);
  text('EASY (Bhor Model)', width / 2, height / 2);
  text('HARD (Lewis Dot Model)', width / 2, height / 2 + 30);
}

function bohrGame(){ 
  background(bohrTitle);

  noFill();
  translate(width/2, height/2);
  circle(0, 0, 10, 10);

  for(i = 0; i < shells.length; i++){
    let shellRadius = rad[i];
    circle(0,0,shellRadius * 2, shellRadius * 2); //creating shells for the atom

    for(let j = 0; j < shells[i].length; j++){ //placing the electrons onto the shell
      let angle = TWO_PI / shells[i].length * j;
      let x = shellRadius * cos(angle);
      let y = shellRadius * sin(angle);
      circle(x,y,10,10)
    }
  }

  //for info displayed to user
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

  if(frameCount % 60 === 0 && timer > 0){
    timer--; //updating timer
  }
  if (timer === 0){
    if(correct > highScore){ //updating the high score
      highScore = correct;
    }
    gameState = 'end'; //switch to end screen if timer hits 0
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, (width / 2)-200, (height / 2)-50);
}

function lewisGame() {
  background(lewisTitle);

  noFill();
  translate(width / 2, height / 2);
  // Draw ring
  stroke(0);
  circle(0, 0, 200);

  // Draw electrons
  for (let electron of electrons) {
    electron.show();
    electron.drag();
  }

  checkForBondsAndSnapping(); //checks to see if electrons are close enough to bond

  //for info displayed to user
  textSize(16);
  textAlign(LEFT, TOP);
  text('Total Electrons: ' + electronTotal, 10 - width / 2, 10 - height / 2);
  text('Correct: ' + correct, 10 - width / 2, 50 - height / 2);
  text('Incorrect: ' + incorrect, 10 - width / 2, 70 - height / 2);

  textSize(32);
  textAlign(CENTER, CENTER);
  text(currentElement, 0, -(height / 3) - 25); // Display the current element

  if (frameCount % 60 === 0 && timer > 0) {
    timer--; //updating timer
  }
  if (timer === 0) {
    if (correct > highScore) { // Updating the high score
      highScore = correct;
    }
    gameState = 'end'; //switch to end screen if timer hits 0
  }

  textAlign(CENTER, CENTER);
  textSize(100);
  text(timer, (width / 2) - 200, (height / 2) - 50);
}

function checkForBondsAndSnapping() { //checks to see if electrons are close enough to bond
  for (let i = 0; i < electrons.length; i++) {
    for (let j = i + 1; j < electrons.length; j++) {
      let d = dist(electrons[i].x, electrons[i].y, electrons[j].x, electrons[j].y);
      if (d < snapDistance) {
        electrons[i].snapToElectron(electrons[j]); //creates bond
        stroke(0);
        line(electrons[i].x, electrons[i].y, electrons[j].x, electrons[j].y);
      }
    }
  }
}

function endScreen(){ //displays how the user did that round
  background(title);

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
  if(gameState === 'menu'){
    gameState = 'timerChoice'
  }
  else if(gameState === 'timerChoice'){ //sets timer to user's choice
    if (mouseY > height / 2 && mouseY < height / 2 + 30) {
      timer = 60; // 1 Minute
    } 
    else if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
      timer = 120; // 2 Minutes
    } 
    else if (mouseY > height / 2 + 60 && mouseY < height / 2 + 90) {
      timer = 180; // 3 Minutes
    }
    gameState = 'levelChoice'
  }
  else if(gameState === 'levelChoice') { //sets level to user's choice
    if (mouseY > height / 2 && mouseY < height / 2 + 30) {
      gameLevel = 0; //game level is for Bhor level
    } 
    else if (mouseY > height / 2 + 30 && mouseY < height / 2 + 60) {
      gameLevel = 1; //game level is for Lewis Dot level
    }
    gameState = 'game';
    generateProblem();
  } 
  else if(gameState === 'game' && gameLevel === 0){ //mouse press lets user place electron for Bohr model game 
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
  else if(gameState === 'game' && gameLevel === 1){ //mouse press lets user drag and drop electron for Lewis model game 
    if (dist(mouseX, mouseY, width / 2, height / 2) < 100 + 20) {
      let angle = atan2(mouseY - height / 2, mouseX - width / 2);
      let electron = new Electron(angle);
      electrons.push(electron);
      electronTotal++;
    }
  }
  else if (gameState === 'end') { //resets game
    gameState = 'menu';
    correct = 0;
    incorrect = 0;
    timer = 60;
    shells = [[]];
    electronTotal = 0;
  }
}

function mouseReleased() { //if user lets go of mouse, then electron is placed for Lewis model
  for (let electron of electrons) {
    electron.stopDragging();
  }
}

function mouseDragged() { //lets user drag electron in Lewis model
  for (let electron of electrons) {
    if (electron.isMouseOver()) {
      electron.startDragging();
      break;
    }
  }
}

function keyPressed(){ //space bar submits user's answer's to be checked.
  if (key === ' ' && gameState === 'game'){
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
    for (let i = elements.length - 1; i > 0; i--) { //randomizes the elements list
      let j = Math.floor(Math.random() * (i + 1));
      [elements[i], elements[j]] = [elements[j], elements[i]]; 
    }
    currentElement = elements[0];

    if(currentElement === 'H'){ //sets elements to the number of electrons they have
      elementElectron = 1;
    }
    else if(currentElement === 'Li'){
      elementElectron = 3;
    }
    else if(currentElement === 'Na'){
      elementElectron = 11;
    }
    else if(currentElement === 'Be'){
      elementElectron = 4;
    }
    else if(currentElement === 'Mg'){
      elementElectron = 12;
    }
    else if(currentElement === 'O'){
      elementElectron = 8;
    }
    else if(currentElement === 'S'){
      elementElectron = 16;
    }
    else if(currentElement === 'F'){
      elementElectron = 9;
    }
    else if(currentElement === 'Cl'){
      elementElectron = 17;
    }
    else if(currentElement === 'He'){
      elementElectron = 2;
    }
    else if(currentElement === 'Ne'){
      elementElectron = 10;
    }
    else if(currentElement === 'Ar'){
      elementElectron = 18;
    }
  }
  else if (gameLevel === 1){ //For Lewis Dot Structure Level
    let elements = ['H', 'Li', 'Na', 'Be','Mg','O','S','F','Cl','He','Ne','Ar'];
    for (let i = elements.length - 1; i > 0; i--) {//randomizes the elements list
      let j = Math.floor(Math.random() * (i + 1));
      [elements[i], elements[j]] = [elements[j], elements[i]];
    }
    currentElement = elements[0];
  
    if(currentElement === 'H'){ //sets elements to the number of valence electrons they have
      elementElectron = 1;
    }
    else if(currentElement === 'Li'){
      elementElectron = 1;
    }
    else if(currentElement === 'Na'){
      elementElectron = 1;
    }
    else if(currentElement === 'Be'){
      elementElectron = 2;
    }
    else if(currentElement === 'Mg'){
      elementElectron = 2;
    }
    else if(currentElement === 'O'){
      elementElectron = 6;
    }
    else if(currentElement === 'S'){
      elementElectron = 6;
    }
    else if(currentElement === 'F'){
      elementElectron = 7;
    }
    else if(currentElement === 'Cl'){
      elementElectron = 7;
    }
    else if(currentElement === 'He'){
      elementElectron = 2;
    }
    else if(currentElement === 'Ne'){
      elementElectron = 8;
    }
    else if(currentElement === 'Ar'){
      elementElectron = 8;
    }
    else if (currentElement === 'Si') {
      elementElectron = 4;
    } 
    else if (currentElement === 'P') {
      elementElectron = 5;
    } 
    else if (currentElement === 'S') {
      elementElectron = 6;
    } 
    else if (currentElement === 'Cl') {
      elementElectron = 7;
    } 
    else if (currentElement === 'Ar') {
      elementElectron = 8;
    }
  }
}

function checkAnswer() {
  if(gameLevel === 0){ //for Bohr model
    if(electronTotal === elementElectron){ //for correct answer, increase score of "correct" and vise-versa
      textSize(16);
      textAlign(CENTER, CENTER);
      text('correct!', 0, -(height / 3));
      correct++;
    }
    else{
      incorrect++;
    }
    generateProblem(); //resets question
    shells = [[]];
    electronTotal = 0;
  } 
  else if(gameLevel === 1){ //for Lewis model
    if (electronTotal === elementElectron) {//for correct answer, increase score of "correct" and vise-versa
      textSize(16);
      textAlign(CENTER, CENTER);
      text('Correct!', 0, -(height / 3));
      correct++;
    } 
    else {
      incorrect++;
    }
    generateProblem(); //resets question
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

  show() { //for the ring the electrons sit on
    fill(0);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
  }

  isMouseOver() { //sees if mouse hovers over a electron
    let d = dist(mouseX - width / 2, mouseY - height / 2, this.x, this.y);
    return d < this.radius;
  }

  startDragging() {
    this.dragging = true;
  }

  stopDragging() { //place electrons on ring, if user is not dragging them
    this.dragging = false;
    this.snapToRing();
  }

  drag() { //allows user to drag electrons 
    if (this.dragging) {
      let dx = mouseX - width / 2;
      let dy = mouseY - height / 2;
      this.angle = atan2(dy, dx);
      this.updatePosition();
    }
  }

  snapToRing() { //places electron onto ring
    this.x = 100 * cos(this.angle);
    this.y = 100 * sin(this.angle);
  }

  updatePosition() { //update position of electron
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
    
    // Place this electron next to the other electron if they are close enough
    this.x = otherElectron.x + (this.radius + otherElectron.radius) * dx;
    this.y = otherElectron.y + (this.radius + otherElectron.radius) * dy;
  }
}