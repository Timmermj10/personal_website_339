console.log("Loaded")
var drop = document.querySelector(".dropdown");
drop.style.display = "none";

// Find what page we are on
var currentPageName = window.location.pathname.split('/').pop();

// Get all the variables we will need
var check = document.querySelector("#darkmode-toggle");
var body = document.querySelector("body");
var main = document.querySelector("#main");
var nav = document.querySelector(".navbar");
var bar1 = document.querySelector(".bar1");
var bar2 = document.querySelector(".bar2");
var bar3 = document.querySelector(".bar3");
var about = document.querySelector(".about");
var projects = document.querySelectorAll(".project");
var funs = document.querySelectorAll(".fun");
var footer = document.querySelector(".footer");
var page_name = document.querySelector(".page_name");
var dropdown = document.querySelector(".dropdown");

// Set dark mode cookie to maintain state
// If the cookie is not set
if (!checkCookie("darkmode")) {
    console.log("Set cookie");
    document.cookie = "darkmode=true";
    check.checked = true;
}
// If the cookie is set
else {
    if (getCookie("darkmode") == "true") {
        check.checked = true;

        body.style.backgroundColor = "#313131";
        main.style.backgroundColor = "#414141";
        main.style.border= "#414141";
        main.style.color = "white"
        nav.style.backgroundColor = "#414141";
        nav.style.color = "white";
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";
        footer.style.backgroundColor = "#414141";
        footer.style.color = "white";
        page_name.style.color = "white";
        dropdown.style.backgroundColor = "#525252";

        // Specific pieces for each page
        if (currentPageName == "index.html") {
            about.style.backgroundColor = "#525252";
        }

        else if (currentPageName == "projects.html") {
            projects.forEach(function(project) {
                project.style.backgroundColor = "#525252";
            })
        }

        else if (currentPageName == "fun.html") {
            funs.forEach(function(fun) {
                fun.style.backgroundColor = "#525252";
            })
        }
    }
    else {
        check.checked = false;

        body.style.backgroundColor = "#90A4AE";
        main.style.backgroundColor = "#B0BEC5";
        main.style.border= "#B0BEC5";
        main.style.color = "#313131"
        nav.style.backgroundColor = "#B0BEC5";
        nav.style.color = "#313131";
        bar1.style.backgroundColor = "#313131";
        bar2.style.backgroundColor = "#313131";
        bar3.style.backgroundColor = "#313131";
        footer.style.backgroundColor = "#B0BEC5";
        footer.style.color = "#313131";
        page_name.style.color = "#313131";
        dropdown.style.backgroundColor = "#CFD8DC";

        // Specific pieces for each page
        if (currentPageName == "index.html") {
            about.style.backgroundColor = "#CFD8DC";
        }

        else if (currentPageName == "projects.html") {
            projects.forEach(function(project) {
                project.style.backgroundColor = "#CFD8DC";
            })
        }

        else if (currentPageName == "fun.html") {
            funs.forEach(function(fun) {
                fun.style.backgroundColor = "#CFD8DC";
            })
        }
    }
}

window.name = JSON.stringify({ key: 'darkmode', anotherKey: 1 });

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

document.querySelector("#darkmode-toggle").addEventListener("click", function() {
    console.log("Switch mode")

    // console.log(getCookie("darkmode"));
    if (getCookie("darkmode") == "true") {
        body.style.backgroundColor = "#90A4AE";
        main.style.backgroundColor = "#B0BEC5";
        main.style.border= "#B0BEC5";
        main.style.color = "#313131"
        nav.style.backgroundColor = "#B0BEC5";
        nav.style.color = "#313131";
        bar1.style.backgroundColor = "#313131";
        bar2.style.backgroundColor = "#313131";
        bar3.style.backgroundColor = "#313131";
        footer.style.backgroundColor = "#B0BEC5";
        footer.style.color = "#313131";
        page_name.style.color = "#313131";
        dropdown.style.backgroundColor = "#CFD8DC";

        // Specific pieces for each page
        if (currentPageName == "index.html") {
            about.style.backgroundColor = "#CFD8DC";
        }

        else if (currentPageName == "projects.html") {
            projects.forEach(function(project) {
                project.style.backgroundColor = "#CFD8DC";
            })
        }

        else if (currentPageName == "fun.html") {
            funs.forEach(function(fun) {
                fun.style.backgroundColor = "#CFD8DC";
            })
        }


        document.cookie = "darkmode=false";
    }
    else {
        body.style.backgroundColor = "#313131";
        main.style.backgroundColor = "#414141";
        main.style.border= "#414141";
        main.style.color = "white"
        nav.style.backgroundColor = "#414141";
        nav.style.color = "white";
        bar1.style.backgroundColor = "white";
        bar2.style.backgroundColor = "white";
        bar3.style.backgroundColor = "white";
        footer.style.backgroundColor = "#414141";
        footer.style.color = "white";
        page_name.style.color = "white";
        dropdown.style.backgroundColor = "#525252";

        // Specific pieces for each page
        if (currentPageName == "index.html") {
            about.style.backgroundColor = "#525252";
        }

        else if (currentPageName == "projects.html") {
            projects.forEach(function(project) {
                project.style.backgroundColor = "#525252";
            })
        }

        else if (currentPageName == "fun.html") {
            funs.forEach(function(fun) {
                fun.style.backgroundColor = "#525252";
            })
        }

        document.cookie = "darkmode=true";
    }
});

// Stack Overflow get cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Adjusted to check if the cookie exists
function checkCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return true;
}