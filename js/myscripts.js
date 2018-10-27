//var name = "Isaac Obuya"
//age = 22
//console.log(name + " is " + age + " years old")
//alert(name)
username = prompt("What is your name?")
user_age = prompt("What is your age?")
//onfirm("Do you want to save?")

function printName(name,age) {
     alert(name + " is " + age + " years old.")
}
//calling the function
printName(username,user_age)
//calculating area of a circle
function calculateArea(radius) {
    var area = Math.PI * radius * radius
    alert("The area of the circle is " + Math.trunc(area,3))
}

$(document).ready(function () 
{
$("button").click(function () { 
    $("img").hide();    
});

$("button").dblClick(function () { 
    $("img").show();    
});

});


