//Call back is a function that we use like a paraemeter in a function
//example
let people = ["ken", "yoqhi", "pisn", "puta"]

// simple
// people.forEach(function(name){
//     console.log(`render ${name}`)//template string if ou want to have a text and a value of a variable
// }) 

//with arrow function

// people.forEach(name => {
//     console.log(`render ${name}`)
// })

//ForEach can take 2 parameter a value + an index

// people.forEach((name, index) =>{
//     console.log(`render the ${name} of ${index}`)
// })

//another way to write the last code add the code 
// in function and pass this function as a parameter

let alltheGuy = (name, index) =>{
    console.log(`render the ${index} of ${name}`)

}

people.forEach(alltheGuy)

