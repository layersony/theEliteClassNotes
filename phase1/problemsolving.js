let myArray = [25, 63, 89, 45, 12, 90]


// constant time complexity
function getElement(arr){
    console.log(arr[11])
}

// linear time complexity
function consoleLogAllElement(arr){
    for (let i=0; i<arr.length; i++){
        console.log(arr[i])
    }
}













// measure the time complexity
let startTime = Date.now()

// Run the function
consoleLogAllElement(myArray)

let endtime = Date.now()
console.log(endtime - startTime, 'ms')


