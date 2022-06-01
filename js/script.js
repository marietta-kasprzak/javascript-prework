function playGame (playerInput) {
    function getMoveName(argMoveId){
        if(argMoveId == 1){
          return 'kamień';
        }
        else if (argMoveId ==2){
            return 'papier';
        }
        else if (argMoveId ==3){
            return 'nożyce'
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }
      
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    let computerMove = getMoveName(randomNumber);
    
    
    printMessage('Mój ruch to: ' + computerMove);
    
    let playerMove = getMoveName(playerInput);
    
    printMessage('Twój ruch to: ' + playerMove);
    
    
    function displayResult(argComputerMove, argPlayerMove) {
        console.log ('start')
    
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        }
        else if (argComputerMove == playerMove) {
            printMessage('Remis!');
        }
        else {
            printMessage('Przegrywasz!');
        }
    }
    
    displayResult (computerMove, playerMove)
}

let rockButton = document.querySelector('#kamien')
rockButton.addEventListener('click', function(){
    playGame(1)
})

let papierButton = document.querySelector('#papier')
papierButton.addEventListener('click', function(){
    playGame(2)
})

let scissorsButton = document.querySelector('#nozyce')
scissorsButton.addEventListener('click', function(){
    playGame(3)
})