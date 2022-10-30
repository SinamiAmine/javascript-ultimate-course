/* styling */
require('styles/main.scss');
/* js */
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Spread on Arrays');

const arrayOne = ['Marian', 'Anna', 'Alex'];
const arrayTwo = ['Said', 'Ismail', 'Aisha'];

const concatArray = [...arrayOne, ...arrayTwo];



arrayOne.forEach(function(name) {
  log(name);
});
//Output :  
//Marian
//Anna
//Alex
arrayTwo.forEach(function(name) {
  log(name);
});
//Output :  
//Said
//ISmail
//Aicha
concatArray.forEach(function(name) {
  log(name);
});

//Output : 
//Marian
//Anna
//Alex
//Said
//ISmail
//Aicha



const name = 'Marian';
const nameToArray = [...name];
nameToArray.forEach(function(letter) {
  log(letter);
});


//M
//A
//R
//I
//A
//N
const addNumbers = function(n1, n2, n3) {
  return n1 + n2 + n3;
}

const numbers = [1,5,19];

//const addition = addNumbers(numbers[0], numbers[1], numbers[2]);
const additionOne = addNumbers(numbers[0],  numbers[1],numbers[2]);
//Output : 15

const addition = addNumbers(...numbers);
//Output : 15


log(addition);
//Output : 