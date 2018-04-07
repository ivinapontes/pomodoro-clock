$(document).ready(function(){
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
 
  //console.log(count);
  $("#reset").hide();
$("#start").click(function(){
  var counter= setInterval(timer, 1000);
    count*=60;
    function timer(){
      //Hide Variables
      $("#start, #minus5clock, #add5clock, #minus5Break, #add5Break, #breakNum, #title2, #title1" ).hide();
      $("#timeDiv").show();
      $("#timeDiv").html("Session time:");
      count-= 1;
      if(count===0){
        buzzer.play(); 
        clearInterval(counter);
        var startBreak = setInterval(breakTimer, 1000);
        $("#num").hide();        
      }
      
      if(count%60>=10){
          $("#num").html(Math.floor(count/60)+":"+count%60);
       }
      else{
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
      }
      
   function breakTimer(){
    $("#timeDiv").html("Break Time:");
    $("#breakNum").show();
     breakTime *=60;
       $("#timeDiv").show();
    breakTime -= 1;
    if(breakTime===0){
      clearInterval(startBreak);
      buzzer.play();
      $("#reset").show();
     $("#breakNum, #timeDiv").hide();
    }
     
      if(breakTime%60>=10){
          $("#breakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
       }
      else{
        $("#breakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
      }
       
  }
    }

});
  $("#reset").click(function(){
    count = 25;
    breakTime = 25;
    $("#num").html(count);
    $("#breakNum").html(breakTime);
     $("#start, #minus5clock, #add5clock, #minus5Break, #add5Break, #breakNum, #title2, #title1, #num").show();
     $("#reset, #timeDiv").hide();
    
    
    
  });
  
  
  $("#minus5clock").click(function(){
    if (count>5){
    count -= 5;
    $("#num").html(count);
    }
  });
    $("#add5clock").click(function(){
    
    count += 5;
    $("#num").html(count);
    
  });
   $("#minus5Break").click(function(){
    if (breakTime>5){
    breakTime -= 5;
    $("#breakNum").html(breakTime);
    }
  });
    $("#add5Break").click(function(){   
    breakTime += 5;
    $("#breakNum").html(breakTime);
  });
});