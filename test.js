'use strict';

function yearOfBirth(age) {
  if (age < 0) {
    throw 'exception';
  }
  else {
    return 2017 - age;
  }
}

function validate(name,age) {
  if (!name && !age) {
    console.error('Arguments are not valid');
  }
}

function typeCheck(name,age) {
  if (typeof(name) !== 'string' && typeof(age) !== 'number') {
    
}

function whoAmI(name, age) {
  validate(name, age)
  typeCheck(name, age)
  let yob = yearOfBirth(age);
  console.log('Hi, my name is Chris and I\'m 29 years old');
  console.log('I was born in ' + yob);
}

try {
  whoAmI('Wade',-27);
}

catch (e) {
  throw new Error('Age cannot be negative');
}