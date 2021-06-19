// Constants and Variables
const operations = document.querySelectorAll('.operations');
const numbers = document.querySelectorAll('.num');
const equalBtn = document.querySelector('.equals');
const allClearBtn = document.querySelector('.all-clear');
const display = document.querySelector('.display');

var num1="",num2="",operation="";
var hasOperation = false;


// Functions
const displayValue = ()=>{
    if(num1 === '' && operation === '' && num2 === ''){
        display.innerHTML = '0';
    }else{
        display.innerHTML = num1 + operation + num2;
    }
}

const updateNum = (n)=>{
    if(!hasOperation){
        num1 += n.innerHTML;
    }else{
        num2 += n.innerHTML;
    }
    displayValue();
}

const updateOperation = (o)=>{
    operation = o.innerHTML;
    hasOperation = true;
    displayValue();
}

const calculateResult = ()=>{
    let n1 = parseFloat(num1);
    let n2 = parseFloat(num2);
    var value;
    switch (operation) {
        case '+':
            value = n1 + n2;
            break;
        case '-':
            value = n1 - n2;
            break;
            case '×':
                value = n1 * n2;
            break;
        case '÷':
                value = n1 / n2;
            break;
    
        default:
            break;
    }
    num1 = value;
    num2 = "";
    operation = "";
    hasOperation = false;
    displayValue();   
};

const clearCalculator = ()=>{
    num1 = "";
    num2 = "";
    operation = "";
    displayValue();
};

// Events Handling
operations.forEach(o =>{
    o.addEventListener('click',()=>{
        updateOperation(o);
    })
})

numbers.forEach(number =>{
    number.addEventListener('click',()=>{
        updateNum(number);
    })
})

equalBtn.addEventListener('click',()=>{
    calculateResult();
});

allClearBtn.addEventListener('click',()=>{
    clearCalculator();
})