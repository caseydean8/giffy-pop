// Create an array.
var buttonArr = ["dog", "cat", "pig"];

// 2. Create buttons to represent array items
document.onload = buttonCreate();
function buttonCreate(){
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
function submitAnimal(){
    var newButton = document.getElementById("user-add-button").value;
    console.log(newButton);
    // var buttonArr = ["dog", "cat", "pig"];
    buttonArr.push(newButton);
    console.log(buttonArr);
    var newGifButton = document.createElement("button");
    newGifButton.classList.add("btn");
    newGifButton.innerHTML = newButton;
    $("#button-holder").append(newGifButton);

    // function newButtonCreate(){
        // for (i = 0; i < buttonArr.length; i++){
        //     var gifButton = document.createElement("button");
        //     gifButton.classList.add("btn");
        //     gifButton.innerHTML = buttonArr[i];
        //     $("#button-holder").append(gifButton);
        // }
    };
    // newButtonCreate();
    

