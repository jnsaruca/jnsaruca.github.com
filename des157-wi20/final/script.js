
//Grab the circle icons from the image gallery
var img1_button = document.querySelector(".img1");
var img2_button = document.querySelector(".img2");
var img3_button = document.querySelector(".img3");

//store the buttons in a new array
var img_buttons = new Array();
img_buttons.push(img1_button, img2_button, img3_button);

var bg = document.querySelector(".hero_container");

//This function will determine which circle was selected in the gallery
function toggleCircles(selected) {
    for(var i = 0; i < img_buttons.length; i++) {
        if(i + 1 === selected) {
            img_buttons[i].style.backgroundColor = "#ffffff";
        } else {
            img_buttons[i].style.backgroundColor = "transparent";
        }
    }
}

//Counter variable for slideshow
var counter = 1;

//This interval call will keep rotating throughout the image gallery.  
setInterval(function() {
    if(counter < img_buttons.length) {
        counter++;
    }
    else {
        counter = 1;
    }
    bg.style.animation = "gallery_transition 2s forwards";
    setTimeout(function() {
        bg.style.backgroundImage = "url('./images/home_bg" + counter + ".jpg')";
        setTimeout(function() {
            bg.style.animation = "none";
        }, 15)
        
    }, 10);
    
    toggleCircles(counter);
}, 5000);

//Event listeners which allow the user to click on different images
//Counter is modified to ensure proper chronological order of image gallery flow
//The toggleCircles() function is called to ensure circle is highlighted when clicked
img1_button.addEventListener('click', function() {
    counter = 1;
    bg.style.backgroundImage = "url('./images/home_bg1.jpg')";
    toggleCircles(1);
});

img2_button.addEventListener('click', function() {
    counter = 2;
    bg.style.backgroundImage = "url('./images/home_bg2.jpg')";
    toggleCircles(2);

});

img3_button.addEventListener('click', function() {
    counter = 3;
    bg.style.backgroundImage = "url('./images/home_bg3.jpg')";
    toggleCircles(3);
});

//Code for pencil interaction
var pencilWriting = document.querySelector(".write_container");
var pencil = document.querySelector(".write_pencil");
pencilWriting.addEventListener("mouseover", function() {
    pencil.style.animation = "pencilAnimation 0.5s alternate infinite";
});

pencilWriting.addEventListener("mouseout", function() {
    setTimeout(function() {
        pencil.style.animation = "none";
    }, 2000);
});




