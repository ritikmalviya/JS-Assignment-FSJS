let qrImage = document.getElementById('img');
let inputData = document.getElementById('input')
let btn = document.getElementById('submit')

let api_link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

let getQRCode = async()=>{
    api_link = api_link + inputData.value
    console.log(api_link)
    qrImage.src = api_link
    qrImage.style.display = 'block';
}

btn.addEventListener('click',getQRCode)

