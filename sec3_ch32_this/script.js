// Lecture 32. The this keyword

console.log(this);

calculateAge(1985);

function calculateAge(year) {
    console.log(2016-year)
    console.log(this)
}



var john = {
    name: 'John', 
    yearOfBirth: 1990, 
    calculateAge: function () {
        // john context object
        console.log(this);
        console.log(2016-this.yearOfBirth);

        function innerFunction() {
            // global object
            console.log(this);
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike', 
    yearOfBirth: 1984
};


// method borrow... 
mike.calculateAge = john.calculateAge;
mike.calculateAge();

