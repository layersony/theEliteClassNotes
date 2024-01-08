# Datatypes
Strings = 'jdjdjd', "jsjsjsj", `jsjajajs`
integers =  0,1,2 .... 9
floats = 12.4, 23.4, 293.4
boolean = true, false
undefined = yet to be defined (Created)
null = empty

# variables
let variableName = value
const variableName = value

### Examples
let myName = value
const myAge =  16

# operators
Logical : && (and), || (or), !
arithmetic : +, -, *, /, ++, **, --, %
comparison : <=, ==, >, <, ===, ?, !==
assignment : =, +=, -=
tenary: ? :

# if statements
#### sytnax
if, 
if ... else, 
if ... else if .... else

```
    if (condition){
        // Code here
    }
    else if (condition){
        // code here
    }
    else {
        // code here
    }
```

# loops
#### For loop
```
    for (variable; condition; increment){
        // code here
    }
```
#### while loop
```
    variable;

    while (condition){
        // code here
        
        increment
    }
```
#### do while loop

```
    variable;

    do {
        // code here
        increment
    }
    while (condition);
```


# functions
function functionName(parameters, parameters){
    // code here 
}

2nd way
let functionName = function(){
    // code here
} 

3rd way
let functionName = ()=> {

}

functionName()  /// Calling the function
functionName(arguments, arguments) /// calling function

# arrays and Objects
#### Arrays
let teams = ['ManCity', "Chelsea", "Man U", "Aston Villa"]

###### accessing Arrays - use of box notation and index
teams[3]

###### add items to and array
teams.push("liverpool")

###### remove items in an array
teams.pop()


#### Objects
###### sytnax
const objecName = {
    key: value,
    key: value,
    key: value,
}


###### example
const person1 = {
    firstName: "Maingi",
    lastName: "Mutunga",
    middleName: "Samuel",
    age: 56,
    height: 50
}
##### Access data from object
###### dot notation
console.log( person1.age )

###### box notation
console.log( person1["age"])




# DOM manipulation