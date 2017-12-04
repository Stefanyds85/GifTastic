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
  
});

displayButtons();


function displayCelibrityInfo() {
  
          var celebrityName = $("giphyBtns").attr("data-name");
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=RAC4lCleXNU7kZvt4CYXUAEdlO9myO62&limit=5";
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            $("#celebGiphy").text(JSON.stringify(response));
            displayButtons();
          });
        }

displayCelibrityInfo();




});