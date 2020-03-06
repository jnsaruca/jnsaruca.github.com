var backpack = document.querySelector(".backpack");
var src = "./box.png";
var subtitle = document.querySelector(".subtitle");
var items = document.querySelector(".items");
var caption = document.querySelectorAll(".caption");
var bottle = items.children[0];
var phone = items.children[1];
var notebook = items.children[2];
console.log(bottle);
items.style.display = "none";
backpack.addEventListener('click', function() {
    if(src === "./box.png") {
        backpack.src = "./box.png";
        src = "./box.png"
        subtitle.style.display = "none";
        items.style.display = "flex";
        
    } else {
        backpack.src = "./box.png";
        src = "./box.png";  
        subtitle.style.display = "block";
        items.style.display = "none";
        for(var i = 0; i < 3; i++) {
            caption[i].style.display = "none";
        }
    }
});

bottle.addEventListener("mouseover", function() {
    caption[0].style.display = "block";
    caption[0].style.animation = "none";
});

bottle.addEventListener("mouseout", function() {
    caption[0].style.display = "none";
})

phone.addEventListener("mouseover", function() {
    caption[1].style.display = "block";
    caption[1].style.animation = "none";
});

phone.addEventListener("mouseout", function() {
    caption[1].style.display = "none";
})

notebook.addEventListener("mouseover", function() {
    caption[2].style.display = "block";
    caption[2].style.animation = "none";
});

notebook.addEventListener("mouseout", function() {
    caption[2].style.display = "none";
})