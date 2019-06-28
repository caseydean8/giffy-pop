// Create an array.
var buttonArr = ["dog", "cat", "pig"];

window.onload = buttonCreate();
// window.onload is unobtrusive compared to document

// Create buttons to represent array items
function buttonCreate(){
    $("#button-holder").empty();
    // $("#user-input").empty();
    for (i = 0; i < buttonArr.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("btn");
        gifButton.text(buttonArr[i]);
        $("#button-holder").append(gifButton); 
    }
}

// Create buttons from user input.
$("#add-button").on("click", function(event){
    event.preventDefault();
    var newButton = $("#user-input").val().trim();
    buttonArr.push(newButton);
    $("#user-input").val("");
    buttonCreate();
});

// 3. Buttons retrieve 10 related gifs on press.

$(document).on("click", ".btn", function(loadGifs){
    loadGifs.preventDefault();
    console.log("click noticed");
    var searchTerm = $(this).text().toLowerCase();
    console.log(searchTerm);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=sjxTFxkgrJPh4S2PEHiPUCsBc9oW69JM&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var apiResults = response.data;
        console.log(apiResults);

        for (var i = 0; i < apiResults.length; i++){
            if (apiResults[i].rating !== "r" && apiResults[i].rating !== "pg-13"){
            var imageNest = $("<div>");
            var rating = apiResults[i].rating;
            
            var ratingSpan = $("<p>").text("Rated " + rating);

            // Creating and storing an image tag
            var gifImageTag = $("<img>");

            // Adding a class for future css adjustment and setting the gifImageTag src attribute to imageUrl
            gifImageTag.attr({
                class: "gif-style",
                // src: gifURL,
                alt: searchTerm + " image"
            });
            gifImageTag.attr("src", apiResults[i].images.fixed_height.url);

            // Append paragraph span and gif to imageNest
            imageNest.append(ratingSpan);
            imageNest.append(gifImageTag);
            // Append at gif-holder div
            $("#gif-holder").append(imageNest); 
            }
        }
    });
   

});

// 4. Display still gifs.


// 5. Gif starts upon user click.


// 6. gif stops on user click.


// 7. Create submission form that creates new buttons for user.

