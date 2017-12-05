$(document).ready(function () {




  var topics = ["Kevin Hart", "Jay Z", "Michel Obama", "Denzel Washington", "Oprah Winfrey"];


  function displayButtons() {
    console.log("displayButton");

    $("#giphyBtns").empty();

    for (var i = 0; i < topics.length; i++) {

      var gifButton = $("<button>");

      gifButton.addClass("celebrity");
      gifButton.attr("data-name", topics[i]);
      gifButton.text(topics[i]);
      $("#giphyBtns").append(gifButton);

    };
  };

  $(".submitBtn").on("click", function (event) {
    console.log("submit click");

    var topicBtn = $(".submitBtn").attr("data-name");
    event.preventDefault();

    var celebrity = $(".celebInput").val().trim();

    if (celebrity) {
      topics.push(celebrity);
      console.log(topics);

      displayButtons();
    }

  });


  // $("#showPic").on("click",sutmitBtn, funtion(event){

  function displayCelebrityInfo() {

    console.log("displayCelebrityInfo");

    var apiKey = "RAC4lCleXNU7kZvt4CYXUAEdlO9myO62";
    console.log($(this));

    var celebrityName = $(this).attr("data-name");
    console.log("celbrityName:", celebrityName);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + celebrityName + "&api_key=" + apiKey + "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function (response) {

      var results = response.data

      // console.log("resutls:", results);

      // results.forEach(function (item, index) {

      $("#celebGiphy").empty();

      for (var i = 0; i < results.length; i++) {
        console.log("i:", i);
        var image = $("<img>").attr("src", results[i].images.fixed_height_still.url);
        // var celebPic = response.images;

        var rated = $("<p>").text("Rated:" + results[i].rating);
        // var rating = response.rating;

        $("#celebGiphy").append(image);
      }

      // displayButtons();
    });
    // });
  };

  $("#giphyBtns").on("click", ".celebrity", displayCelebrityInfo);

  displayButtons();
  // displayCelebrityInfo()

});

// });