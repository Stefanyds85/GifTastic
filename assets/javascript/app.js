$(document).ready(function () {

// var api = RAC4lCleXNU7kZvt4CYXUAEdlO9myO62;  


var topics = ["Kevin Hart","Jay Z", "Michel Obama", "Denzel Washington","Oprah Winfrey"];


function displayButtons() {
  $("#giphyBtns").empty();
  
  for (var i = 0; i < topics.length; i++) {

    var gifButton = $("<button>");

    gifButton.addClass("celebrity");
    gifButton.attr("data-name", topics[i]);
    gifButton.text(topics[i]);
    $("#giphyBtns").append(gifButton);

  };
};

$(".submitBtn").on("click", function(event) {
  event.preventDefault();

  var celebrity = $(".celebInput").val().trim();
  
  topics.push(celebrity);
  console.log(topics);

  displayButtons();
  
});



function displayCelebrityInfo() {

  var celebrityName = $("#celebGiphy").attr("data-name");
          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RAC4lCleXNU7kZvt4CYXUAEdlO9myO62&q=celebrity+name&limit=10";
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
           
            var results = response.data
            
            results.forEach (function (item, index) {

            var image = $("<img>").attr("src", results[index].images.fixed_height_still.url);
            // var celebPic = response.images;

            var rated = $("<p>").text("Rated:" + results[index].rating);
            // var rating = response.rating;

            $("#celebGiphy").empty();
            $("#celebGiphy").append(image, rated);
            
            
            displayButtons();
            });
          });
        };

        $("#giphyBtns").on("click", displayCelebrityInfo);
        
         displayButtons();
         displayCelebrityInfo()
});






