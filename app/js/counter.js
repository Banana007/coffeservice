//counter
var counter = document.querySelector(".counter");
var result = document.querySelector(".result");
result.innerHTML = localStorage.getItem("counter");
var val = localStorage.getItem("counter");
console.log("counter: " + localStorage.getItem("counter"));

counter.addEventListener("click", function(){
    val++;
    localStorage.setItem("counter", val);
    result.innerHTML = val;
    console.log(localStorage.getItem("counter"));
});
//counter