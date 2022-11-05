document.querySelectorAll(".row img").forEach(image => {
    image.addEventListener("click", () => {
        makeBigger(image);
    })
});
document.querySelectorAll(".row2 img").forEach(image => {
    image.addEventListener("click", () => {
        makeBigger(image);
    })
});
function makeBigger(i){
    document.getElementById("topLayer").style.display = "block";
    document.querySelector("#topLayer img").src = i.src;

}
document.querySelector("#topLayer").addEventListener("click",()=>{
    document.getElementById("topLayer").style.display = "none";
})