
//exercise wih async & await
const getDataUser= async() => {//the promise is configured here
    const response =  await fetch("http://localhost:3000/data")

    if( response.status !== 200) { //need to add error to k
        throw new Error("can't fetch the data")
    }
    const data = await response.json()
// change the strin data in objet javascript
    return data
    
};

console.log('test')
//initialise our function(promise) 
getDataUser()
.then(data => console.log( "resolved", data))
.catch(err => console.log("reject :", err.message))


// // exercicse using fetch
// fetch("./data.json")
// .then(response => {
//     console.log("response is ok", response)
//     return response.json()})
// .then(data => {console.log(data)
//     return data})
// .then(filter =>  {console.log("data is filter")
//     return filter.data[2]} )
// .then(filterdada => console.log(filterdada))
// .catch(err => console.log("somme error is found", err))


