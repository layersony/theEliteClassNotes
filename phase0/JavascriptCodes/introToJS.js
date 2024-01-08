// let myAge = 45;
// let myName = "Maingi Samuel";
//let balance = 0.67;
//let isKenyan = false;

//console.log(myAge);
//console.log(myName);
//console.log(balance);

//console.log(typeof isKenyan)


// Operators
// let a = 2
// let b = '2'

// let condition1 = a === b
// let condition2 = a === b

// let logicalCon = condition1 || condition2

// console.log( condition1 )
// console.log( condition2 )

// console.log( logicalCon )



///// statements



// if
// syntax

// if (condition) {
//     // here goes logic
// }

// if (ugaliMatumbo) {
//     console.log('Bring Ugali Matumbo')
// }
// if .... else
// if (condition){
//     // here goes truth logic
// }
// else {
//     // last option
// }

// if (ugaliMatumbo) {
//     console.log('Bring Ugali Matumbo')
// }
// else {
//     console.log('Standup go to another')
// }

// if ... else if ... else
// syntax
// if (condition){
//     // code here
// }
// else if (condition) {
//     // code here
// }
// else {
//     // code here
// }

// let ugaliMatumbo = false;
// let pasta = false;
// let pilau = false;
// let smocha = false;

// if (ugaliMatumbo) {
//     console.log("Bring Ugali Matumbo")
// }
// else if (pasta) {
//     console.log("Bring pasta")
// }
// else if (pilau){
//     console.log("Bring Pilau")
// }
// else if (smocha) {
//     console.log("Bring Smocha")
// }
// else {
//     console.log("Standup and Go")
// }


////////////////// Dec 6th //////////////////////////
// loops
//// for loop

// syntax

// for (variable; condition; increment){
//     // here logic code
// }

// for (let i = 10; i < 10; i++) {
//     console.log( i )
// }

// let blueGate = false;

// for (let i=0; i <= 20; i++) {
//     console.log("Move One more Step " + i)

//     if (i == 8){
//         console.log("Turn Right, Proceed")
//     }

//     if ( i == 15 && blueGate == true ){
//         console.log("Stop, Call Mohamed")
//         break;
//     }

//     if (i == 20){
//         console.log("You have arrived")
//     }
// }

//// while loop
// syntax

// variable
// while (condition){
//     // logic code here

//     // increment
// }

// let i = 0; // controller
// let blueGate = true;

// while (i <= 20){
//     console.log("Move One more Step " + i)

//     if (i == 8){
//         console.log("Turn Right, Proceed")
//     }

//     if ( i == 15 && blueGate == true ){
//         console.log("Stop, Call Mohamed")
//         break;
//     }

//     if (i == 20){
//         console.log("You have arrived")
//     }

//     i++;
// }

// function
// first way

// function functionName(parameters, parameters){
//     // code here
// }
//
// functionName(arguments, arguments)



// function greetings(neighborName){
//     console.log("Hello " + neighborName);
//     console.log("Hope you are good today!");
//     console.log("Have a Great Day!");
//     console.log("Goodbye");
// }

// greetings("Amy")
// greetings("Brian")
// greetings("Bob")
// greetings("Dorcas")



// function addition(a, b){
//     let total = a + b;
//     return total
// }

// addition(1, 2);
// addition(99, 3);
// addition(9893, 9929292)
// addition(112223, 43322)


// // Display total of function
// let sum1 = addition(1, 2);
// console.log(sum1);

// console.log( addition(99, 3) )

// let sum2 = addition(9893, 9929292)
// console.log(sum2)


// // second way
// let functionName = function (){
//     // code here
// }

// // third way
// let functionName = ()=>{
//     //code here
// }




//////////////// 6th Dec Evening ////////////////////////
// array

//   indexs         0       1        2       3
// let shopping = ["Rice", "Unga", "Sugar", "Salt"]

// console.log( shopping[3] )

// 2nd way of creating array
// let shopping = new Array("Rice", "Unga", "Sugar", "Salt")

// console.log(typeof shopping )

// changing elements in array
// let shopping = ["Rice", "Unga", "Sugar", "Salt"]

// shopping[1] = "Plate"

// console.log(shopping)

// array methods
// console.log( shopping.length )
// console.log( shopping.sort() )

// remove last element
// shopping.pop()
// console.log( shopping )

// add elements to the beginning array

// shopping.unshift("Kikombe")

// console.log( shopping )

// add elements to the end array
// shopping.push("kikombe")
// console.log( shopping )
/// index         0       1        2       3
// let shopping = ["Rice", "Unga", "Sugar", "Salt"]
// let shopLen = shopping.length

// // looping an array
// for (let index=0; index < shopLen; index++){
//     console.log()
//     console.log( "Please Buy " + shopping[index] )
// }

// objects

// let maingiCarModel = "Mustang";
// let maingiCarColor = "black";
// let maingiCarEngine = "V8"


let maingiCar = {
    model: "Mustang",
    color: "black",
    engine: "V8",
    gears: [1,2,3,4,5,6, "Reverse"]
}


// access properties
// first way dot notation .
// console.log( maingiCar.engine )

// second way | box notation []
console.log( maingiCar["gears"][6] )













// Dom Manipulation
// - Script Events 