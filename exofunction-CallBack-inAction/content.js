let ul = document.querySelector(".liste") //select the element wih the class name

let people = ["ken", "yoqhi", "pisn", "puta"];

let html = []

people.forEach((name,index) => {
html +=`<li>this is the position N° ${index} of ${name} </li> </br>`

})

ul.innerHTML = html // inject the hml in ul with the method innerHTML

