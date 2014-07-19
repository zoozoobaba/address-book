var contactDetails = {};


$(document).ready(function(){
  $("#form-address-book").submit(function(){
    event.preventDefault();
    var inputFirstName = $("#input-first-name").val();
    var inputLastName = $("#input-last-name").val();
    var inputBuilding = $("#input-building").val();
    var inputStreet = $("#input-street").val();
    var inputZip = $("#input-zip").val();

    if (contactDetails.firstName === inputFirstName && contactDetails.lastName === inputLastName) {
      contactDetails.addresses.push([inputBuilding, inputStreet, inputZip]);
    } else {
      contactDetails = {firstName: inputFirstName, lastName : inputLastName, addresses : []}
      contactDetails.addresses = [];
      contactDetails.addresses.push([inputBuilding, inputStreet, inputZip]);   
      $("h4#users-names").append("<span class='contact'>" + contactDetails.firstName + "<br> </span>");
    };
    console.log(contactDetails)


    $(".contact").last().click(function(){
      $(".contact-details-to-show").text(contactDetails.firstName + " " + contactDetails.lastName);
    });

  });
});