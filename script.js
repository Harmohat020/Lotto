window.onload=function(){
  //Random numbers for the Lotto Numbers'

 var randomLotto1 = document.querySelector("#lotto-number1").innerHTML  =Math.floor(Math.random() * 45)+ 1;
 var randomLotto2 = document.querySelector("#lotto-number2").innerHTML =Math.floor(Math.random() * 45)+ 1;
 var randomLotto3 = document.querySelector("#lotto-number3").innerHTML =Math.floor(Math.random() * 45)+ 1;
 var randomLotto4 = document.querySelector("#lotto-number4").innerHTML =Math.floor(Math.random() * 45)+ 1;
 var randomLotto5 = document.querySelector("#lotto-number5").innerHTML =Math.floor(Math.random() * 45)+ 1;
 var randomLotto6 = document.querySelector("#lotto-number6").innerHTML =Math.floor(Math.random() * 45)+ 1;
 var randomLottoExtra = document.querySelector("#lotto-numberExtra").innerHTML =Math.floor(Math.random() * 45)+ 1;

 document.querySelector("#submit-form").addEventListener("click", showResult)

 document.querySelector("#randomBtn").addEventListener("click", randomNumber);

 document.querySelector("#playAgainBtn").addEventListener("click", function(){
  window.location.reload();
 });
 
 var userNumber1;
 var userNumber2;
 var userNumber3;
 var userNumber4;
 var userNumber5;
 var userNumber6;
 var userNumberExtra;
 
  
  //After submit the chosen numbers will be show in the balls
 function showResult(){
     userNumber1 = document.querySelector('#chosen-number1').innerHTML = document.querySelector('#ball1').value;
     userNumber2 = document.querySelector('#chosen-number2').innerHTML = document.querySelector('#ball2').value;
     userNumber3 = document.querySelector('#chosen-number3').innerHTML = document.querySelector('#ball3').value;
     userNumber4 = document.querySelector('#chosen-number4').innerHTML = document.querySelector('#ball4').value;
     userNumber5 = document.querySelector('#chosen-number5').innerHTML = document.querySelector('#ball5').value;
     userNumber6 = document.querySelector('#chosen-number6').innerHTML = document.querySelector('#ball6').value;
     userNumberExtra = document.querySelector('#chosen-numberExtra').innerHTML = document.querySelector('#ballExtra').value;
     
     var total = 0;
   
     if (userNumber1 == randomLotto1) {
       total++;
     }if (userNumber2 == randomLotto2) {
      total++;
     }if (userNumber3 == randomLotto3) {
      total++;
     }if (userNumber4 == randomLotto4) {
      total++;
     }if (userNumber5 == randomLotto5) {
      total++;
     }if (userNumber6 == randomLotto6) {
      total++;
     }
     
     var result;
     var aantal;

     if (total == 0 || total == 1) {
       result = "Unfortunately you did not win anything";
     }if (total == 2 ) {
       result = "You have received €2,- in game credit";
     }if (total == 2 && userNumberExtra == randomLottoExtra) {
      result = "You have won €5,- in game credit!";
     }if (total == 3 ) {
      result = "You have won €7,50 in game credit! ";
     }if (total == 3 && userNumberExtra == randomLottoExtra ) {
      result = "You have won €10,- in game credit!";
     }if (total == 4 ) {
      result = "You have won €20,- in game credit!";
     }if (total == 4 && userNumberExtra == randomLottoExtra) {
      result  = "You have won €50,- in game credit!";
     }if (total == 5 ) {
      result = "You have won €1000,- in game credit!!";
     }if (total == 5 && userNumberExtra == randomLottoExtra ) {
      result = "You have won €25000,- in game credit!!!!";
     }if (total == 6 ) {
      result = "JACKPOT €2.500.000!!!!";
     }
     
     document.querySelector('#result').innerHTML = result;

    if (userNumberExtra != randomLottoExtra) {
      aantal = `You have ${total}/6 good.`;
    }else if (userNumberExtra == randomLottoExtra) {
      aantal = `You have ${total}/6 good. And you also have the reserve number correct.`;
    }

    document.querySelector('#aantal').innerHTML = aantal;
 }

  //When user wants random numbers, he/she can click the random btn
  function randomNumber(){
        document.querySelector("#ball1").value  =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ball2").value =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ball3").value =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ball4").value =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ball5").value =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ball6").value =Math.floor(Math.random() * 45)+ 1;
        document.querySelector("#ballExtra").value =Math.floor(Math.random() * 45)+ 1;
   }
}
