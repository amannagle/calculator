function add(num1,num2)
{
    console.log(num1+num2);
}
function subtract(num1,num2)
{
    console.log(num1-num2);
}
function multiply(num1,num2)
{
    console.log(num1*num2);  
}
function divide(num1,num2)
{
    console.log(num1/num2);
}
function modulo(num1,num2)
{
    console.log(num1%num2);
}
function operator(num1,num2,operator)
{
    switch(operator)
    {
        case '+' :
            add(num1,num2);
            break;
        case '-' :
            subtract(num1,num2);
            break;
        case '*' :
            multiply(num1,num2);
            break;
        case '/' :
            divide(num1,num2);
            break;
        case '%' :
            modulo(num1,num2);
            break;        
    }

}
let calcString="";
function onButtonClick(e)
{
    const display = document.querySelector('.display');
    if(e.target.textContent === 'AC' || e.target.textContent === '=' || e.target.textContent === "CLEAR")
    return;
    calcString+=e.target.textContent;
    if (calcString.length > 15)
    {
        alert("more than 15 digits are not allowed !");
        return;
    }
    display.firstChild.textContent=calcString;
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click',onButtonClick);
})