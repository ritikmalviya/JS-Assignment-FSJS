const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const symbol = '!@#$%^&*_-=+~?/|{}[]()<>'
let password = '';
let include = [];


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    
})

generateEl.addEventListener('click', () => {
    if(lowercaseEl.checked){
    include.push('lowercase')
}
if(uppercaseEl.checked){
    include.push('uppercase')
}
if(numbersEl.checked){
    include.push('number')
}
if(symbolsEl.checked){
    include.push('symbol')
}
    generatePassword(randomFunc.lower,randomFunc.upper,randomFunc.number,randomFunc.symbol,lengthEl.value)
    resultEl.innerText = password;
    password ='';
})

function generatePassword(lower, upper, number, symbol, length) {
    for(let i=1; i<=length; i++){
        let randomName = include[Math.floor(Math.random()*include.length)]
        switch(randomName){
            case 'lowercase':
                console.log()
                password = password + lower();
                break;
            case 'uppercase':
                password = password + upper();
                break;
            case 'number':
                password = password + number();
                break;
            case 'symbol':
                password = password + symbol();
                break; 
                
            default:
                console.log("error")
        }
    }
    include = [];
}

function getRandomLower() {
    return lower.charAt(Math.random()*26)

}

function getRandomUpper() {
    return upper.charAt(Math.random()*26)

}

function getRandomNumber() {
    return Math.floor(Math.random() * 10)
}

function getRandomSymbol() {
    return symbol.charAt(Math.random()* symbol.length)
}
