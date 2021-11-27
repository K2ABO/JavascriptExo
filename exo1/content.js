
//declare variable and select element
btn =document.querySelector('button')
p1 = document.querySelector('p') 

//event click button change element
btn.addEventListener('click',()=>{
    p1.textContent = 'you have clicked' 
 })

 
 // declare variable and select list of elements 
let items = document.querySelectorAll('a')
//apply to each item a function
items.forEach(item =>{

    //add event to each item
    item.addEventListener('click',(e)=>{
        e.target.style.color ='red'
    });
});

//function and parameter
// add name with parameter
let myname = function(name){
    console.log(`my name is ${name}`)
}
//myname('mario')

//add parameter and index

let hero = ["ken", "ryu", "chun-li", "mario", "sonic" ]
//ex1
/*hero.forEach((persone, index)=>{
    console.log(`${index} the heros is ${persone}`) 
})*/
//ex2
/*let heroes = (person, index) =>{
    console.log(`${index} the hero is ${person}`)
}
hero.forEach(heroes)*/
