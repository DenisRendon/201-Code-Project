'use strict';

function guessingGame() {
  let siteVisitor = prompt('Hello. What is your name?');

  alert(`Welcome, ${siteVisitor}.\n\nTime for a fun facts quiz!\n\nPlease answer the following questions with Yes [Y/Yes] or No [N/No].`);

  let questionOne = prompt('Do I have a dog named Thor?').toLowerCase();

  if (questionOne === 'yes' || questionOne === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  } else if (questionOne === 'no' || questionOne === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }

  let questionTwo = prompt('Was I in the Army?').toLowerCase();

  if (questionTwo === 'no' || questionTwo === 'n') {
    // console.log('Correct!');
    alert('Correct!');
  } else if (questionTwo === 'yes' || questionTwo === 'y') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }

  let questionThree = prompt('Do I ride dirtbikes and motorclyes?').toLowerCase();

  if (questionThree === 'yes' || questionThree === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  } else if (questionThree === 'no' || questionThree === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }

  let questionFour = prompt('Have I put Vince McMahon in a headlock before?').toLowerCase();

  if (questionFour === 'yes' || questionFour === 'y') {
    // console.log('Correct!');
    alert('Correct!');
  } else if (questionFour === 'no' || questionFour === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }

  let questionFive = prompt('Do I have a lab full of minions under my house?').toLowerCase();

  if (questionFive === 'yes' || questionFive === 'y') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  } else if (questionFive === 'no' || questionFive === 'n') {
    // console.log('Correct!');
    alert('Correct');
  } else {
    // console.log('That was an invalid response!')
    alert('That was an invalid response!');
  }
  let myNumber = 30;

  for (let i = 0; i < 4; i++) {
    let questionSix = parseInt(prompt('Guess a number I am thinking of'));

    if (questionSix === myNumber) {
      // console.log('Incorrect!');
      alert('You are correct!');
      i = 4;
    } else if (questionSix > myNumber) {

      alert('To high');
    } else if (questionSix < myNumber) {

      alert('To low');
    }
  }

  let favColors = ['purple', 'black', 'grey', 'blue'];


  for (let i = 0; i < 6; i++) {
    let questionSeven = prompt('Guess my favorite color');

    for (let j = 0; j < favColors.length; j++) {

      if (questionSeven === favColors[j]) {
        alert('Love these colors');
        i = 6;
        break;


      }
      questionSeven === favColors;



      alert(`Here are all my fav colors: ${favColors}`);
    }

  }
}
guessingGame();
