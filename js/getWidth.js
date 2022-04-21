let markImg = document.querySelector(".markImg")
let imgBox = document.querySelector(".imgBox")
window.onresize = function () {
    imgBox.style.height = markImg.clientHeight + 'px'

}
