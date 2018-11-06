var burger = document.querySelector(".burger"); // a link
var hamburger = document.querySelector(".hamburger"); // <i> fa
var bar = document.querySelector(".bar"); // main nav
var bd = document.body;
var counter = 0;

/* 
    if hamburger is active then overflowY = hidden
    if hamburger isn't active then overflowY = scroll
*/
burger.addEventListener("click", function () {
    
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");

    counter++;
    console.log(counter);
    bar.classList.toggle("active");

    if(counter%2 === 1) {
        document.body.style.overflowY = "hidden";
    }else{
        document.body.style.overflowY = "visible";
    }
    
});

var jslinkService = document.getElementById("jsLinkService");
jslinkService.addEventListener("click", function(){
    if(hamburger.classList.contains("fa-times")){
        bar.classList.remove("active");
        hamburger.classList.toggle("fa-times");
        hamburger.classList.toggle("fa-bars");
        counter++;
        document.body.style.overflowY = "scroll";
    }
});

var jsLinkSport = document.getElementById("jsLinkSport");
jsLinkSport.addEventListener("click", function(){
    if(hamburger.classList.contains("fa-times")){
        bar.classList.remove("active");
        hamburger.classList.toggle("fa-times");
        hamburger.classList.toggle("fa-bars");
        counter++;
        document.body.style.overflowY = "scroll";
    }
});


var jsLinkCoffe = document.getElementById("jsLinkCoffe");
jsLinkCoffe.addEventListener("click", function(){
    if(hamburger.classList.contains("fa-times")){
        bar.classList.remove("active");
        hamburger.classList.toggle("fa-times");
        hamburger.classList.toggle("fa-bars");
        counter++;
        document.body.style.overflowY = "scroll";
    }
});


