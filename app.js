/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerScores, roundScore, activePlayer, dice, liveGame; 

newGame();

function newGame(){
    
    liveGame = true; 
    
    playerScores = [0,0];
    activePlayer = 0;
    roundScore = 0;  
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.querySelector('.dice').style.display = 'none';
}

function rollDice()
{
    if(liveGame){
        
    document.querySelector('.dice').style.display = 'block';
    dice = (Math.floor(Math.random() * 6) + 1);
    document.querySelector('.dice').src = 'dice-' + dice + '.png';
    
    if(dice !== 1)
    {
    roundScore += dice
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    else
    {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active')
        
    if(activePlayer === 0 )
        {
            activePlayer = 1;
        }
    else 
        {
            activePlayer = 0;
        }
    }
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active')
    }

}

function holdRound()
{
    if(liveGame){
        
    playerScores[activePlayer] += roundScore
    document.getElementById('score-' + activePlayer).textContent = playerScores[activePlayer];
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    
    console.log(playerScores[activePlayer]);
    if(playerScores[activePlayer] >= 100)
        {
            liveGame = false;
            alert("The Winner is Player " + (activePlayer+1));
        }
        
    else{
        
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active')
        
    if(activePlayer === 0 )
        {
            activePlayer = 1;
        }
    else 
        {
            activePlayer = 0;
        }
    
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('active')
    }
        
    }
}


document.querySelector('.btn-new').addEventListener('click', newGame);

document.querySelector('.btn-roll').addEventListener('click', rollDice);

document.querySelector('.btn-hold').addEventListener('click', holdRound)


