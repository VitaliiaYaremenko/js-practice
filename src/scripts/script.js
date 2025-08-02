'use strict';


//Task - 1

const userName = prompt('What is your name?', '');
const userSurname = prompt('Write your surname, please', '');
const userLocation = prompt('Where do you live?', 'Odessa');

alert(`Hello ${userName} ${userSurname} \nYou live in ${userLocation}`);
alert('Hello' + userName + userSurname + '\nYou live in' + userLocation);

//Task - 2

const number = 55555;
const convertNumberToString = number.toString();
console.log(typeof convertNumberToString);

const firstNumber = convertNumberToString[0];
const secondNumber = convertNumberToString[1];
const thirdNumber = convertNumberToString[2];
const fourthNumber = convertNumberToString[3];
const fifthNumber = convertNumberToString[4];

alert(`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber} ${fifthNumber}`);

