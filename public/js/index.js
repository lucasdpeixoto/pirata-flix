const nerdcast_button = document.querySelector('#nerdcast-button')
const back_button = document.querySelector("#back-button")
const videos_div = document.querySelector(".videos")

nerdcast_button.addEventListener("click", function(){
    videos_div.style.display = "block"
    nerdcast_button.style.display = "none"
    back_button.style.display = "block"
})

back_button.addEventListener("click", function(){
    videos_div.style.display = "none"
    nerdcast_button.style.display = "block"
    back_button.style.display = "none"
})