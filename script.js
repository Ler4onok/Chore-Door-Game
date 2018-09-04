var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var startButton = document.getElementById('start');

var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

var numClosedDoors = 3;

var openDoor1;
var openDoor2;
var openDoor3;

var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

var currentlyPlaying = true;

isBot = (door) =>{
  if (door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }
}


isClicked = (door) =>{
  if (door.src === closedDoorPath){ //the door is closed
    return false;
  }
  else{
    return true;
  }
}

playDoor = (door) =>{
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }
  else if (isBot(door) === true){
    gameOver();
  }
}


doorImage1.onclick = () => {
 
   if(!isClicked(doorImage1) && currentlyPlaying === true){ //decrement only if was clicked once
      doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
  
}

doorImage2.onclick = () => {
 
  if(!isClicked(doorImage2) && currentlyPlaying === true){
     doorImage2.src = openDoor2;
     playDoor(doorImage2);
  }
  
}
doorImage3.onclick = () => {
  
  if(!isClicked(doorImage3) && currentlyPlaying === true){
    doorImage3.src = openDoor3;
     playDoor(doorImage3);
  }
}


gameOver = (str) =>{
  currentlyPlaying = false;
  if (str === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }
  else{
      startButton.innerHTML = 'Game over! Play again?';
  }
  
}

const randomChoreDoorGenerator = () =>{
 var choreDoor = Math.floor(Math.random() *numClosedDoors);

 if(choreDoor === 1){
 openDoor1 = botDoorPath;
 openDoor2 = beachDoorPath;
 openDoor3 = spaceDoorPath;
  
}
else if (choreDoor === 2){
  openDoor2 = botDoorPath;
  openDoor3 = beachDoorPath;
  openDoor1 = spaceDoorPath;
  
}
else{
  openDoor3 = botDoorPath;
  openDoor1 = beachDoorPath;
  openDoor2 = spaceDoorPath;
 
}
}

startButton.onclick = () =>{
  if(!currentlyPlaying){
     startRound();
  }
 }

startRound = () =>{
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

randomChoreDoorGenerator();
startRound();










