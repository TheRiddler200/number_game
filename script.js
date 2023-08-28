'use strict';


let secret_number = Math.trunc(Math.random() * 20) + 1;
//let secret_number = 11;
let highscore = 0;

//make a function for display message
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


//user score
let score = 20;

const again_button = document.querySelector('.btn-again');

const secret_number_model = document.querySelector('.number');
const score_element = document.querySelector('.score');
const check_button = document.querySelector('.check');
const guess_Box = document.querySelector('.guess');
const message = document.querySelector('.message');

// function expression for check button
const x = function() {
    let guess_number = guess_Box.value.trim(); // Trim whitespace
    secret_number_model.textContent = '?';


    if (!guess_number) {
        console.log('No value entered; please enter a number.');
        //message.textContent = '🟡 Enter A Number...';
        displayMessage('🟡 Enter A Number...');
    } else if (parseInt(guess_number) === secret_number) {
        console.log('Correct Number');
        //message.textContent = '🟢 Correct Number';
        displayMessage('🟢 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        secret_number_model.textContent = guess_number;

    } else if (guess_number !== secret_number) {

        if (score > 1){
            score--;
            message.textContent = guess_number > secret_number ? '📈Too High!' : '📉Too Low!';
            console.log(score);
            score_element.textContent = score
        } else {
            //message.textContent = "💥You lost the game!";
            displayMessage("💥You lost the game!");
            score_element.textContent = 0;
        }

    // } else if (guess_number > secret_number){
    //     //when guess is too high
    //     if (score > 1){
    //         console.log("📈Too High!");
    //         score--;
    //         message.textContent = 'Too High!';
    //         console.log(score);
    //         score_element.textContent = score
    //     } else {
    //         message.textContent = "💥You lost the game!"
    //         score_element.textContent = 0;
    //     }

    // } else if (guess_number< secret_number) {
    //     //when guess is too low
    //     if (score > 1){
    //         console.log("📉Too Low!");
    //         score--;
    //         console.log(score);
    //         message.textContent = 'Too Low!';
    //         score_element.textContent = score
    //     } else {
    //         message.textContent = "💥You lost the game!";
    //         score_element.textContent = 0;

    //     }



    }
};

// challenge implement a fames rest function al


//function expression for the again button




check_button.addEventListener('click', x);

again_button.addEventListener('click', function () {
    score = 20;
    secret_number_model.textContent = '?';
    secret_number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = 'lightseagreen';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    score_element.textContent = score



});

console.log(secret_number);

