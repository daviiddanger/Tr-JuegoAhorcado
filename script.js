var word = 'trandroid';
var guess = [];
var attempts = [];
var h2 = document.querySelector('h2');
var output = document.getElementById('output');
var guessed = document.getElementById('guessed');
var input = document.getElementById('input');
var man = [
     ' ----|  <br> |      <br> |      <br> |      <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😄  <br> |      <br> |      <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😥  <br> |   |  <br> |      <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😰  <br> |   |  <br> |   |  <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😩  <br> |  \\|  <br> |   |  <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😫  <br> |  \\|/ <br> |   |  <br> |      <br> |      <br>--------',
  ' ----|  <br> |  😱  <br> |  \\|/  <br> |   |  <br> |  /   <br> |      <br>--------',
  ' ----|  <br> |  💀  <br> |  \\|/  <br> |   |  <br> |  / \\ <br> |      <br>--------'
]


function resetGame(){
    guess= [];
    attempts= [];
    output.innerHTML = '';
    updateDisplay();
}

function updateDisplay(){
    var current = '';
    var failed = '';
    input.value = '';
    for(i=0; i<word.length; i++){
        if (word[i] == ' '){
            current += '<br>';
        } else if(guess.indexOf(word[i]) !== -1){
            current += '<span>' + word[i]+'</span>';
        }
        else
        {
            current += '<span> </span>';
        }
    }
    for(i=0; i<attempts.length; i++){
        failed += '<span>' + attempts[i] + '</span>';
    }
    guessed.innerHTML = failed;
    h2.innerHTML = current;
    output.innerHTML = man[attempts.length];
    if(current.indexOf('> <') == -1){
        alert("¡¡Ganaste!!");
    }
    if(attempts.length>=7){
        alert("Perdiste la palabra era: "+word);
    }

    input.focus()
}

function guessLetter(){
    if(input.value !== undefined){
        if(attempts.length < 7){
            if(word.indexOf(input.value)!== -1){
                alert("Correcto");
                guess.push(input.value.toLowerCase());
            }else{
                attempts.push(input.value.toLowerCase());
                alert("Incorrecto,"+"Te Quedan: "+attempts.length+"/7");
            }
            updateDisplay();
        }
    }
}
document.onclick = function(){
    input.focus();
}

document.onkeypress = function(e){
    if(e.keyCode == '27'){
        var closeAll = document.querySelectorAll('[data-modal');
        for(i=0; i<closeAll.length; i++){
            var id = closeAll[i].getAttribute('data-modal');
            destroyModal(id)
        }
    }
}
resetGame();

