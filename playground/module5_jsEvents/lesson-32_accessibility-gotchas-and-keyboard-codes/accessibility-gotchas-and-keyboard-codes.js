console.log("accessibility gotchas and keyboard codes");

const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
    // This is to avoid the console.log() command to run unless
    // there's a click event or pressing the Enter key.
    if (event.type === "click" || event.key === "Enter") {
        console.log("You clicked the photo!!!");
    }
}

// This will trigger the handlePhotoClick function with the click of the mouse
photo.addEventListener("click", handlePhotoClick);

// This will trigger the handlePhotoClick function by pressing the Enter key
photo.addEventListener("keyup", handlePhotoClick);
