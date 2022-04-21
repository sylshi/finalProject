var bigImg = document.querySelector(".bigImg")
var imgSrc = document.querySelector(".imgSrc")
var Close = document.querySelector(".Close")
let imgsArr = document.querySelectorAll(".imgs")
for(let i = 0; i < imgsArr.length; i++){
    imgsArr[i].onclick = function () {
        bigImg.style.display = 'flex'
        imgSrc.src = imgsArr[i].src
    }
}
Close.onclick = function () {
    bigImg.style.display = 'none'
}
