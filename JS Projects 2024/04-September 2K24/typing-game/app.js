const digits = [
    '125648','156489','854796','785469','282536','154789','478898',
    '777777','789666','141458'];

const score = document.querySelector('#score');
const timer = document.querySelector('#timer');
const digit = document.querySelector('#digit');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const paragraph = document.querySelector('p');
// a variable for the score.
let counter = 1;
// a variable for the timer.
let time = 6;

// Game construction.
alert('Typing Game : try to type the numbers below as fast as you can ! ');

// Main function.
function typeGame(){
    if(input.value === digit.textContent){
    score.innerHTML = counter++;
    score.style.color = 'green';
    digit.textContent = digits[Math.floor(Math.random() * digits.length)];
    input.value = '';
    time = 6;
    }
    else{
        let alertScore = counter - 1;
       alert('Incorrect Game Over ! SCORE : ' + alertScore);
       score.innerHTML = 0;
       score.style.color = white;
       input.value = '';
       time = 6;
   }
}
// Btn click Event .
    btn.addEventListener('click', typeGame);

// countdown Timer.
    function decreaseTime(){
        if(time === 0){
            time = 6;
            input.value = '';
            let alertScore = score.innerHTML;
            alert('Time Ended ! SCORE : ' + alertScore);
            score.innerHTML = 0;
        }
        timer.innerHTML = time--;
    }
    setInterval(decreaseTime,1000);

    // Submit using Enter key.
    input.addEventListener('keydown', event =>{
        if(event.key === 'Enter'){
            typeGame();
        }
    });
   