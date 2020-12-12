//OOP - Classes: Model a vending machine
// When we wanted to access snacks within our object we had to put the name of the object in it to access the snacks
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack
// and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
  snacks: [
      {
        name: 'Welch Fruit Snacks',
        price: 1.50,
      },
      {
        name: 'M&Ms',
        price: 1.00,
      },
      {
        name: 'Sprite',
        price: 1.25
      }
    ],
vend(indexPosition){

console.log(this.snacks[indexPosition]);

}

}
vendingMachine.vend(1); 
