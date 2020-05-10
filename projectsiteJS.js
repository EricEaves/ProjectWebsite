mulImgDiv = document.getElementById("muldrotha");
mulLi = document.getElementById("muldrothaText");

mulLi.addEventListener("mouseover", mulOver);
mulLi.addEventListener("mouseout", mulOff);

function mulOver(){
    mulImgDiv.style.visibility = "visible";
    
}
function mulOff(){
    mulImgDiv.style.visibility = "hidden";
}