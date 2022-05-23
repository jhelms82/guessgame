'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!';


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.check').textContent = 'yea dont';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    //If no number is selected
    if(!guess){
        document.querySelector('.message').textContent = 'No Number!';
    }
    //If you guess the number right
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'You got it right!';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //If guess is wrong
    else if (guess !== secretNumber){

                if (score > 1) {
        document.querySelector('.message').textContent =  
        guess > secretNumber ? 'Your guess is too high!' : 'Your guess is too low!';
        score--;
        document.querySelector('.score').textContent = score;
        } 
        else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.message').textContent = 0;
               }
    }


});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';



})

