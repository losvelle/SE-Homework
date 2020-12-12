class Person{
    constructor (firstName, lastName, country, city){

    this.firstName = firstName = "Carlos"
    this.lastName = lastName = "Velez"
    this.country = country = "USA"
    this.city = city = "The Bronx"

    }
}

const me = new Person();
const you = new Person();
console.log(me);
console.log(you);

console.log(typeof me, typeof you);
