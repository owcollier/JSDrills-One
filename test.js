function yearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
  else {
    return 2017 - age;
  }
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log('Hi, my name is Chris and I\'m 29 years old');
  console.log('I was born in ' + yob);
}

try {
  whoAmI('Chris',-29);
}
catch (e) {
  throw new Error('Age cannot be negative');
}