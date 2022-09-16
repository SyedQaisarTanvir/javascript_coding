
// Function hoisting

// Move the function declaration to the top


console.log("function with hoisting:",sum(5, 3));

function sum(value1, value2) {
    return value1 + value2;
}

// Otherwise your function look like this 

// function sum(number1, number2) {
//     return number1 + number2;
// } 

// console.log("Function without hoisting:",sum(3,4));

// Variables Hoisting

console.log(element);   // undefined
var element = 20;

// In javascript, variables only hoists declarations not initialization.
// Var => Undefined 
// let,const => Reference Error 


// let, var and const in Javascript

// var => Reassign the value but its scope is function level 
// let => Reassign the value but its scope is block level 
// const => Cannot Reassign the value and its scope is block level

function returnValue() {
    let sum = 0;
    for (var index = 0; index < 5; index++) {
        const element = index;
        var total = sum += index;
    }
    console.log(total);

}

returnValue();



function returnNumber() {
    let number = 10;
    console.log(number);
}

returnNumber();




function foo() {
    var x = 1;
    function bar() {
        console.log(y); // 2 (`y` is in scope)
      var y = 2;
      console.log(x); // 1 (function `bar` closes over `x`)
      console.log(y); // 1 (function `bar` closes over `x`)
    }
    bar();
    console.log(x); // 1 (`x` is in scope)
  }
  
  foo();




//   Class Hoisting

// You cannot hoist Class declarations or Class Expressions. Classes cannot be hoisted.....
// You cannot do this ....

// var dog = new Animal();

// class Animal {};

// You have to define the class before you can use it.


// Event loop in JS

// Job of event loop is that it checks that the stack is empty (is it is) then it takes the first thing from the ... 
// Task Queue and place it over the stack.


console.log('Hello');

// setTimeout(() => {
//     console.log('Greeting');
// }, 5000);


function greet() {
    console.log('Hello World!');
}



// Javascript is synchronous programming language, it has some functions like setTimeOut, Ajax functions....
// that shows asynchronous nature. So, Javascript is Synchronous language, we can make it asynchronous .....
// By using setTimeOut, Ajax functions.



// Conversion and Coersion
    // Coersion is implicit conversion While type conversion may be implicit or explicit...
// Implicit Conversion ==> Cersion

console.log("12"+2);
console.log("12"*2);
console.log("12"/2);
console.log("3"+true);
console.log("0"+true);
console.log("0" == true);
console.log("1" == true);
console.log(12/"6");
console.log("true" == true);
console.log("false" == false);


// types of conversion
    // 1- String
    // 2- Number
    // 3- Boolean

// Explicit Conversion

// For Boolean Remember Falsy Values
    // 1- NaN
    // 2- undefined
    // 3- null
    // 4- ""
    // 5- 0 
    // 6- false

let value1 = '12';
let value2 = 2;
let Sum = Number(value1) + value2;
console.log("Total:",Sum);

console.log(Boolean(value2));

// Primitive Types

// String , numbers, booleans , null , undefined , NaN , Symbol


let country = 'Pakistan';
console.log(typeof country);

let integerNumber = 41;
console.log(typeof integerNumber);

let floatNumber = 41.56;
console.log(typeof floatNumber);

let boolean = 5 > 2;
console.log(boolean);



// undefined is a variable that refers to something that doesn't exist,
//  and the variable isn't defined to be anything ........
// null is a variable that is defined but is missing a value


let k1 = Symbol();
let k2 = Symbol();

myobj = {};

myobj[k1] = 'Mission';
myobj[k2] = 'end';
myobj["Genre"] = 'Action';

// You cannot access values of k1 and k2 with . or bracket notation ....
// You can access them by using them as a variable

console.log(myobj[k1]);


// for-in loop ignores Symbols elements 
for(let key in myobj) {
    console.log(key, myobj[key]);
}



// Non primitives types 
    // 1- Objects
    // 2- Functions
    // 3- Arrays


