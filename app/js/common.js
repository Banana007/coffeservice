var arr = ["Moscow-0", "China-1", "Japane-2", "USA-3", "India-4"];
// console.log(arr);

// arr.splice(1,3); // delete from 1 to 3
// console.log(arr);

// var newArr = [1,2,3,4,5];
// str = "aaaa"

// arr.splice(0, 0, str); // add to begin 
// console.log(arr);


// arr.splice(1, 2, "aaa","bbb");
// console.log(arr);


// arr.splice(1,1); // удалить первый
// console.log(arr);

var numbers = [ 1, 4, 6, 12, 34, 46, 76, 99];

// let num2 = numbers.map(function(item){
//     return item + "ss";
// });

let num2 = numbers.every(function (item) {
    return item > 0;
});

let num3 = numbers.some(function(item){
    return item > 2;
});

var myobj = {
    name: "alex",
    age: 21
};



