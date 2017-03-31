var combinations;
var turn;
var cellsFilled;
var selected;
var cellContent;
var imageX;
var imageO;

$(function () {
    combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    selected = [false, false, false, false, false, false, false, false, false];
    content = new Array();
    turn = 0;
    cellsFilled = 0;
    imageX = "url(X.svg)";
    imageO = "url(O.svg)";
});

function userClick(cellNumber) {
    if (selected[cellNumber] == false) {
        $(".cell#cell_" + cellNumber).find("div").css("background-image", (turn % 2 == 0 ? imageX : imageO));
        content[cellNumber] = (turn % 2 == 0 ? "X" : "O");
        turn++;
        cellsFilled++;
        selected[cellNumber] = true;
        getWinner = checkWinner(content[cellNumber]);
        if (getWinner[0]) {
            displayWinner(content[cellNumber], getWinner[1]);
        }
        if (cellsFilled == 9) {
            console.log("Draw!");
        }
    }
}

function checkWinner(player) {
    var winner = false;
    var combination;
    combinations.forEach(function (item) {
        if (content[item[0]] == player && content[item[1]] == player && content[item[2]] == player) {
            winner = true;
            combination = item;
        }
    });
    return [winner, combination];
}

function displayWinner(winner, combination) {
    for (var i = 0; i < 9; i++)
        if(selected[i] && combination[0] != i && combination[1] != i && combination[2] != i)
                $(".cell#cell_" + combination).find("div").css(/*TODO: Darken the background*/);
}