// Object is the collection of key-value pairs.

let person = {
    name: 'Qaisar',
    age: 20,
    walk() {
        console.log('walk');
    },
    weight: '60kg'
};

for(let key in person) {
    console.log(key, person[key]);
}

// Factory Functions

function createMovie(name, releaseYear) {
    return {
        name,
        releaseYear,
        genre: 'Action',
        comments: 'Good'
    }
}

let firstmovie = createMovie('Mission Impossible', '2020');
console.log(firstmovie);



// Constructor Function


function CreateMovie1(name, releaseYear, comments) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.comments = comments;
}

let secondMovie = new CreateMovie1('Misssion Impossible 2', '2022', 'Good');
let thirdMovie = new CreateMovie1('Misssion Impossible 1', '2021', 'Bad');

console.log(secondMovie);
console.log(thirdMovie);



// Functons in js 

// Functions is set of code that perform a task or retuen a value.

function greeting() {
    console.log('Hello');
}

greeting();


function multiplication(value1 , value2) {
    return value1 * value2;
}
 
console.log(multiplication(3,4));



// Arrays in Javascript 

let counting = [1,2,3,4,5,6,7];

for (let count of counting) {
    console.log(count);
}


// slice, splice, includes, exclude, split, join, reverse, min, max
// map, reduce, filter


// pass by value vs pass by reference 

// By Value

let a = 4;
let b = a;

b+=5;

console.log(a);
console.log(b);


// BY reference


let obj = {
    name: 'Abc',
    password: 'abcd'
}

let obj2 = obj;

obj2.password = 'Hey';

console.log(obj);
console.log(obj2);



// Count Vowels letters in a string


function countVowels(stringArray, VowelsArray) {
    let count = 0;
    for(let string of stringArray) {
        if(VowelsArray.includes(string)) {
            count++;
        }
    }
    return count;
}
let inputArray = 'aeiou';
let vowelsInput = 'aeiou';
console.log(countVowels(inputArray,vowelsInput));


// function isPangram(string) {
//     for(let element of string) {
//         if(element >= 'a' || element >= 'A' && element <= 'z' || element <= 'Z') {
//             console.log('Given String is pangram')
//         }
//         else {
//             console.log('Given String is not pangram');
//         }
//     }
// }

// let stringInput = 'The quick brown fox jumps over the lazy dog';
// isPangram(stringInput);

const string = 'The quick brown fox jumps over the lazy dog';

function isPangram(string = '') {
    let output = [];
    string.toLowerCase();
    const length = string.length;
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetsArray = alphabets.split('');
    for (let element of string) {
        if(alphabetsArray.includes(element)) {
            output.push(element);
        }
    }

    let uniqueArray = [...new Set(output)];
    console.log(uniqueArray);
    console.log(uniqueArray.length);
    if(uniqueArray.length === 26) {
        console.log('Given String is Pangram');
    }

    else {
        console.log('Given String is not pangram');
    }
}



isPangram(string);





let array = [
    [1, 2],
    [3, 4],
    [5, 6,[7, 8, 9]],
    [10, 11, 12, 13, 14, 15]
];

let stringArray = array.toString();
console.log(stringArray);

let flatening = stringArray.split(',').join(',');
console.log(flatening);

flateningArray = flatening.split(',');
console.log(flateningArray);
// const flatening = array.reduce((accumulator,currentValue) => {
//     return accumulator.concat(currentValue);
// })


// const flatening = array.flat(1);

// console.log(flatening);

console.log(-3 === 3);

console.log('1' == 1);

console.log('1' === 1);



// function declaration vs function expression vs arrow functions


// FUNCTION DECLARATION
function greeting() {
    console.log('Hello Qaisar');
}





// FUNCTION EXPRESSION
let greets = function hello() {
    console.log('Hello World');
}

console.log(greets);





// Arrow functions with 1 parameter
let square = number => number*number;


