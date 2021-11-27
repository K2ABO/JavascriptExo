//initilize local variable

var country = 'Canada';
var firstname = 'John';
var lastname = 'Doe';

const student = {
    firstname: 'Glad',
    lastname: 'Chinda',
    country: 'Nigeria'
};
// destuctering give student value
//const {firstname, lastname, country}= student
//console.log(firstName, lastName, country)

//reassign firstName & lastName using destructering
// need to encclose with () because it's assignment expression
({ firstname, lastname } = student);


//rest parameter
