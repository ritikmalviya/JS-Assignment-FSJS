let rock = document.getElementById('r')
let paper = document.getElementById('p')
let scissors = document.getElementById('s')

let userScoreVal = document.getElementById('userScoreVal')
let compScoreVal = document.getElementById('compScoreVal')

let userChoice = document.getElementById('result-user-stat');
let compChoice = document.getElementById('result-comp-stat');
let winner = document.getElementById('result-final-stat');

let userScore = 0;
let compScore = 0;

let handArr = ['rock', 'paper', 'scissors']

const compCal = ()=>{
    return handArr[Math.floor(Math.random() * 3 )];
}

// for Rock
rock.addEventListener('click',()=>{
    let comp = compCal();
    userChoice.innerText = 'User: ROCK'
    compChoice.innerText = 'Computer: '+comp.toUpperCase()
    
    if(comp === 'paper'){
        compScore = compScore + 1;
        compScoreVal.innerText = compScore;
        winner.innerText = 'Winner: Computer'
    }else{
        userScore = userScore + 1;
        userScoreVal.innerText = userScore;
        winner.innerText = 'Winner: User'

    }
})

// for paper
paper.addEventListener('click',()=>{
    let comp = compCal();
    userChoice.innerText = 'User: PAPER'
    compChoice.innerText = 'Computer: '+comp.toUpperCase()

    if(comp === 'scissors'){
        compScore = compScore + 1;
        compScoreVal.innerText = compScore;
        winner.innerText = 'Winner: Computer'

    }else{
        userScore = userScore + 1;
        userScoreVal.innerText = userScore;
        winner.innerText = 'Winner: User'
    }
})

// for scissors
scissors.addEventListener('click',()=>{
    let comp = compCal();
    userChoice.innerText = 'User: SCISSORS'
    compChoice.innerText = 'Computer: '+comp.toUpperCase()
    if(comp === 'rock'){
        compScore = compScore + 1;
        compScoreVal.innerText = compScore;
        winner.innerText = 'Winner: Computer'
    }else{
        userScore = userScore + 1;
        userScoreVal.innerText = userScore;
        winner.innerText = 'Winner: User'
    }
})