// Arrow functions with 2 or 2 or more parameters 
let multiplications = ((value1 , value2) => {
    return value1*value2;
})

// Arrow function with no parameter

let name = () => {
    console.log('Qaisar');
}

console.log(name);


// THIS KEYWORD

// THIS REFERS TO THE OBJECT WHICH IT BELONGS TO...

// Alone this refers to the window object
console.log(this);


// IN A REGULAR FUNCTION THIS REFERS TO WINDOW OBJECT

function Sum1(value1, value2) {
    let total = value1 + value2;
    console.log("Sum of 2 numbers :",total);
    console.log(this);
}



// IF THIS IS IN A METHOD THEN THIS REFERS TO THE PARENT OBJECT

const person1 = {
    name: 'qaisar',
    age: 20,
    walk() {
        console.log('walk');
        console.log(this);
    }
}

// AS THIS IS IN WALK METHOD THIS REFERS TO THE PARENT WHICH IS PERSON OBJECT










// IN THIS EXAMPLE THIS IN THE CALLBACK FUNCTION DID NOT REFERS TO THE.....
// PERSON OBJECT BECAUSE CALLBACK FUNCTION IS NOT A METHOD IT'S A REGULAR FUNCTION.

const person2 = {
    name: 'Qaisar',
    age:20,
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title ,tag);
        })
    }
}

// Higher Order Functions 

// ARE THOSE WHICH TAKES ANOTHER FUNCTION AS A PARAMETER Or RETURN A FUNCTION

const interviewQuestions = (name) => {
    if(name == 'Qaisar') {
        return function(topic) {
            console.log(`Hi ${name}. Can you tell us about ${topic}?`);
        }
    if(name == 'Tanvir') {
        return function(topic) {
            console.log(`Hi ${name}. Can you explain ${topic}?`)
        }
    }
    }
}

interviewQuestions('Qaisar') ('Frontend Developer');


// Context 

// Execution context is the enviroment for executing and evaluating JS code.



// Closures

function outerFunction() {
    let value1 = 3;
    function innerFunction() {
        let value2 = 4;
        let total = value1 + value2;
        console.log(total);
    }
    innerFunction();
}

outerFunction();



let number = new Number("2");
console.log(number);

let getTheMultiplication = (array = []) => {
    let sum = 0;
    return array.forEach(function(element) {
        let multiplication = 1;
        multiplication *= element;
        return multiplication;
    })
}



function frequentMembers(array = []) {
    var count = 0;
    var maxFrequency = 1;
    var maxNumber;
    for(let i = 0; i < array.length; i++){
        for (let j = 1; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++;
            }
            if(maxFrequency < count) {
                maxFrequency = count;
                maxNumber = array[i];
            }
        }
        count = 0;
    }
    console.log(maxNumber + " occurs " + maxFrequency + " times");
}

const array1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
frequentMembers(array1);




// filter( (num) => num > 0 && num % parseInt(num) === 0 ) 

function squareNumberArray(array  = []) {
    return array.filter(function(value) {
        return value > 0 && value % parseInt(value) === 0;
    }).map(function(value) {
        return value * value;
    })
}

const array2 = [1,2,3,4, -3, -2.5, 3.2];
console.log(squareNumberArray(array2));


// Array from a given range

function arrayFromRange(min, max) {
    let outputArray = [];
    for(let i = min; i <= max; i++) {
        outputArray.push(i);
    }
    return outputArray;
}


console.log(arrayFromRange(-10, -4));


function include(searchingArray,searchElement) {
    for (let element of searchingArray) {
        if(element === searchElement) {
            return true;
        }
        return false;
    }
}

let numbers1 = [1,2,3,4];
console.log(include(numbers1,3));



function excludeFromArray(array,xcluded) {
    let outputArray = [];
    for(let element of array) {
        if(!xcluded.includes(element)) {
            outputArray.push(element);
        }
    }
    return outputArray;
}

