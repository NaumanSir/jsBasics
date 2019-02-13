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
    console.log(avg);
}

var avgJohn = findAvg(scoresJohn);
var avgMike = findAvg(scoresMike);
var avgMary = findAvg(scoresMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log("John has the highest average score.")
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log("Mike has the highest average score.")
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log("Mary has the highest average score.")
}
