//FILTER METHOD
1.
/*filter method that you use to find the match value with your condition
let number=[10, 20 , 30 ,50, 60 ,70, 80]
//callback function ()=>{} will apply function to each value in array
let overnumb = number.filter((numb)=>{//numb=individual value in array
    return numb>30
})
console.log(overnumb)

2.
let users=[
    {name:"shawn", premium :true},
    {name:"tiwa", premium :false},
    {name:"eva", premium :true},
    {name:"sitr", premium :false}]

    let filterin = users.filter((user)=>{
        return user.premium 
    });
    console.log(filterin)*/
     

//MAP METHOD
/*1.
let prices=[10, 20 , 30 ,50, 60 ,70, 80]

let ovprice= prices.map(price=> price*5// call back one line, no return need
    //classic  prices.map((price)=>{
      //  return price*5
    //})
)
//console.log(ovprice)

2.
let product=[
    {name:"beer", prix :50},
    {name:"juice", prix :30},
    {name:"milk", prix :20},
    {name:"water", prix :10}]


let ovproduct= product.map((prod)=>{
    if(prod.prix>20){
        return {name:prod.name, prix:prod.prix/2}
    }
    else{
        return prod
    }
})

console.log(ovproduct)*/

//REDUCE METHOD take each value that fulfil the condition and retun one value
/*let score=[10, 20 , 30 ,50, 60 ,70, 80]

let result= score.reduce((acc, curr)=>{
    if(curr>50){
        acc++
    }
        return acc
    
},0)

2.

let gamescore=[
    {name:"mario", score:50},
    {name:"luigi", score:30},
    {name:"mario", score:20},
    {name:"peach", score:10},
    {name:"mario", score:50},
    {name:"luigi", score:30},
    {name:"mario", score:20},
    {name:"peach", score:10},
    {name:"mario", score:50},
    {name:"luigi", score:30},
    {name:"mario", score:20},
    {name:"peach", score:10}]


    let marioScore= gamescore.reduce((acc,curr)=>{
        if(curr.name==="mario"){
            acc+= curr.score
        }
        return acc
    },0)
    console.log(marioScore)

    */
//FIND METHOD
// function that return the first element that pass the condition
/* 
let score=[10, 20 , 30 ,50, 60 ,70, 80]
let result= score.find((score)=>{
return score> 60
})
//console.log(result)

*/

//SORT METHOD
//use to sort element in array
let count=[70,30 , 20  ,50, 60 ,10, 80]

let countshort = count.sort((a,b)=>{
    return a-b //ordre croissant
    return b-a //ordre croissant
})
//console.log(countshort)


let gamescore=[
    {name:"mario", score:50},
    {name:"luigi", score:30},
    {name:"mario", score:20},
    {name:"peach", score:10},

]
let best= gamescore.sort((a,b)=>{
return a.score- b.score
})

console.log(best)