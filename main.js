//Game values

let min = 1,
    max = 10,
    winningNum = Math.floor(Math.random()*11),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message'),
      title = document.querySelector('.title');

minNum.textContent = min;
maxNum.textContent = max;


guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`)
  }

  if(guess === winningNum){
    //Disable input
    guessInput.disabled = true;
    title.style.color = 'green';
    setMessage(`The winning number is ${winningNum}`);

  }else{
    guessesLeft -= 1;
    if(guessesLeft === 0){
      guessInput.disabled = true;
      title.style.color = 'gray';
      setMessage(`You lost the winning number is ${winningNum}`)
    }else{
      title.style.color = 'gray';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)

    }
  }
})

function setMessage (msg){
  message.textContent = msg;
  message.style.textAlign = 'center';
}
