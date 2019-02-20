// var firstName='Peter';
// var lastName='Rabbit';
// var age = 125;
// console.log(firstName + " " + lastName + " is " + age + " years old.");

// var favFood = prompt('What is his favorite food to steal?');
// console.log(favFood);


/*************************************************
 * Coding Challenge 1
 */

// var markMass, johnMass;
// markMass = 72;
// johnMass = 90;

// var markHeight, johnHeight;
// markHeight = 1.73;
// johnHeight = 1.81;

// var markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// var result = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? " + result);


/*************************************************
 * if / else statements
 */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried === true) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }


// var markMass, johnMass;
// markMass = 72;
// johnMass = 90;

// var markHeight, johnHeight;
// markHeight = 1.73;
// johnHeight = 1.81;

// var markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// // var result = markBMI > johnBMI;
// // console.log("Is Mark's BMI higher than John's? " + result);

// if (markBMI > johnBMI) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }


/*************************************************
 * Boolean logic
 */

var firstName = 'Nauman';
var age = 27;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age > 12 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age > 19 && age < 31) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}


/*************************************************
 * Ternary Operator
 */

var firstName = 'Nauman';
var age = 29;

age > 22 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks lemonade.');

var drink = age > 22 ? 'beer' : 'lemonade';
console.log(drink);


/*************************************************
 * Switch Statements
 */

var job = 'developer';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches literature.');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Chicago.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


/*************************************************
 * Truthy and Falsy Values
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}


/*************************************************
 * Equality Operators
 */

if (height == '23') {
    console.log('The == operator does type coercion!');
}


/*************************************************
 * Coding Challenge 2
 */

var scoresJohn = [89,120,103];
var scoresMike = [116,94,123];
var scoresMary = [97,134,105];

var arr = [];
var sum = 0;
function findAvg (arr) {
    sum = arr[0] + arr[1] +arr[2];
    avg = sum / 3;
    return avg;
}

var avgJohn = findAvg(scoresJohn);
var avgMike = findAvg(scoresMike);
var avgMary = findAvg(scoresMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log("John has the highest average score.");
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log("Mike has the highest average score.")
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log("Mary has the highest average score.")
} else {
    console.log("Looks like there's a three-way tie.")
}


/*************************************************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageNauman = calculateAge(1988);
var ageShehzad = calculateAge(1993);
var ageAsad = calculateAge(1976);

console.log(ageNauman, ageShehzad, ageAsad);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years.')
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1988, 'Nauman');
yearsUntilRetirement(1993, 'Shehzad');
yearsUntilRetirement(1976, 'Asad');
*/

/*************************************************
 * Function Statements and Expressions
 */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an Uber around Chicago';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('technician', 'Nauman'));
console.log(whatDoYouDo('engineer', 'Shehzad'));
console.log(whatDoYouDo('teacher', 'Asad'));


/*************************************************
 * Arrays
 */

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Nauman';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John IS NOT a designer' : 'John IS a designer';
console.log(isDesigner);


/*************************************************
 * Coding Challenge 3
 */

// var arr = [];
// function restaurantTips (arr) {
//     for (var i=0; i<arr.length; i++) {
//         if (arr[i] < 50) {
//             tip = arr[i] * .2
//         } else if (arr[i] > 50 && arr[i] < 200) {
//             tip = arr[i] * .15
//         } else {
//             tip = arr[i] * .1
//         }
//     }
//     return tip;
// };

// console.log(restaurantTips ([124, 48, 268]));

/* ^above didn't work */

function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2],]

console.log(tips, finalValues);
// console.log(finalValues);


/*************************************************
 * Objects and properties
 */

// Object literal
var batman = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    birthYear: 1939,
    entourage: ['Robin', 'Alfred', 'Batgirl', 'Nightwing'],
    job: 'crimefighter',
    isMarried: false
};

console.log(batman);
console.log(batman.entourage);
console.log(batman['job']);
var x = 'birthYear';
console.log(batman[x]);

batman.job = 'superhero';
batman['isMarried'] = true;
console.log(batman);

// new Object syntax
var talia = new Object();
talia.firstName = 'Talia';
talia.birthYear = 1971;
talia['lastName'] = 'al-Ghul';
console.log(talia);


/*************************************************
 * Objects and methods
 */

var batman = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    birthYear: 1939,
    entourage: ['Robin', 'Alfred', 'Batgirl', 'Nightwing'],
    job: 'crimefighter',
    isMarried: false,
    // 'this' keyword
    calcAge: function() {
        // return 2019 - this.birthYear;
        this.age = 2019 - this.birthYear;
    }
};

// console.log(batman.calcAge());
batman.calcAge();
console.log(batman);


/*************************************************
 * Coding Challenge 4
 */

// var markMass, johnMass;
// markMass = 72;
// johnMass = 90;

// var markHeight, johnHeight;
// markHeight = 1.73;
// johnHeight = 1.81;

// var markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(johnBMI);

// var result = markBMI > johnBMI;

// console.log("Is Mark's BMI higher than John's? " + result);


var mark = {
    name: 'Mark',
    mass: 72,
    height: 1.73,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}

mark.calcBMI();
console.log(mark);


var john = {
    name: 'John',
    mass: 90,
    height: 1.81,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
    }
}

john.calcBMI();
console.log(john);


if (mark.bmi > john.bmi) {
    console.log("Mark\'s BMI is greater than that of John\'s.")
} else if (mark.bmi < john.bmi) {
    console.log("John\'s BMI is greater than that of Mark\'s.")
} else {
    console.log("Mark and John have the same BMI.")
}


/*************************************************
 * Loops and iteration
 */

// for (var i=0; i<10; i++) {
//     console.log(i);
// }

// for (var i=1; i<20; i+=2) {
//     console.log(i);
// }

/*
var john = ['John', 'Smith', 1990, 'teacher', false];
// for (var i=0; i<john.length; i++) {
//     console.log(john[i]);
// }

var i = 0;
while (i<john.length) {
    console.log(john[i]);
    i++;
}
*/


// continue and break statements
var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i=0; i<john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i=0; i<john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// Looping backwards
for (var i=john.length-1; i>=0; i--) {
    console.log(john[i]);
}