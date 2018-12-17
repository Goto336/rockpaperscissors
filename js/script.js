// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var winner= ""; 
var userChoice="";
var computerChoice="";



$("#shoot").click(function() { 
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var randomChoice = Math.random();
    
    if(randomChoice<.33){
        var computerChoice="scissors"
    }
    else if(randomChoice<.66){
        var computerChoice="paper"
    
    }
   else{ 
       var computerChoice="rock"
    }
    
    $("#computerChoice").text(computerChoice);
     
    if(userChoice=== "rock" && computerChoice=== "rock"){
        winner="Tie?";
    }
  else if (userChoice==="rock" && computerChoice==="paper"){
     winner="Computer!";
     }
   else if (userChoice==="rock" && computerChoice==="scissors"){
       winner="USER WINS!!!";
   }
   
   else if (userChoice==="paper"&& computerChoice==="rock"){
       winner="USER WIN!!!";
   }
    else if (userChoice==="paper" && computerChoice==="paper"){
        winner="Tie?";
    }
   
  else if(userChoice === "paper" && computerChoice === "scissors"){
      winner="Computer!";
   }
    else if (userChoice === "scissors" && computerChoice ==="rock"){
    winner= "Computer!";
    }
   else if (userChoice==="scissors"&& computerChoice==="paper"){
    winner="USER WINS!!!";
    }
    else if (userChoice==="scissors"&& computerChoice==="scissors"){
    winner="Tie?";
    }
   
    $("#result").text(winner);
 
    $("#input").text("empty"); 
    
});
 




$("select.options").change(function(){
    var change = $(this).children("option:selected").val();
     $("body").css("background-color","lightblue");
});