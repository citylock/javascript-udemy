// Lecture 12. IF/ELSE statements


var name = 'John'; 
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}


isMarried = false;

if (isMarried = false) {
  console.log('YES!');
} else {
  console.log('NO!');
}


// compare == & === 

if (23 == '23') {
  // type coercion
  console.log('Using == , Something to print... ');
}


// using === is better and safer.. 
if (23 === '23') {
  // type coercion
  console.log('Using ===, Something to print... ');
}

