// Lecture 21. Loop & Iteration


for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length-1;i >= 0 ; i--) {
    console.log(names[i]);
}

// while loop
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// for, while -- break
for (var i=1; i <=5; i++) {
    console.log(i);

    if (i === 3) { 
        break;
    }
}

// for,while -- continue
for (var i=1; i <=5; i++) {

    if (i === 3) { 
        continue;
    }

    console.log(i);

}

