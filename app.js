/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

init();



document.querySelector('.btn-roll').addEventListener('click', function () {

    var dice = Math.floor(Math.random() * 6) + 1;
    //先定義dice為 1~6的 隨機數字
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';



    if (dice !== 1) {
        //如果不等於1 繼續加上去  roundscore是一個用來存放分數
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});

// click hold
document.querySelector('.btn-hold').addEventListener('click', function () {
    //1. add current score to global score
    scores[activePlayer] += roundScore;
    //2. update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //3.check if player won the game

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "Winner ! ";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        nextPlayer();

    }
});


function nextPlayer() {
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    //這是起始狀態
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0; //左邊玩家是0 右邊玩家是1
    document.querySelector('.dice').style.display = 'none';
    //這邊抓取class="dice"的元素 必且更改css display="none";

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('ctive');



}
//addEventListener 第一個函數是觸發事件 第二個是調用的函數



// dice = Math.floor(Math.random() * 6) + 1;
//Math.floor ->省略小數點  Math.random ->隨機產生 0到1之間的數字

// document.querySelector('#current-'+activePlayer).textContent = dice; //->這邊是單純更改文字內容
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; //->這邊是更改html語法

// var x =document.querySelector('#score-0').textContent;
// console.log(x);