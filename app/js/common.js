var burger = document.querySelector(".burger");
var hamburger = document.querySelector(".hamburger");
var bar = document.querySelector(".bar");
var bd = document.body;

var counter = 0;

/* 
    if hamburger is active then overflowY = hidden
    if hamburger isn't active then overflowY = scroll
*/
burger.addEventListener("click", function () {
    
    var bar = document.querySelector(".bar");
    var hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");

    counter++;
    bar.classList.toggle("active");

    if(counter%2 === 1) {
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "scroll";
    }
    
});


