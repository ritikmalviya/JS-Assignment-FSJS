let joke = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn')

let api_url = 'https://v2.jokeapi.dev/joke/Programming?type=single'


const getJoke = async() =>{
    const response = await fetch(api_url)
    const jokeData = await response.json();
    console.log(jokeData.joke)
    joke.innerText = jokeData.joke;
    return 0;
}
getJoke()
jokeBtn.addEventListener('click',getJoke)
