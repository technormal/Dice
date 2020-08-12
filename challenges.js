/*
RULES :

Can't start the game until the winning score is submited.

Player rolls two dices by pushing the button "roll dice", the sum of the two dices gets registered as the current score. 
(problem here)

When either of the dices roll 1, turn changes and the current score of the respective player is set to 0.

When player pushes the hold botton the current score get added to the score and the turn changes.

First one to reach the winning score wins.

PROBLEM :- The dices at display don't match with the corresponding number.

                                                                              - Ishan Singh

*/




var scores, rscore, aplayer, gamepl, winscore;

function getScore() {
    if (!gamepl) {
        winscore = document.querySelector('#win').value;
        console.log(winscore);
        gamepl = true;
        document.getElementById('win').readOnly = true;
    }
}


init();




document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamepl) {

        var dice1 = Math.floor(Math.random() * 6) + 1;
        
        var dice2 = Math.floor(Math.random() * 6) + 1;
        
        console.log(dice1);
        console.log(dice2);
        
        var dice = dice1 + dice2;

        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';
        console.log(dice);


        
        if (dice1 !== 1 && dice2 !==1) {

            rscore += dice;
            document.querySelector('#current-' + aplayer).textContent = rscore;

        } else {

            nextp();
        }


    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamepl) {
        scores[aplayer] += rscore;

        document.querySelector('#score-' + aplayer).textContent = scores[aplayer];



        if (scores[aplayer] >= winscore) {
            document.querySelector('#name-' + aplayer).textContent = 'WINNER!';

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

            document.querySelector('.player-' + aplayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + aplayer + '-panel').classList.remove('active');

            gamepl = false;
        } else {
            nextp();
        }
    }

});


function nextp() {
    aplayer === 0 ? aplayer = 1 : aplayer = 0;
    rscore = 0;

    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    aplayer = 0;
    rscore = 0;
    gamepl = false;

    document.getElementById('win').readOnly = false;

    document.getElementById('dice-1').style.display = 'none';

    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';

    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';

    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent = 'player 1';

    document.querySelector('#name-1').textContent = 'player 2';

    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}