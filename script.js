// Creating all the elements -
let section = document.createElement('section');
document.body.append(section);

let container = document.createElement("div");
container.setAttribute('class', 'container');
section.appendChild(container);

let display = document.createElement("div");
display.setAttribute('class', 'display');
container.appendChild(display);

let display1 = document.createElement("div");
display1.setAttribute('class', 'display-1');
display1.innerText = "0";
display.appendChild(display1);

let display2 = document.createElement("div");
display2.setAttribute('class', 'display-2');
display2.innerText = "0";
display.appendChild(display2);

let displayTemp = document.createElement("div");
displayTemp.setAttribute('class', 'temp-result');
display.appendChild(displayTemp);

let allButtons = document.createElement('div');
allButtons.setAttribute('class', 'allButtons');
container.appendChild(allButtons);

let clear = document.createElement('div');
clear.setAttribute('class', 'button all-clear check');
clear.innerText = "C";
allButtons.appendChild(clear);

let lastEntity = document.createElement('div');
lastEntity.setAttribute('class', 'button last-entity-clear');
lastEntity.innerText = "CE";
allButtons.appendChild(lastEntity);

let modulus = document.createElement('div');
modulus.setAttribute('class', 'button operation');
modulus.innerText = "%";
allButtons.appendChild(modulus);

let division = document.createElement('div');
division.setAttribute('class', 'button operation');
division.innerText = "/";
allButtons.appendChild(division);

let seven = document.createElement('div');
seven.setAttribute('class', 'button number');
seven.innerText = "7";
allButtons.appendChild(seven);

let eight = document.createElement('div');
eight.setAttribute('class', 'button number');
eight.innerText = "8";
allButtons.appendChild(eight);

let nine = document.createElement('div');
nine.setAttribute('class', 'button number');
nine.innerText = "9";
allButtons.appendChild(nine);

let mul = document.createElement('div');
mul.setAttribute('class', 'button operation');
mul.innerText = "X";
allButtons.appendChild(mul);

let four = document.createElement('div');
four.setAttribute('class', 'button number');
four.innerText = "4";
allButtons.appendChild(four);

let five = document.createElement('div');
five.setAttribute('class', 'button number');
five.innerText = "5";
allButtons.appendChild(five);

let six = document.createElement('div');
six.setAttribute('class', 'button number');
six.innerText = "6";
allButtons.appendChild(six);

let minus = document.createElement('div');
minus.setAttribute('class', 'button operation');
minus.innerText = "-";
allButtons.appendChild(minus);

let one = document.createElement('div');
one.setAttribute('class', 'button number');
one.innerText = "1";
allButtons.appendChild(one);

let two = document.createElement('div');
two.setAttribute('class', 'button number');
two.innerText = "2";
allButtons.appendChild(two);

let three = document.createElement('div');
three.setAttribute('class', 'button number');
three.innerText = "3";
allButtons.appendChild(three);

let plus = document.createElement('div');
plus.setAttribute('class', 'button operation');
plus.innerText = "+";
allButtons.appendChild(plus);

let zero = document.createElement('div');
zero.setAttribute('class', 'button number btn-0');
zero.innerText = "0";
allButtons.appendChild(zero);

let dot = document.createElement('div');
dot.setAttribute('class', 'button number dot ');
dot.innerText = ".";
allButtons.appendChild(dot);

let equal = document.createElement('div');
equal.setAttribute('class', 'button equal');
equal.innerText = "=";
allButtons.appendChild(equal);

// target elements-
const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const tempResultEl = document.querySelector('.temp-result');
const numbersEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const clearLastEl = document.querySelector('.last-entity-clear');
const bracEl = document.querySelector('.brac-1');
const bracEl2 = document.querySelector('.brac-2');

// Empty string value-
let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

// button event -
numbersEl.forEach((number) => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
    })
});

operationEl.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        // console.log(result);
    });
});

function clearVar(name = '') {
    dis1Num += dis2Num + ' ' + name + ' ';
    display1El.innerText = dis1Num;
    display2El.innerText = '';
    dis2Num = '';
    tempResultEl.innerText = result;
}

// function for mathematical operations-
function mathOperation() {
    if (lastOperation === 'X') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

equalEl.addEventListener('click', () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = '';
    dis2Num = result;
    dis1Num = '';
})

clearAllEl.addEventListener('click', () => {
    display1El.innerText = '';
    display2El.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    tempResultEl.innerText = '';
})

clearLastEl.addEventListener('click', () => {
    display2El.innerText = '';
    dis2Num = '';
});

// for keyboard event -
window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === 'Shift' ||
        e.key === 'Alt'
    ) {
        clickButtonEl(e.key);
    } else if (
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');
    } else if (e.key === 'Enter' || e.key === '=') {
        clickEqual();
    } else {
        alert("Only numbers are allowed");
    }
});

function clickButtonEl(key) {
    numbersEl.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}
function clickOperation(key) {
    operationEl.forEach((operation) => {
        if (operation.innerText === key) {
            operation.click();
        }
    })
}

function clickEqual() {
    equalEl.click();
}












