/* NAVBAR */
$(".navbar-nav>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
  document.getElementById("navbar-toggle").className = "navbar-toggler";
  ToggleMenu();
  document.getElementById("navbar-toggle").className =
    "navbar-toggler collapsed";
});

window.onscroll = function () {
  let scrolledFromTop = window.pageYOffset;
  if (scrolledFromTop >= 20) {
    document.getElementsByClassName("navbar")[0].className =
      "navbar navbar-expand-lg navbar-light bg-light";
    document.getElementsByClassName("navbar")[0].style.cssText =
      "background-color: var(--light-color) !important; padding: 5px 20px !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
  } else {
    let collapsedDetails = document.getElementById("navbar-toggle").className;
    if (collapsedDetails === "navbar-toggler") {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-light bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: var(--light-color) !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
    } else {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-dark bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: transparent !important";
    }
  }

  var about = document.getElementById("about");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");

  var aboutOffset = about.getBoundingClientRect().top;
  var skillsOffset = skills.getBoundingClientRect().top;
  var projectsOffset = projects.getBoundingClientRect().top;

  function changeCSS(toChange, otherOne, otherTwo) {
    var change = toChange + "Button";
    var one = otherOne + "Button";
    var two = otherTwo + "Button";
    document.getElementById(change).style.cssText =
      "color: var(--dark-green-color) !important;";
    document.getElementById(one).style.cssText = "color: #444;";
    document.getElementById(two).style.cssText = "color: #444;";
  }

  if (aboutOffset <= 200 && aboutOffset >= -250) {
    changeCSS("about", "skills", "projects");
  } else if (skillsOffset <= 200 && skillsOffset >= -250) {
    changeCSS("skills", "about", "projects");
  } else if (projectsOffset <= 200 && projectsOffset >= -250) {
    changeCSS("projects", "skills", "about");
  } else {
    document.getElementById("aboutButton").style.cssText = "color: #444;";
    document.getElementById("skillsButton").style.cssText = "color: #444;";
    document.getElementById("projectsButton").style.cssText = "color: #444;";
  }
};

function ToggleMenu() {
  let navbarToggler = document.getElementById("navbar-toggle");
  let navClass = navbarToggler.className;
  let scrolledFromTop = window.pageYOffset;
  if (scrolledFromTop >= 20) {
    if (navClass == "navbar-toggler collapsed") {
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: var(--light-color) !important; padding: 5px 20px !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
    }
  } else {
    if (navClass == "navbar-toggler collapsed") {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-light bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: var(--light-color) !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
    } else {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-dark bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: transparent !important;";
    }
  }
}

/* PROJECTS CAROUSEL */
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    nav: true,
    stagePadding: 10,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1.5
      },
      1000: {
        items: 2
      },
      1300: {
        items: 2.9
      }
    }
  });
});

/*COPYRIGHT YEAR*/
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.getElementById('currentYear').textContent = currentYear;