let player, winner = null;
let selectedPlayer = document.getElementById('jogador-selecionado');
let selectedWinner = document.getElementById('vencedor-selecionado');
let squares = document.getElementsByClassName('quadrados');

changePlayer(value = 'X');

function chooseSquare(id) {
    if(winner !== null) {
        return;
    }

    let square = document.getElementById(id);

    if(square.innerHTML !== '-') {
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if(player === 'X') {
        player = 'O'
    } else {
       player = 'X' 
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function changeWinner(square) {
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeColor(square1, square2, square3) {
    square1.style.background = '#00ff00';
    square2.style.background = '#00ff00';
    square3.style.background = '#00ff00';
}

function checkWinner() {
    let square1 = document.getElementById('1');
    let square2 = document.getElementById('2');
    let square3 = document.getElementById('3');
    let square4 = document.getElementById('4');
    let square5 = document.getElementById('5');
    let square6 = document.getElementById('6');
    let square7 = document.getElementById('7');
    let square8 = document.getElementById('8');
    let square9 = document.getElementById('9');

    if(checkStrings(square1, square2, square3)) {
        changeColor(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if(checkStrings(square4, square5, square6)) {
        changeColor(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if(checkStrings(square7, square8, square9)) {
        changeColor(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if(checkStrings(square1, square4, square7)) {
        changeColor(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if(checkStrings(square2, square5, square8)) {
        changeColor(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if(checkStrings(square3, square6, square9)) {
        changeColor(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if(checkStrings(square1, square5, square9)) {
        changeColor(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if(checkStrings(square3, square5, square7)) {
        changeColor(square3, square5, square7);
        changeWinner(square3);
        return;
    }
}

function checkStrings(square1,square2, square3) {
    let check = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        check = true;
    }

    return check;
}

function restart() {
    winner = null;
    selectedWinner.innerHTML = '';

    for(let i = 1; i <= 9; i++) {
        let square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
    }

    changePlayer(value = 'X');
}