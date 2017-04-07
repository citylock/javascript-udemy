// Lecture 10. Variable Mutation and Type Coercion.
/*
    A. Variable 2
*/

var name = 'John';
var age = 26;

// Type coercion : change type of variable on the fly
// console.log(name + age);

// console.log(age+age);

var job, isMarried;
// console.log(job);

job = 'teacher';
isMarried = true;

console.log(name + " is a " + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');


// Variable Mutation
age = 'thirty six';
job = 'driver';

console.log(name + " is a " + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// input variable from user..
var lastName = prompt("What is the last name?");
console.log(lastName);


alert(name + " is a " + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');
