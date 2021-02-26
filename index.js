//
const msgEL = document.getElementById(`msg`);

//Creat random number
const randomNum = getRandomNumber();
// function for random number 
function getRandomNumber(){
    return Math.floor(Math.random()*100)+ 1;
}

console.log(`Number: ` + randomNum)
//Initializing the Speech Recognition Object
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// Creating a new instance called recognition
let recognition = new window.SpeechRecognition();

recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e){
    //console.loe(e)
    const msg = e.results[0][0].transcript;
    console.log(msg);

    writeMessage(msg)
    checkNumber(msg);
    
}

function writeMessage(msg){
    msgEL.innerHTML = `
    <div>You said: </div>
    <span class="box">${msg}</span>
    `;
}

//Checking the user guess against the number
function checkNumber(msg){
    // + converts msg into number 
    const num = +msg;

//Check to see if number is valid
    if(Number.isNaN(num)){
        msgElement.innerHTML += `<div> That is not a valid number</div>`;
        return;
    }

//Checking to see if numer is in range 
    if(num > 100 || num < 1){
        msgElement.innerHTML+= `<div> Number must be between 1 and 100 </div>`
        return;
    }
    //Checking number
    if(num === randNum){
        document.body.innerHTML = `
        <h2> Congrats! You have guessed the number!<br><br>
        It was ${num}</h2>
        <button class = "play-again" id="play-again"> Play Again</button>
        `;
    } 
    else if(num>randNum){
        msgElement.innerHTML += `<div>GO LOWER </div>`;
    } 
    else{
        msgElement.innerHTML += `<div>GO HIGHER </div>`;
    }

}

recognition.addEventListener(`end`, () => recognition.start());

document.body.addEventListener(`click`, e => {
    if (e.target.id == `play-again`){
    window.location.reload();
    }
})

