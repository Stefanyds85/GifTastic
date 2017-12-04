$(document).ready(function () {

// var api = RAC4lCleXNU7kZvt4CYXUAEdlO9myO62;  


var topics = ["Kavin Hart","Jay Z", "Michel Obama", "Denzel Washington","Oprah Winfrey"];



function displayButtons() {

  for (var i = 0; i < topics.length; i++) {

    var x = $("<button>");

    x.addClass("celebbrity");
    x.attr("data-name", topics[i]);
    x.text(topics[i]);
    $("#giphyBtns").append(x);
  }
}

$("#searchGiphy").on("click", function(event) {
  event.preventDefault();

  var celebrity = $("#celebInput").val().trim();
  
  topics.push(celebrity);
  console.log(topics);
  
  
  displayButtons();
});









});