document.querySelector("#chanterelle-button") .addEventListener("click", function() {
    document.querySelector("#header") .innerHTML = "Chanterelle"
    document.querySelector("#image").src = "chanterelle.jpg"
    document.querySelector("#credit").innerHTML="© Neil Leclerc"
})

document.querySelector("#oyster-button") .addEventListener("click", function() {
    document.querySelector("#header") .innerHTML = "Oyster mushroom"
    document.querySelector("#image").src = "oyster.jpg"
    document.querySelector("#credit").innerHTML="© Robbie Sproule"
})

document.querySelector("#fly-agaric-button") .addEventListener("click", function() {
    document.querySelector("#header") .innerHTML = "Fly agaric"
    document.querySelector("#image").src = "fly-agaric.jpg"
    document.querySelector("#credit").innerHTML="© Victoria Vasilieva"
})