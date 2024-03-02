/*JavaScript Syntax
for learning */
//String Handling using Quotes //Single line comment
console.log("hi there, how are you"); // double quotes
console.log('hi there, how are you'); // single quotes
//declaration
//Variables
let firstName = "Venkat";
let age = 40;
let bloodGroup = "A1+" ;
let isInterested = true;
let isWorking = false;
let weight ="";
let height = null;
//Constants
const num= 123;
const last= 'First';
//logging on to the console
console.log(firstName + ' ' + age + " " + bloodGroup + " " + isInterested + " " + isWorking); 
// combined strings with variables using +
console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(bloodGroup));
console.log(typeof(isInterested));
console.log(typeof(isWorking));
console.log(typeof(weight));
console.log(typeof(height));
console.log(typeof(wealth)); // not declared
console.log(typeof(num));
console.log(typeof(last));
//Operators
//Arithmetic Operators
let a = 20;
let b = 5;
let ans = "";
ans = a + b; // Addition
console.log("a + b = " + ans); // + is a Concatenate operator

ans = a - b; // Subtraction
console.log("a - b = " + ans); // + is a Concatenate operator

ans = a * b; // Multiplication
console.log("a * b = " + ans); // + is a Concatenate operator

ans = a / b; // Devision
console.log("a / b = " + ans); // + is a Concatenate operator

ans = a % b; // Modulus
console.log("a % b = " + ans); // + is a Concatenate operator

ans = a++; // Post Increment
console.log("a++ = " + ans); 

ans = a; // Variable After Increment
console.log("a = " + ans); 

ans = ++a; // Pre Increment
console.log("++a = " + ans); 

ans = a--; // Post Decrement
console.log("a-- = " + ans); 

ans = a; // Variable Decrement
console.log("a = " + ans); 

ans = --a; // Pre Decrement
console.log("--a = " + ans); 
//Assignment Operators
let ans1 = a; //Assignment
console.log ("ans1 = " + ans1);

let ans2 = 100;
ans2 += a; // Addition Assignment
console.log ("ans2 = " + ans2);

let ans3 = 100;
ans3 -= a; // Subtraction Assignment
console.log ("ans3 = " + ans3);

let ans4 = 100;
ans4 *= a; // Multiplication Assignment
console.log ("ans4 = " + ans4);

let ans5 = 100;
ans5 /= a; // Devision Assignment
console.log ("ans5 = " + ans5);

let ans6 = 100;
ans6 %= a; // Modulus Assignment
console.log ("ans6 = " + ans6);
//Comparison Operators
let x = 100;
let y = 200;
//Equal to Operator
if (x == y) {
    console.log (" X is equal to Y");
}
else {
    console.log ("X is not equal to Y");
};
//Not Equal to Operator
if (x != y) {
    console.log ("X is not equal to Y");
}
else {
    console.log ("X is equal to Y");
};
//Greateer than Operator
if (x > y) {
    console.log ("X is greater than Y");
}
else {
    console.log ("X is not greater than Y");
};
//Less than Operator
if (x < y) {
    console.log ("X is less than Y");
}
else {
    console.log ("X is not less than Y");
};
//Greater than or Equal to Operator
if (x >=y) {
    console.log ("X is greater than equal to Y");
}
else {
    console.log ("X is not greater than equal to Y");
};
//Less than or Equal to Operator
if (x <=y) {
    console.log ("X is less than equal to Y");
}
else {
    console.log ("X is not less than equal to Y");
};
//Logical Operators
let p = 100;
let q = 200;
let r = 300;
let s = 300;
let status = true;
//Logical AND Operator
if (p <= q && r == s) {
    console.log ("Condition Passed");
}
else {
    console.log ("Condition Failed");
}
//Logical OR Operator
if (p > q || r == s) {
    console.log ("Condition Passed");
}
else {
    console.log ("Condition Failed");
}
// Logical Not Operator
// to check some boolean value is Not True
if (!status) {
    console.log ("Status is False");
}
else {
    console.log ("Status is True");
}
//if statement
if (isInterested)
{
    console.log(firstName + " is Interested");
};
//if else statement
age = 60;
if (age == 40) {
    console.log(firstName + " age is " + age);
}
else {
    console.log(firstName + " age is not 40");
};
//if elseif else statement
if (age == 40) {
    console.log(firstName + " age is 40");
}
else if (age == 60) {
    console.log (firstName + " age is 60");
}
else {
    console.log (firstName + " age is not 40 and 60");
};
/*// for loop
for (let i=0; i<=10; i++)
{
    console.log('Value of the loop is ' + i);
};
// arrays
//arrays are also a type of Object
let ages = [1,2,3,4,5,77];
console.log(ages);
console.log(ages.length);
console.log(typeof(ages));
console.log(ages[5]);
let groups=[];
console.log(groups);
console.log(groups.length);
console.log(typeof(groups));
console.log(groups[0]);

let employees = [
    {
        fullName: 'Venkat',
        positionName: 'Architect',
        ratings: {
            year1: 20,
            year2: 30,
            year4: 40
        },
        grade: ["A", "B", "C"]
    },
    {   fullName:"Sasi Ram",
        positionName: "Manager",
        ratings: {
            year1: 60,
            year2: 70,
            year4: 80
        },
        grade: ["E", "F", "G"]
    },
    {
       fullName:"Magesh",
       positionName: "Regional Manager",
       ratings: {
        year1: 100,
        year2: 200,
        year4: 300
    },
    grade: ["H", "I", "J"]
    }
];

for (let j=0; j<=2; j++)
{
    console.log(j);
    console.log(employees[j]);
    console.log(employees[j]["ratings"]["year1"]);
    console.log(employees[j]["grade"]);
    console.log(employees[j]["grade"][j]);
};

function sum(a,b) {
    let summation = a+b;
    return summation;
};

function print() {
    console.log(sum(44,33));
};

print();


function sum2(a,b,ftc)
{
    let summation = a+b;
    ftc(summation);
};


function println(printtxt)
{
    console.log(printtxt);
};

sum2(22,23,println);

let currenttime = Date();

function ct () {
console.log (Date());
};

setInterval (ct, 1*1000);*/