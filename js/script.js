{function playGame (playerInput) {
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
      
    const randomNumber = Math.floor(Math.random() * 3 + 1);
        computerMove = getMoveName(randomNumber);
        playerMove = getMoveName(playerInput);
    
    console.log('Wylosowana liczba to: ' + randomNumber);
    
    printMessage('Mój ruch to: ' + computerMove);
    
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

const rockButton = document.querySelector('#kamien')
rockButton.addEventListener('click', function(){
    playGame(1)
})

const papierButton = document.querySelector('#papier')
papierButton.addEventListener('click', function(){
    playGame(2)
})

const scissorsButton = document.querySelector('#nozyce')
scissorsButton.addEventListener('click', function(){
    playGame(3)
})
}