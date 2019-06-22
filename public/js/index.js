const gobutton = document.querySelector('#go-button')
const back_button = document.querySelector("#back-button")
const videos_div = document.querySelector(".videos")

gobutton.addEventListener("click", function(){
    videos_div.style.display = "block"
    gobutton.style.display = "none"
    back_button.style.display = "block"
})

back_button.addEventListener("click", function(){
    videos_div.style.display = "none"
    gobutton.style.display = "block"
    back_button.style.display = "none"
})

