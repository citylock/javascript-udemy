// Lecture 14. coding challenge

var heightJohn = 170;
var heightFriend = 178;
var ageJohn = 35;
var ageFriend = 27;

var scoreJohn = heightJohn + ( ageJohn * 5);
var scoreFriend = heightFriend + (ageFriend * 5);

console.log('Score for John: ' + scoreJohn);
console.log('Score for Friend: ' + scoreFriend);

if (scoreJohn > scoreFriend) {
  console.log('John wins with ' + scoreJohn + ' score');
} else if (scoreJohn < scoreFriend) {
  console.log('His friend wins with ' + scoreFriend + ' score');
} else {
  console.log('They have the same score!!! - ' + scoreJohn + ' score');
}
