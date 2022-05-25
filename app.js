let player1TotalScore = 0
let player2TotalScore = 0


function randomNumbers () {
    return Math.ceil(Math.random()*6);
}


document.getElementById("rollBtn1").addEventListener('click', () => {
    
    let randomThrow = randomNumbers()

   let diceImageTag = document.getElementById("dicecover1")

   diceImageTag.src = 'dice'+randomThrow+'.png';
   
player1TotalScore += randomThrow;

  
   document.getElementById("player1Score").innerHTML = player1TotalScore; 



  if(player1TotalScore >= 20) {
    alert("Player 1 is the winner!!!!")
  } else {

  }



 })




 


 document.getElementById("rollBtn2").addEventListener('click', () => {
    
     let randomThrow = randomNumbers()

        let diceImageTag = document.getElementById("dicecover2")

        diceImageTag.src = 'dice'+randomThrow+'.png';

  player2TotalScore += randomThrow;
   document.getElementById("player2Score").innerHTML = player2TotalScore 




   if(player2TotalScore >= 20) {
    alert("Player 2 is the winner!!!!")
  } else {

  }

 
 })


 document.getElementById("holdBtn").addEventListener('click', () => {
 
      if(rollBtn1.style.visibility === 'visible') {
        rollBtn1.style.visibility = 'hidden'
      } else {
        rollBtn1.style.visibility = 'visible'
      }
    
    // rollBtn1.style.visibility = 'hidden';







 })

 
 

 
