// OOP - Inheritance
// Create a class called Fish
// Define a method Swim( )
// Create a class Nemo that inherits from Fish
// Define an attribute color
// Create a Nemo object. Can it swim?
// Find the difference between abstract class and an interface
// Which of the two can have implementation of a method in the class?

class Fish {
  constructor() {}
  Swim() {
    console.log("I can Swim");
  }
}
//use the keyword extends to inherit from parent - Fish. Use super() in the child's constructor so the parent's methods and properties can be accessed.
class Nemo extends Fish {
  constructor(color) {
    super();
    this.color = color;
  }
}
const Nemo1 = new Nemo('red');
Nemo1.Swim();