let countArray = [1,2,3,4,5,6]
let excludedArray = [2,3,4];
console.log(excludeFromArray(countArray,excludedArray));




let movingArray = [1,2,3,4];
movingElementInArray(movingArray,0,0);

function movingElementInArray(array, index, offset) {

    let position = index + offset;
    if(position > array.length || position < 0) {
        console.error('Invalid Offset!');
        return;
    }


    const copiedArray = [...array];
    const element = copiedArray.splice(index,1);
    copiedArray.splice(index+offset,0,element);
    return copiedArray;
}



function countOccurance(array, searchElement) {
    let count = 0;
    for(let element of array) {
        if(element === searchElement) {
            count++;
        }
    }
    return count;
}

let array3 = [1,2,3,4,1,1];
console.log(countOccurance(array3,1));



function getMax(array) {
    let max = array[0];
    for(let element of array) {
        if(max < array[element]) {
            max = array[element];
        }
    }
    return max;
}

let array11 = [1,2,3,4,55]
console.log(getMax(array11));



const movies = [
    {title: 'a', releaseYear: 2017, ratings: 3.5},
    {title: 'b', releaseYear: 2019, ratings: 4.2},
    {title: 'c', releaseYear: 2020, ratings: 4.5},
    {title: 'd', releaseYear: 2019, ratings: 3.8}
];

// All movies in 2018 with rating > 4 
// Sort in Descending order by their ratings
// Pick their titles

const titles = movies
                .filter(movie => movie.releaseYear >= 2018 && movie.ratings > 4)
                .sort((a,b) => a.ratings - b.ratings)
                .reverse()
                .map(movie => movie.title);

console.log(titles);





// Promise is an object that tells that wether a certain event has completed successfully or not.
// 3 stages of promises 
    // 1- Pending
    // 2- Resolve/ Successfully Completed
    // 3- Reject/ Fail


// 2 ways to create promises 
    // 1- Promises with Object
    // 2- promises with Constructor


// If Promise successfully resolve then use resolve method and pass any parameter...
// If Promise not successfully resolve use the reject method and pass error message....


// We have to create seperate promises for every new task...
const promiseObject = new Promise((resolve,reject) => {

    setTimeout(() => {
        const roll_Number = [1,2,3,4,5];
        resolve(roll_Number);
        // reject('Error while communicating with API.');
    },2000)
})

const bioData = (indexData) => {
    return new Promise((resolve,reject) => {
        setTimeout((indexData) => {
            const personalData = {
                name: 'Qaisar',
                age: 20
            };
            resolve(`I am ${personalData.name} and I am ${personalData.age} years old.`);
        },2000, indexData)
    })
}



// By using then you can access the parameter value you pass in resolve function.
// With the help of catch function, we catch the error of reject function...

// Promises Consume ....
promiseObject.then((roll_Number) => {
    console.log(roll_Number);
    bioData(roll_Number[1]).then((personalData) => {
        console.log(personalData);
    })
}).catch((error) => {
    console.log(error);
})

// Promises methods are promiseObject.then, PromiseObject.catch and Promise.finally.....
// Above methods are used to produce promises.


// .then method is used when promise resolved/ Successfully Completed.


// Promises consume done y using async/await in comfortable way.

async function getData() {
    const firstPromise = await promiseObject;
    console.log(firstPromise);

    // const secondPromise = await bioData(roll_Number[1]);
    // console.log(secondPromise);
}

getData();



// Curring in Javascript
    // Curring is a function that takes one argument at a time and returns a new function that takes next argument...
    // and returns a new function which take next argument and so on until all arguments are completed.


// Currying simply means evaluating functions with multiple arguments and decomposing them into a sequence of.....
// functions with a single argument.


// Currying is a function that accepts multiple arguments.
//  It will transform this function into a series of functions,
//   where every little function will accept one argument:


// Without Currying function

// function addition(num1,num2,num3) {
//     return num1+num2+num3;
// }


