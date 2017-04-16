
// =====================================================================
// Lecture 60. Bind Call and Apply

var john = { 
    name: 'John', 
    age: 26, 
    job: 'teacher', 
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay
            + ', Ladies and Gentleman!! I\'m '
            + this.name + ', I\'m a ' + this.job 
            + this.age + ' years old.');
        } else if (style ==='friendly') {
            console.log('Hey! What\'s up? ' 
            + 'I\'m ' + this.name 
            + ', I\'m a ' + this.job 
            + 'and I\'m ' + this.age + ' years old' 
            + 'Have a nice ' + timeOfDay + '.');
        }
    }
}

john.presentation('formal', 'morning');


var emily = {
    name: 'Emily',
    age: 35, 
    job: 'designer'
};

// mothod borrowing using call function
john.presentation.call(emily, 'friendly', 'afternoon');

 
// john.presentation.apply(emily, ['friendly', 'afternoon']);


// bind - copy function with preset argument.. 
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



