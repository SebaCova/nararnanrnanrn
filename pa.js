document.getElementById("soyUnBoton").addEventListener("click",ca);
let color;

function cambiarColor()
{
if(color == true)
{
    document.body.style.backgroundColor = "red";
    color == false
}
else
{
    document.body.style.backgroundColor = "black";
    color == true
}
console.log("soy un log")
}