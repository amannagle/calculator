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
function onButtonClick(e)
{
    const display = document.querySelector('.display');
    
    if(e.target.textContent === '+')
    {
        operation=e.target.textContent;
        console.log(operation);
        num1=Number(calcString.substring(0,calcString.length));
        lastOperatorLength=calcString.length;
    }
    if(e.target.textContent === '=')
    {
        num2=Number(calcString.substring(lastOperatorLength+1,calcString.length));
        const result = operator(num1,num2,operation);
        calcString=result;
        console.log(calcString);
    }
    if(e.target.textContent === 'AC' ||  e.target.textContent === "CLEAR")
    return;
    calcString+=e.target.textContent;
    if (calcString.length > 15)
    {
        alert("more than 15 digits are not allowed !");
        return;
    }
    const newstring = calcString.replace('=','');
    display.firstChild.textContent=newstring;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',onButtonClick);
})