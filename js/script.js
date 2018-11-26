// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice;

var computerChoice;

var winner;

var randomNumber = 0;

$("#shoot").click(function(){
   userChoice = $("#input").val(); 
    randomNumber = Math.random();  
   
   if (randomNumber < .33 ) {
      computerChoice = "rock"
     // else if (randomNumber < .66)
         
      
   }
   computerChoice = $("#input").val(); 
   
   
   winner = $("#input").val(); 
   
});
