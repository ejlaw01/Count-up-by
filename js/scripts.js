
//business logic
var outputArray = [];

var multiply = function (num1, num2) {
  for (var i = num2; i <= num1; i += num2) {
  outputArray.push(i);
  }
}

//user interface logic
$(document).ready(function(){
  $("form").submit(function(event){
    // if ($("ul li").length > 0){
    //   $("li").remove();
    // }
    var finalNumber = parseFloat($("input#finalNumber").val());
    var multipleNumber = parseFloat($("input#multipleNumber").val());
    if (finalNumber <= 0 || multipleNumber <= 0 || isNaN(finalNumber) || isNaN(multipleNumber) || multipleNumber > finalNumber) {
      $(".form-group").addClass("has-error");
    }

    multiply(finalNumber, multipleNumber);
    var i=0;
    outputArray.forEach(function(){
      $("ul").append("<li>" + outputArray[i] + "</li>");
      i++;
    });

    event.preventDefault();
  });
});
