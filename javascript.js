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
function onButtonClick(e)
{
    const display = document.querySelector('.display');
    
    if(e.target.textContent === '+' || e.target.textContent === '-' || e.target.textContent === '*' || e.target.textContent === '/' || e.target.textContent === '%')
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
    }
    if(e.target.textContent === 'AC' ||  e.target.textContent === "CLEAR")
    {
        if(e.target.textContent === "CLEAR")
        {
            calcString='0';
        }
        else
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
        if(calcString === '0')
        calcString = e.target.textContent
        else
        calcString+=e.target.textContent;
    }
    display.firstChild.textContent=calcString;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',onButtonClick);
})