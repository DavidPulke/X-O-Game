

let value = 'X';
let board = ['', '', '', '', '', '', '', '', ''];


function addValue(button) {
    const index = button.id.replace('box', '') - 1;
    if (board[index] === '') {
        board[index] = value;
        button.innerText = value;
        if (checkWin()) {
            document.getElementById('message').innerText = `${value} as won!`;
            document.querySelector('.resetGame').style.display = 'block';
            disableButtons();
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('message').innerText = `It's a draw!`;
            document.querySelector('.resetGame').style.display = 'block';
        } else {
            value = value === 'X' ? 'O' : 'X';
        }
    }
}



function values(val) {
    value = val;
}

function resetGame() {
    value = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    const buttons = document.querySelectorAll('.gameButton');
    buttons.forEach(function (button) {
        button.innerText = '';
        button.disabled = false;
    });
    document.querySelector('.resetGame').style.display = 'none'
    document.getElementById('message').innerText = '';
}

function disableButtons() {
    const buttons = document.querySelectorAll('.gameButton');
    buttons.forEach(function (button) {
        button.disabled = true
    })
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(function (pattern) {
        return pattern.every(function (index) {
            return board[index] === value;
        });
    });
}