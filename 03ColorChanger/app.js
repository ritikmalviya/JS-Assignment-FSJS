const btn = document.querySelector("#button")
const area = document.querySelector("#canvas")

let random = ()=>{
    let value = "#"
    let data = "0123456789ABCDEF"
    for(let i = 0; i<6;i++){
        value = value + data[Math.floor(Math.random()*16)]
    }
    return value;
}

btn.addEventListener('click',()=>{
    area.style.background = random();
})