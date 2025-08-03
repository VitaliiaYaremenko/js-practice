'use strict';

//Task - 1

const student = {
    name: 'Viktor',
    age: 20,
    grade: 85,
};

student.grade = 95;
student.course = 'Frontend Basic'

// Task - 2

const book = {
    title: 'Гарри Поттер и Кубок огня',
    author: 'Джоан Кэтлин Роулинг ',
    year: 2000,
};

book.publisher = {name: 'Стив Робинс', location: 'New York'};

// Task - 3

const movie = {
    title: 'Финч',
    director: 'Мигель Сапочник',
    year: 2021,
    genre: 7.3,
};

for(let key in movie) {
    console.log(`Властивість: ${key} \nЗначення: ${movie[key]}`)
}

//Task - 4;

const person1 = {
    name: 'Alice',
    age: 24,
};

const person2 = {
    name: 'Alice',
    age: 24,
};


let isEqual = true;

const keysPerson1 = Object.keys(person1);
console.log(keysPerson1);

const keysPerson2 = Object.keys(person2);
console.log(keysPerson2);

if (keysPerson1.length !== keysPerson2.length) {
    isEqual = false;
    console.log(isEqual);
} else {
    for (let key in person1) {
        if (person1[key] !== person2[key]) {
            isEqual = false;
            break;
        }
    }
}

console.log(isEqual);
