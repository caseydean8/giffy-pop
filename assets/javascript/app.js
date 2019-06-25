// Create an array.
var buttonArr = ["dog", "cat", "pig"];

// 2. Create buttons to represent array items
window.onload = buttonCreate();
function buttonCreate(){
    $("#button-holder").empty();
    // $("#user-input").empty();
    for (i = 0; i < buttonArr.length; i++){
        var gifButton = document.createElement("button");
        gifButton.classList.add("btn");
        gifButton.innerHTML = buttonArr[i];
        $("#button-holder").append(gifButton); 
    }
}


// 3. Buttons retrieve 10 related gifs on press.


// 4. Display still gifs.


// 5. Gif starts upon user click.


// 6. gif stops on user click.


// 7. Create submission form that creates new buttons for user.

$("#add-button").on("click", function(event){
    event.preventDefault();
    var newButton = $("#user-input").val().trim();
    buttonArr.push(newButton);
    $("#user-input").val("");
    buttonCreate();
})

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
       

