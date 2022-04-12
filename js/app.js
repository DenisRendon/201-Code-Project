'use strict';

let score = 0;

function guessingGame() {
  let siteVisitor = prompt('Hello. What is your name?');

  alert(`Welcome, ${siteVisitor}.\n\nTime for a fun facts quiz!\n\nPlease answer the following questions with Yes [Y/Yes] or No [N/No].`);

  let questionOne = prompt('Do I have a dog named Thor?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  } else if (questionOne === 'no' || questionOne === 'n') {
    // console.log('Incorrect!');
    score++;

    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
}
guessingOne();

function guessingTwo() {
  let questionTwo = prompt('Was I in the Army?').toLowerCase();

  if (questionTwo === 'no' || questionTwo === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  } else if (questionTwo === 'yes' || questionTwo === 'y') {
    // console.log('Correct!');
    score++;
    alert('Correct!');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
}
// guessingTwo();

function guessingThree() {
  let questionThree = prompt('Do I ride dirtbikes and motorclyes?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    // console.log('Correct!');
    score++;
    alert('Correct!');
  } else if (questionThree === 'no' || questionThree === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
}
// guessingThree();

function guessingFour() {
  let questionFour = prompt('Have I put Vince McMahon in a headlock before?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    // console.log('Correct!');
    score++;
    alert('Correct!');
  } else if (questionFour === 'no' || questionFour === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
}
// guessingFour();

function guessingFive() {
  let questionFive = prompt('Do I have a lab full of minions under my house?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    // console.log('Incorrect!');
    score++;
    alert('Incorrect!');
  } else if (questionFive === 'no' || questionFive === 'n') {
    // console.log('Correct!');
    alert('Correct');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
  let myNumber = 14;

  for (let i = 0; i < 4; i++) {
    let questionSix = parseInt(prompt('Guess a number I am thinking of'));

    if (questionSix === myNumber) {
      // console.log('Incorrect!');
      score++;
      alert('You are correct!');
      i = 4;
    } else if (questionSix > myNumber) {

      alert('Too high');
    } else if (questionSix < myNumber) {

      alert('Too low');
    }
  }
}
// guessingSix();

function guessingSeven() {
  let favColors = ['purple', 'black', 'grey', 'blue'];
  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt('Guess my favorite color');

    for (let j = 0; j < favColors.length; j++) {

      if (questionSeven === favColors[j]) {
        alert('Great!');
        i = 6;
        score++;
        break;


      }
      questionSeven === favColors;




    }

  }
  alert(`Here are all my favorite colors: ${favColors}`);
}
guessingGame();

score(alert(`You got ${score} correct`));

