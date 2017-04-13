// lecture 54. 
// Object.create

var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}; 

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


// other way. 
var jane = Object.create(personProto, 
{
    name: { value: 'Jane'},
    yearOfBirth: { value: '1969'}, 
    job: {value: 'designer'}
}); 

