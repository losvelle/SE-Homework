// // Create an Animal class.
// // The class will have name, age, color, legs, superPower attributes
// class Animal {
//     constructor(name, age, color, legs, superPower) {
//         this.name = name,
//             this.age = age,
//             this.color = color,
//             this.legs = legs,
//             this.superPower = superPower
//     }
//     // create three methods for this class - include one method named userSuperPower()
//     userSuperPower() {
//         console.log("My super power is " + this.superPower);
//     }
//     eat() {
//         console.log("I am eating");
//     }
//     sleep() {
//         console.log("I am sleeping");
//     }
// }
// // Create two objects for this class.
// // Create two objects of this class - both with a unique superPower
// const rabbit = new Animal('Rabbit', 4, 'white', 4, 'sight');
// console.log(rabbit)
//
// rabbit.userSuperPower();
// rabbit.sleep();
// rabbit.eat();
//
//
// const elephant = new Animal('Elephant', 29, 'gray', 4, 'memory');
// console.log(elephant)
// elephant.userSuperPower();
// elephant.sleep();
// elephant.eat();


//
// // This class has firstName, lastName, department attributes

class User{
    constructor(firstName, lastName, department){
        this.firstName = firstName,
        this.lastName = lastName,
        this.department = department;
    }
    changeDepartment(newDepartment){
        this.department = newDepartment
    }
}

const user1 = new User('Carlos','Velez','Engineering');
console.log(user1); //confirming i build the user correctly
user1.changeDepartment("CEO");
console.log(user1);


const user2 = new User('Michelle','Obama','Fitness');
console.log(user2); //see line 74
user2.changeDepartment("First Lady");
console.log(user2);



const user3 = new User('Richard','Prior','Comedy');
console.log(user3);// see line 74
