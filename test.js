function yearOfBirth(age) {
  let yearOfBirth = (2017 - age);
  return (yearOfBirth);
}

function whoAmI(name, age) {
  let yob = yearOfBirth(age);
  console.log('Hi, my name is Chris and I\'m 29 years old');
  console.log('I was born in ' + yob);
}

whoAmI('Wade',27);