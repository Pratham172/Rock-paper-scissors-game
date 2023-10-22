let score= JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  tie:0
};
updateScoreElement();
/*
if(!score){
score = {
  wins:0,
  losses:0,
  tie:0
};
}
*/
function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';
if(randomNumber >=0 && randomNumber < 1 / 3){
  computerMove = 'rock';
}else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
  computerMove = 'paper';
}else if(randomNumber >= 2 / 3 && randomNumber < 1 ){
  computerMove = 'scissors';
}
return computerMove;
  
}
let isAutoPlaying = false;
let intervalId;
function autoPlay(){
    if(!isAutoPlaying){
    intervalId = setInterval(function(){
        const playerMove = pickComputerMove();
        playGame(playerMove);
    },2000);
    isAutoPlaying = true;
    }else{
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
    
}

function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';

if(playerMove === 'rock'){
  if(computerMove === 'rock'){
  result = 'Tie';
}else if(computerMove === 'paper'){
  result = 'You lose';
}else if(computerMove === 'scissors'){
  result = 'You won';
}
}
else if(playerMove === 'paper'){
if(computerMove === 'rock'){
result = 'You win';
}else if(computerMove === 'paper'){
result = 'Tie';
}else if(computerMove === 'scissors'){
result = 'You lose';
}
}
else if(playerMove === 'scissors'){
  if(computerMove === 'rock'){
result = 'You lose';
}else if(computerMove === 'paper'){
result = 'You win';
}else if(computerMove === 'scissors'){
result = 'Tie';
}
}
if(result === 'You win'){
score.wins += 1;
}
else if(result === 'You lose'){
score.losses += 1;
}
else if(result === 'Tie'){
score.tie += 1;
}
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();

document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML= `You
<img class="move-icons" src="images/${playerMove}.png" >
<img class="move-icons" src="images/${computerMove}.png" >
Computer `;

}

function updateScoreElement(){
document.querySelector('.js-score')
 .innerHTML = `Wins: ${score.wins} || Losses: ${score.losses} || Tie: ${score.tie}`;
}
