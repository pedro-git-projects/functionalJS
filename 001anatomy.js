// Function declaration

function sayHello()
{
    console.log('Hello')
}

sayHello();
x = sayHello();
// Note that, as we don't have a return statement, the value of x is undefined
console.log(x);

// ${} interpolates the value
function sayHelloTo(name)
{
    console.log(`Hello ${name}`);
}

sayHelloTo('Pedrão');

function returnHi()
{
    return 'Hi!'
}

let greeting = returnHi(); 
console.log(greeting);
console.log(returnHi());

function returnHiTo(name)
{
    return `Hi ${name}`
}

console.log(returnHiTo("Pedrão"));
