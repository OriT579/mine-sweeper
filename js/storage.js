'use strict'
var gPromptInterval

var gScores = []

// sets the best game time on screen and updates it in storage. 
function setGameTime() {
    var pName = prompt('Enter players name:');
    var elBestTime = document.querySelector('.best-time span');
    var bestTime = Math.min(gBestTime, gGame.secsPassed);
    gBestTime = bestTime;
    setLocalStorage(pName, gGame.secsPassed)
    elBestTime.innerText = ' ' + bestTime + 's';
}

// enters the score to local storage
function setLocalStorage(name, score) {
    localStorage.setItem(name, score);
}

function createScoreBoard() {
    gScores = []
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        if (gScores.includes({ name: key })) continue;
        gScores.push({ name: key, score: value});
    
    }
    gScores.sort();
}

function renderScoreBoard() {
    var strHTML = ''
    gScores.sort((a, b) => a.score - b.score);
    for (var i = 0; i < gScores.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < 1; j++) {
            strHTML += `<td class="scoreboard-pos">${i+1}</td><td class="scoreboard-cell">Name: ${gScores[i].name}\n</td>
            <td class="scoreboard-cell"> Time: ${gScores[i].score} seconds</td>\n`;
            strHTML += '</td>\n'
        }
        strHTML += '</tr>\n'
    }
    debugger
    var elScoreBoard = document.querySelector('.scoreboard-table')
    elScoreBoard.innerHTML = strHTML
}
