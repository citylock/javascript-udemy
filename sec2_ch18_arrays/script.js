// Lecture 18. Arrays


var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

// how to access array data.. 
console.log(names[0]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');    // add data at the end 
john.unshift('Mr.');  // add data at the first
john.pop();           // take the last data out from the list
john.shift();         // take the first data out from the list
console.log(john);


// indexOf method.. go get location
alert(john.indexOf('Smith'));

if (john.indexOf('teacher') === -1) {
    console.log('John is NOT a teacher');
}