// Lecture 31. Scoping 

var a = 'Hello!';

first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        // console.log(a+ b+ c);
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a+ b+ c+d);
}

