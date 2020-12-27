const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");

const btn = document.querySelector("a.btn__reset");

var missed = 0;

const phrases = [

'Grand Theft Auto',
'World of Warcraft',
'League of Legends',
'Call of Duty',
'The Elder Scrolls'


];


const ul = document.querySelector('#phrase ul')

let hearts = document.querySelectorAll('img');


btn.addEventListener('click', (e) => {
        const button = e.target;
        const divStart = document.getElementById('overlay');
        divStart.style.opacity = '0';
        window.setTimeout(function(){
            divStart.style.display = 'none';
        }, 1300);
        
    
  });
  
  function getRandomPhraseAsArray(arr){
    randomArray = arr[Math.floor(Math.random()*phrases.length)].split('');
    return randomArray;

} 




function addPhraseToDisplay (arr) {
    for (let i =0; i < arr.length; i++){
      var li = document.createElement('li');
      var text = document.createTextNode(arr[i]);
      li.appendChild(text);
      test = ul.appendChild(li);
      if (arr[i].toLowerCase() != arr[i].toUpperCase()){
        li.className = 'letter';
    } else {
        li.className = 'space';
    }
    }
    

}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 



function checkLetter(button){
    let onlyLetter = document.querySelectorAll('.letter');
    let match = null;

    for (let i = 0; i < onlyLetter.length; i++){
        if(onlyLetter[i].textContent.toLowerCase() === button.textContent)
        {
            onlyLetter[i].className += " show";
            match += onlyLetter[i].textContent;
        } 

    }
    return match;

}






 



function checkWin() {

    const letter = document.getElementsByClassName('letter');
    const show = document.getElementsByClassName('show');
    let startOverlay = document.getElementById('overlay');
    let header = document.querySelector('.title');
    let resetButton = document.createElement("a");
    resetButton.innerHTML = "Try Again";
    resetButton.className = "resetButton";
    if(letter.length === show.length){
        startOverlay.className = "win";
        header.textContent = "You Won!";
        startOverlay.removeChild(btn);
        startOverlay.appendChild(resetButton);
     
        startOverlay.style.opacity = '1';
        startOverlay.style.display = 'flex';
        resetButton.addEventListener('click', () => {

            location.reload();    
        });

} else if (missed > 4){
    startOverlay.className = "lose";
    header.textContent = "You Lost!";
    startOverlay.removeChild(btn);
    startOverlay.appendChild(resetButton);

 
    startOverlay.style.opacity = '1';
    startOverlay.style.display = 'flex';
    resetButton.addEventListener('click', () => {

        location.reload();    
    });

}

}




qwerty.addEventListener('click', (e) =>{
    
    const keyboardButton = e.target;
    if(keyboardButton.tagName == 'BUTTON'){
        keyboardButton.className = "chosen";
        keyboardButton.disabled = true;
        let check = checkLetter(e.target);
        if(check === null){
        missed++;
        hearts[missed - 1].src = 'images/lostHeart.png';    
        }
        checkWin();
    }

    
});

