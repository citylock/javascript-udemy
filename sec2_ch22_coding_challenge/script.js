// Lecture 22. coding challenge two. 

/* 
1. Create an array with some years where persion were born. 
2. Create an empty array ( just [])
3. Use a loop to fill the array with the ages of the person
4. Use another loop to log into the console whether each person is of full age ( 18 or older), as well as their age. 

*/

var years = [2001, 1985, 1994, 2014, 1973]; 
var ages = [];

for (var i = 0; i < years.length; i++) {
    ages[i] = 2016 - years[i]; 
}

for (i = 0; i < ages.length; i++) {
    if ( ages[i] >= 18) {
        console.log(years[i] + ' year is more then 18yr :' + ages[i] + ' age');
    } else {
        console.log(years[i] + ' year is less then 18yr :' + ages[i] + ' age');
    }
}



function printFullAge(dob) {
    var age = [];
    var fullAges = [];

    for(var i=0; i < dob.length; i++) {
        age[i] = 2016 - dob[i];
    }

    for (var i=0; i< age.length; i++) {
        if ( age[i] >= 18) {
            console.log('Person ' + (i +1) + ' is ' + age[i] + ' years old, and is of full age..');
            fullAges.push(true);
        } else {
            console.log('Person ' + (i +1) + ' is ' + age[i] + ' years old, and is NOT of full age..');
            fullAges.push(false);
        }
    }
    return fullAges;
}

var dob = [1965, 2008, 1992];

var full_1 = printFullAge(dob);
var full_2 = printFullAge([2012, 1915, 1999]);

console.log(full_1);
console.log(full_2);

