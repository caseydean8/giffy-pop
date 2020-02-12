// Create an array.
const d = document;
let topics = ["mouse", "cat", "piggy"];
// Create buttons to represent array items
const buttonCreate = () => {
  d.getElementById("button-holder").innerHTML = "";
  topics.forEach(topic => {
    const gifButton = $("<button>");
    gifButton.addClass("btn");
    gifButton.text(topic);
    $("#button-holder").append(gifButton);
  });
};

window.onload = buttonCreate();
// window.onload is unobtrusive compared to document

// Create new buttons from user input.
$("#add-button").on("click", function(event) {
  event.preventDefault();
  // Disable submit button if input field is blank.
  if ($("#user-input").val().length != 0) {
    this.disabled = false;
    const newButton = $("#user-input")
      .val()
      .trim();
    topics.push(newButton);
    $("#user-input").val("");
    buttonCreate();
    loadGifs(newButton);
  }
});

const loadGifs = (searchTerm) => {
  // Clear any previous gifs.
  document.getElementById("gif-holder").innerHTML = "";

  // const searchTerm = this.textContent.toLowerCase();
  console.log(searchTerm);
  const queryURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=sjxTFxkgrJPh4S2PEHiPUCsBc9oW69JM&limit=12`;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    const apiResults = response.data;
    // console.log(apiResults);
    apiResults.forEach(result => {
      if (result.rating !== "r" && result.rating !== "pg-13") {
        const imageNest = $("<div>").addClass("gifDiv");
        const rating = result.rating;

        const ratingSpan = $("<p>").text("Rated " + rating);

        // Creating and storing an image tag
        const gifImageTag = $("<img>");

        // Adding a class and setting the gifImageTag src attribute to imageUrl
        gifImageTag.attr({
          class: "gif-style",
          alt: `${searchTerm} image`
        });

        gifImageTag.attr("src", result.images.fixed_width_still.url);

        gifImageTag.attr("data-still", result.images.fixed_width_still.url);

        gifImageTag.attr("data-playing", result.images.fixed_width.url);

        gifImageTag.attr("data-state", "still");

        // Append paragraph span and gif to imageNest
        imageNest.append(ratingSpan);
        imageNest.append(gifImageTag);

        // Append at gif-holder div
        $("#gif-holder").append(imageNest);
      }
    });
  });
};

// Buttons retrieve 10 related still images/gifs.

$(document).on("click", ".btn", function(event) {
  event.preventDefault();
  loadGifs(this.textContent);
});

// 4. Display still gifs.

// 5. Gif starts upon user click.

$(document).on("click", "img.gif-style", function() {
  var state = $(this).attr("data-state");

  // If clicked image's state is still, change its src to what its data-playing value is.
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-playing"));
    // Then, set the image's data-state to playing
    $(this).attr("data-state", "playing");
    // Else gif stops on user click, set src to the data-still value
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
