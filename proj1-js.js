let i = 0;
let str = 'yo';
console.log('js started')

function getAdd(num1, num2) {
    console.log(parseInt(num1) + parseInt(num2));
}

function getSub(num1, num2) {
    console.log(parseInt(num1) - parseInt(num2));
}

function getMult(num1, num2) {
    console.log(parseInt(num1) * parseInt(num2));
}

function getDiv(num1, num2) {
    console.log(Math.round(parseInt(num1) / parseInt(num2)* 1000) / 1000);
}
