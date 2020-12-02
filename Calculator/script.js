class Calculator{
    constructor(lastOperation, currentOperation){
        this.lastOperation  = lastOperation
        this.currentOperation  = currentOperation
        this.clear()
    }
    clear(){
        this.currentOperation = ""
        this.lastOperation = ""
        this.operation = undefined
    }
    delete(){

    }
    addNum(number){
        this.currentOperation = this.currentOperation.toString() + number.toString()

    }
    pickOperation(operation){

    }

    calculate(){

    }
    updateDisplay(){
        this.currentOpertion.innertext = this.currentOperation

    }
}




const numButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-operation]')
const clearButtons = document.querySelector('[data-clear]')
const deleteButtons = document.querySelector('[data-delete]')
const equalButtons = document.querySelector('[data-equal]')
const lastOperation = document.querySelector('[data-last-operation]')
const currentOperation = document.querySelector('[data-current-operation]')


const calculator = new Calculator(lastOperation, currentOperation)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addNum(button.innerText)
        calculator.updateDisplay()
    })
})
