// Create an array.
var buttonArr = ["dog", "cat", "pig"];

// 2. Create buttons to represent array items
window.onload = buttonCreate();
// window.onload is unobtrusive compared to document
function buttonCreate(){
    $("#button-holder").empty();
    // $("#user-input").empty();
    for (i = 0; i < buttonArr.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("btn");
        gifButton.attr("src");
        gifButton.text(buttonArr[i]);
        $("#button-holder").append(gifButton); 
    }
}

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
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=sjxTFxkgrJPh4S2PEHiPUCsBc9oW69JM&tag=" + searchTerm + "&rating=G&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    
        // Saving the image_original_url property
        var giffyPop = response.data.image_original_url;

        // Creating and storing an image tag
        var gifImage = $("<img>");

        // Setting the gifImage src attribute to imageUrl
        gifImage.attr("src", giffyPop);
        gifImage.attr("alt", searchTerm + " image");
        
        $("#gif-holder").append(gifImage); 
        
    });
   

});

// 4. Display still gifs.


// 5. Gif starts upon user click.


// 6. gif stops on user click.


// 7. Create submission form that creates new buttons for user.

// moved above loadGifs
// $("#add-button").on("click", function(event){
//     event.preventDefault();
//     var newButton = $("#user-input").val().trim();
//     buttonArr.push(newButton);
//     $("#user-input").val("");
//     buttonCreate();
// })

// function submitAnimal(){
    
//     var newButton = document.getElementById("user-add-button").value;
//     console.log(newButton);
//     document.getElementById("user-input").value = "";
//     buttonArr.push(newButton);
//     console.log(buttonArr);
//     var newGifButton = document.createElement("button");
//     newGifButton.classList.add("btn");
//     newGifButton.innerHTML = newButton;
//     $("#button-holder").append(newGifButton);
// };
 

// this is supposed to change enter to a click, not working for me.
// var input = document.getElementById("user-add-button");
//     input.addEventListener("keyup", function(event) {
//       if (event.keyCode === 13) {
//        event.preventDefault();
//        document.getElementById("user-add-button").click();
//       }
//     }); 
       

