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
  computerMove = 'Rock';
}else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3){
  computerMove = 'Paper';
}else if(randomNumber >= 2 / 3 && randomNumber < 1 ){
  computerMove = 'Scissors';
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

if(playerMove === 'Rock'){
  if(computerMove === 'Rock'){
  result = 'Tie';
}else if(computerMove === 'Paper'){
  result = 'You lose';
}else if(computerMove === 'Scissors'){
  result = 'You won';
}
}
else if(playerMove === 'paper'){
if(computerMove === 'Rock'){
result = 'You win';
}else if(computerMove === 'Paper'){
result = 'Tie';
}else if(computerMove === 'Scissors'){
result = 'You lose';
}
}
else if(playerMove === 'scissors'){
  if(computerMove === 'Rock'){
result = 'You lose';
}else if(computerMove === 'Paper'){
result = 'You win';
}else if(computerMove === 'Scissorss'){
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
