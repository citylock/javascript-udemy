// Lecture 11.Operator

// reference link : http://codingheroes.io/resources/
// operator precedence table : https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


var now = 2016; 
var birthYear = now - 26;

birthYear = now - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
// ageJohn = ageMark = 26
// ageJohn = 26

ageJohn++;
// ageJohn = ageJohn + 1;

ageMark *= 2;
// ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);




