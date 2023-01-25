//var img = document.querySelector(".images")
var img = document.getElementsByClassName("images")[0]

var container = document.querySelector(".container")

function imgHandle(source){
    img.src= source
}
function colors(color){
    container.style.background= color
}