// With Currying Function

const addition = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1+num2+num3;
        }
    }
}


// console.log(addtion(2,3,4));



// Modern way to write currying function in ES6


const addition1 = num1 => num2 => num3 => {
    return num1+num2+num3;
}

console.log(addition1(2,3,4));


// What is the difference between Currying and partial application?



const multiplication2 = num1 => num2 => num1*num2;


console.log(multiplication2(2,3));


// partial application
const partialApp = multiplication2(10);  // now 2nd parameter is missing 

console.log(partialApp(8));         // now it returns the output 



// Another Example


// // const updateRecord = id => content => document.querySelector(`#${id}`).innerText = content;
// const partialType = updateRecord('root');
// partialType('hello world');




// Rotate the given string k times to the left



function rotateString(string, k) {
    const array = [ ...string ];
    const rotateElements = array.splice(0, k);
    // console.log(rotateElements);
    // console.log(array);
    const rotateToLeft = array.concat(rotateElements);
    const convertInString = rotateToLeft.toString();
    const removeCommas = convertInString.split(',').join('');
    // console.log(rotateToLeft);
    return removeCommas;
}

const string2 = 'javascript';
console.log(rotateString(string2, 3));



// Check the Braces 


function checkingBraces(string) {
    let stack = [];
    for(let i = 0;i< string.length; i++) {
        if(string[i] == '(' || string[i] == '{' || string[i] == '[') {
            stack.push(string[i]);
            let top = stack[stack.length - 1];
        }
        else if(string[i] == ')' && top == '(' || string[i] == '}' && top == '{' || string[i] == ']' && top == '[') {
            stack.pop();
        } 
    }

    if(stack.length == 0) {
        return true;
    }
    else {
        return false;
    }
}


console.log(checkingBraces('()'));


// Sock Merchant => Find pairs of socks



function findPairsOfSocks(number,array) {
    let count = 0;
    var pair = 0;
    for(let i = 0; i < array.length; i++) {
        for(j = i + 1; j < array.length; j++) {
            if(array[i] === array[j]) {
                count++;
            }
        }
    }
    if(count == 2 && count < 4) {
        pair = 1;
    }
    else if(count == 4 & count < 6) {
        pair = 2;
    }
    else if(count == 6 && count < 8) {
        pair = 3;
    }
    return pair;
}

let arrayOfSocks = [1,2,1,2,1,3,2];
console.log(findPairsOfSocks(7,arrayOfSocks));










// document.querySelector("div").forEach(e => {
//     e.onclick = e => console.log(e.currentTarget.id);
// })

const variable = document.querySelector('div.span');
console.log(variable);



// setTimeOut function is nothing to do with javascript, instead it is inside the browser function.

// Javascript did not have a timer, so setTimeOut Runs inside the browser.

// When we have anonymous function in our code it is defined in memory as a function with no label...
// it has a memory adddress through which we create a reference....

// Functions that means nothing for javascript, they are facades functions for the web browsers.

// setTimeOut did all its working outside of javascript, inside the web browser.

// Javascript did not have the compatibility to speak to the internet, instead it commands to the web  browser....

// fetch is a facade's function...

// What feature that fetch kicks off or started => it is XHR(XML HTTP Request)...
// XML is the format of the data that we are going to get from the servers.....




// factory // Constructor function



function mobile(space, storage) {
    return {
        space: space,
        storage: storage
    }
}


var nokia = mobile()
var samsung = mobile()


function mobile(space, storage) {
    this.space = space;
    this.storage = storage;
}

var oppo = new mobile(12, 60);


const element = <h1>This is JSX format.</h1>


// React Commpose tree of components which will result in a complex UI's.

// npm run eject use to customize all the tools and resources that comes with create-react-app...



// Contructor   => 
// Render
// ComponentDidMount()
// ComponentDidUpdate()
// COmponentUnmounting



















































































































            






























































































