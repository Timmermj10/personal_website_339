console.log("Loaded")
var drop = document.querySelector(".dropdown")
drop.style.display = "none"

document.querySelector(".nav_open").addEventListener("click", function() {
    var drop = document.querySelector(".dropdown")
    var bar2 = document.querySelector(".bar2")
    console.log(drop.style)

    if (drop.style.display != "none" || drop.style.display == "") {
        console.log("UnClicked")
        drop.style.display = "none"
        bar2.style.animation = "un_clicked 1s forwards"
    }
    else {
        console.log("Clicked")
        drop.style.display = "block"
        bar2.style.animation = "clicked 1s forwards"
    }
});