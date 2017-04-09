// Lecture 19. Objects


// example of Array
var arr = [1,2,3];
arr[0];


// Object 
var john = {
    name: 'John', 
    lastName: 'Smith', 
    yearOfBirth: 1990, 
    job:'teacher', 
    isMarried: false
}; 

console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

// data mutation
john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane['isMarried'] = true;

console.log(jane);