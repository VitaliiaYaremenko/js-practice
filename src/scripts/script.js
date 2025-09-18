'use strict';

// Task - 1

const firstInput = prompt(`Write please the first number:`, '' );
const secondInput = prompt(`Write please second number :`, '');

let sum = null;

if(firstInput === null || secondInput === null) {
    throw new Error('Please put the number');
}

const firstUserNumber = Number(firstInput);
const secondUserNumber = Number(secondInput);


if(Number.isFinite(firstUserNumber) && Number.isFinite(secondUserNumber)) {
    sum = firstUserNumber + secondUserNumber;

    alert(`${firstUserNumber} + ${secondUserNumber} = ${sum}`);
} else {
    throw new Error('Pun the number please');
}

