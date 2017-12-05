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
          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=RAC4lCleXNU7kZvt4CYXUAEdlO9myO62&q=celebrity+name&limit=2";
  
          $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
           console.log(response)

            var image = $("<img>").attr("src",celebPic);
            var celebPic = response.images;

            var rated = $("<p>").text("Rated:" + rating);
            var rating = response.rating;

            $("#celebGiphy").empty();
            $("#celebGiphy").append(images, rating);

              
            
            displayButtons();

          });
        };

        $("#giphyBtns").on("click", displayCelebrityInfo);
        
         displayButtons();

});






