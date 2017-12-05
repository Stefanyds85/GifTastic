$(document).ready(function () {

// var api = RAC4lCleXNU7kZvt4CYXUAEdlO9myO62;  


var topics = ["Kevin Hart","Jay Z", "Michel Obama", "Denzel Washington","Oprah Winfrey"];


function displayButtons() {

  
  for (var i = 0; i < topics.length; i++) {

    var x = $("<button>");

    x.addClass("celebrity");
    x.attr("data-name", topics[i]);
    x.text(topics[i]);
    $("#giphyBtns").append(x);

  };
};

$(".submitBtn").on("click", function(event) {
  event.preventDefault();

  var celebrity = $(".celebInput").val().trim();
  
  topics.push(celebrity);
  console.log(topics);
  
});

displayButtons();



function displayCelebrityInfo() {

  var celebrityName = $("#celebGiphy").attr("data-name");
          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RAC4lCleXNU7kZvt4CYXUAEdlO9myO62&q=celebrity+name&limit=10";
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            $("#celebGiphy").text(JSON.stringify(response));
            
            displayButtons();

          });
          
        };
        $("#giphyBtns").on("click", displayCelebrityInfo);
        
        displayCelebrityInfo();

});


