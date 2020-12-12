

// Create an Animal class.
// The class will have name, age, color, legs, superPower attributes
class Animal{
    constructor(name,age,color,legs,superPower){
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
    this.superPower = superPower;
  }
  // create three methods for this class - include one method named userSuperPower()
  userSuperPower(){

  }
  eat(){
    console.log("I am eating");
  }
  sleep(){
    console.log("I am sleeping");
  }
}
// Create two objects for this class.
// Create two objects of this class - both with a unique superPower
const obj1 = new Animal('Rabbit',4,'white',4,'sight');
const obj2 = new Animal('Elephant',29,'gray',4,'memory');

// This class has firstName, lastName, department attributes

class User{
constructor(firstName,lastName,department){
  this.firstName = firstName;
  this.lastName = lastName;
  this.department = department;
    }
// a method name changeDepartment()
changeDepartment(){
  console.log("We've Changed your department");
    }

}
// Create three instances of this class
// Change department for two of the instances
const user1 = new User('Carlos','Velez','Engineering');
const user2 = new User('Michelle','Obama','Fitness');
const user3 = new User('Richard','Prior','');
