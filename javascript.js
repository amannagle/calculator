function add(num1,num2)
{
    return(num1+num2);
}
function subtract(num1,num2)
{
    return(num1-num2);
}
function multiply(num1,num2)
{
    return(num1*num2);  
}
function divide(num1,num2)
{
    if(num2 == 0)
    {
        alert("divison by zero is fatal!");
        return '';
    }
    return(num1/num2);
}
function modulo(num1,num2)
{
    return(num1%num2);
}
function operator(num1,num2,operator)
{
    switch(operator)
    {
        case '+' :
            return add(num1,num2);
            break;
        case '-' :
            return subtract(num1,num2);
            break;
        case '*' :
            return multiply(num1,num2);
            break;
        case '/' :
            return divide(num1,num2);
            break;
        case '%' :
            return modulo(num1,num2);
            break;        
    }

}
let calcString="";
let num1,num2,operation;
let lastOperatorLength=0;
let numOperator=0;
let result;
function onButtonClick(e)
{
    const display = document.querySelector('.display');
    
    if(e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/' || e.target.textContent === '%')
    {
        operation+=e.target.textContent;
        console.log(operation);
        if(numOperator >= 1)
        {
        num2=Number(calcString.substring(lastOperatorLength+1,calcString.length));
        lastOperatorLength=calcString.length;
        if(result === undefined)
        result=operator(num1,num2,operation.charAt(operation.length-2));
        else
        result=operator(result,num2,operation.charAt(operation.length-2));
        }
        else
        {
            console.log("else is running")
            num1=Number(calcString.substring(0,calcString.length));
            lastOperatorLength=calcString.length;
        }
        console.log(result);
        numOperator++;
    }
    if(e.target.textContent === '=')
    {
        num2=Number(calcString.substring(lastOperatorLength+1,calcString.length));
        lastOperatorLength=calcString.length;
        result=operator(result,num2,operation.charAt(operation.length-1));
        calcString=result;
    }
    if(e.target.textContent === 'AC' ||  e.target.textContent === "CLEAR")
    {
    
        calcString="";
    }
    
    if (calcString.length > 15)
    {
        alert("more than 15 digits are not allowed !");
        return;
    }
    // calcString = calcString.replace('CLEAR','');
    // calcString = calcString.replace('AC','');
    // calcString = calcString.replace('=','');
    if(e.target.textContent != 'AC' && e.target.textContent != 'CLEAR' && e.target.textContent != '=')
    {
        calcString+=e.target.textContent;
    }
    display.firstChild.textContent=calcString;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',onButtonClick);
})