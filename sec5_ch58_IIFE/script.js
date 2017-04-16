
// =====================================================================
// Lecture 58. IIFE : DATA Privacy


// IIFE - cannot access any variable from outside. 
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5 );    
})();

// Cannot access 
// console.log(score);

(function(goodLock) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLock );    
})(5);










