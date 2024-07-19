class calculator{
    constructor(previousOPerandTxtEle, currentOPerandTxtEle){
        this.previousOPerandTxtEle = previousOPerandTxtEle
        this.currentOPerandTxtEle = currentOPerandTxtEle
        //To clear all our inputs in the calculator
        this.clear()
    }

    //To clear the input
    clear(){
        //when cleared the answer will be empty string
        this.currentOPerand = ''

        //when cleared the input will be empty string
        this.previousOPerand = ''

        //when cleared the operation sign will be undefined
        this.operation = undefined
    }

    //Remove a single number 
    delete(){

    }

    //Add the clicked number to the screen
    appendNumber(number){
        this.currentOPerand= number
    }

    //Choose the icon from the icon
    chooseOperationIcon(operation){

    }

    //Take the inputs and compute them
    compute(){

    }

    //Update values inside our screen
    updateDisplay(){
        this.currentOPerandTxtEle.innerText= this.currentOPerand
    }
}


//The number buttons that will be inputed for calculations
const numberButtons= document.querySelectorAll(`[data-number]`);

//The operation button to specify the operation to take place
const operationButtons= document.querySelectorAll(`[data-operation]`);

//The equals button 
const equalsButtons= document.querySelector(`[data-equals]`);

//The delete button that will remove one digit from the inputs
const deleteButton= document.querySelector(`[data-delete]`);

//Clear button will erase the whole input back to default
const allClearButton= document.querySelector(`[data-all-clear]`);

//This is the input that the user typed in
const previousOPerandTxtEle= document.querySelector(`[data-previous-operand]`);

//This is the answer after operation is done
const currentOPerandTxtEle= document.querySelector(`[data-current-operand]`);


//
const Calculator= new calculator(previousOPerandTxtEle, currentOPerandTxtEle);

//selecting our number buttons
//for each button add an eventlistener
numberButtons.forEach(function(button){
    button.addEventListener("click", function(){
        //Adding the number to our calculator
        Calculator.appendNumber(button.innerText)
        //display the selected number
        Calculator.updateDisplay()
    })
})




































































































































































































































































































































































































































































/**
 //Add function
function add(num1, num2){
    return num1 + num2;
}

//Minus function
function minus(num1, num2){
    return num1 - num2;
}

//Multiply function
function multiply(num1, num2){
    return num1 * num2;
}

//Divide function
function divide(num1, num2){
    return num1 / num2;
}

//Calculator function
function calculator(num1, num2, operrator){
    return operrator(num1, num2);
}


console.log(calculator(5, 4, add))




function Boy (age, work, town){
    this.age= age;
    this.work= work;
    this.town= town;
}


let boyie = new Boy(10, "code", "nakuru", "Embu")

console.log(boyie)
 */