$(document).ready(function(){
  $("form#contact").submit(function(event){
    event.preventDefault();
    var fNameInput= $("#fName").val();
    var lNameInput = $("#lName").val();
    var addressInput = $("#address").val();
    var emailInput = $("#email").val();
    var phoneNumberInput = $("#phone-number").val();
    var additionalDetailsInput = $("#additional-details").val();
    $("#output #fName").text(fNameInput);
    $("#output #lName").text(lNameInput);
    $("#output #address").text(addressInput);
    $("#output #email").text(emailInput);
    $("#output #phone-number").text(phoneNumberInput);
    $("#output #additional-details").text(additionalDetailsInput);
    $(".clickable").click(function(){
      $(".info-hidden").toggle();
    });
  });
});
