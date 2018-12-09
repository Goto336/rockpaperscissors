// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function() { 
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
    var randomChoice = Math.random();
    
    if(randomChoice<.33){
        var computerChoice="scissors"
    }
    else if(randomChoice<666){
        var computerChoice="paper"
    
    }
   else{ 
       var computerChoice="rock"
    }
    
    $("#computerChoice").text(computerChoice);
     
    if(userChoice=== "rock" && computerChoice=== "rock"){
        winner="tie";
}
 else if (userChoice==="rock" && computerChoice==="paper"){
     winner="computer";
 }
   else if (userChoice==="rock" && computerChoice==="scissors"){
       winner="user";
   }
   
   else if (userChoice==="paper"&& computerChoice==="rock"){
       winner="user";
   }
    else if (userChoice==="paper" && computerChoice==="paper"){
        winner="tie";
    }
   
  else if(userChoice==="paper"&& computerChoice==="scissors"){
      winner="computer";
  }
else if (userChoice==="scissors"&& computerChoice==="rock"){
    winner="computer";
}
   else if (userChoice==="scissors"&& computerChoice==="paper"){
    winner="user";
}
else if (userChoice==="scissors"&& computerChoice==="scissors"){
    winner="tie";
}
   
 $("#result").text(winner);
 
 $("#input").text("empty"); 
   
   
   
   
   
    
});
 

var winner= ""; 
var userChoice="";
var computerChoice="";




$("select.options").change(function(){
    var change = $(this).children("option:selected").val();
     $("body").css("background-color","lightblue");
});