// Lecture 30. Hoisting 

calculateAge(1965);
// function declaration 
function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1965);
// function express
var retirement = function(year) {
    console.log(65 - (2016-year));
}

// variable 


console.log(age);
var age = 23;
console.log(age);

function foo() {
    console.log(age);       // age - undefined yet
    var age = 65;
    console.log(age);       // age - 65  => foo excution context 
}

foo();
console.log(age);           // age - 23  => global excution context


