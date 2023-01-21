let btn = document.getElementById('convert-btn')
let texts = document.getElementById('text').value

const consoleLog = ()=>{
    console.log(texts);
}
// CamelCase
const camelCase = ()=>{
    let arr = []
    arr = texts.toLowerCase().split(' ')
    let camelCase = arr[0]
    for (let i=1;i<arr.length;i++) {
        arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase())
        camelCase =camelCase+arr[i]
        
    }
    return camelCase;
    // return texts.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// PascalCase
const pascalCase = ()=>{
    let arr = texts.toLowerCase().split(' ')
    let PascalCase='';
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i].replace(arr[i][0],arr[i][0].toUpperCase())
        PascalCase = PascalCase + arr[i] 
    }
    return PascalCase;
}

// Snake Case
const snakeCase = ()=>{
    let snake_case= texts.toLowerCase().split(' ').join('_')
    return snake_case;
}

// Screaming Snake Case
const screamingSnakeCase = ()=>{
    let SCREAMING_SNAKE_CASE = texts.toUpperCase().split(' ').join('_')
    return SCREAMING_SNAKE_CASE;
}
// Kebab Case
const kebabCase = ()=>{
    let kebabCase = texts.toLowerCase().split(' ').join('-')
    return kebabCase;
}
// Screaming Kebab Case
const screamingKebabCase = () =>{
    let screamingKebabCase = texts.toUpperCase().split(' ').join('-')
    return screamingKebabCase;
}
// Display 
const displayAll = ()=>{
    texts = document.getElementById('text').value
    document.getElementById('camel-case').innerText = camelCase()
    document.getElementById('pascal-case').innerText = pascalCase()
    document.getElementById('snake-case').innerText = snakeCase()
    document.getElementById('screaming-snake-case').innerText = screamingSnakeCase()
    document.getElementById('kebab-case').innerText = kebabCase()
    document.getElementById('screaming-kebab-case').innerText = screamingKebabCase()
}
btn.addEventListener('click',()=>{displayAll()})
