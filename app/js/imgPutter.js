var imgInp = document.querySelector("#imgInp");
var image = document.querySelector(".image");
image.style.backgroundImage = "url(" + localStorage.getItem("ls-image") + ")";

localStorage.setItem("ls-image", "https://cdn.shopify.com/s/files/1/1183/9460/products/DSC_8431.jpg?v=1511449534");

var img = document.querySelector(".image");

imgInp.addEventListener("keyup", function(event){
    if(event.keyCode  === 13){
        image.style.backgroundImage = "url(" + imgInp.value + ")";
    }
});