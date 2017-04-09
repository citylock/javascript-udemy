// Lecture 19. Objects


// Object : v1.0
var john = {
    name: 'John', 
    lastName: 'Smith', 
    yearOfBirth: 1990, 
    job:'teacher', 
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'], 
    // function expression
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }

}; 

console.log(john);
console.log(john.family[2]);

// calculateAge ===> Method
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);

// object v2.0
var jane = {
    name: 'Jane', 
    lastName: 'Smith', 
    yearOfBirth: 1950, 
    job:'teacher', 
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'], 
    // function expression
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }

}; 

jane.calculateAge()
console.log(jane);
