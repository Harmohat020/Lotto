$(document).ready(function(){
      $("#playBtn").click(function(){
        $("#playBtn").fadeOut(1000).promise().done(function() {
          $("#lotto-form, #randomBtn").fadeIn(2000);
        });
      });
   $('#submit-form').click(function() {
        $("#lotto-form, #randomBtn, #playBtn").fadeOut(1000).promise().done(function() {
           $("#results-display, #aantal, #result, #playAgainBtn").fadeIn(2000);
        });      
     });
});
