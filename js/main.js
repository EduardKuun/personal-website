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
  if (scrolledFromTop >= 100) {
    document.getElementsByClassName("navbar")[0].className =
      "navbar navbar-expand-lg navbar-light bg-light";
    document.getElementsByClassName("navbar")[0].style.cssText =
      "background-color: #fafafa !important; padding: 5px 20px !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
  } else {
    let collapsedDetails = document.getElementById("navbar-toggle").className;
    if (collapsedDetails === "navbar-toggler") {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-light bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: #fafafa !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
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
  var contact = document.getElementById("contact");

  var aboutOffset = about.getBoundingClientRect().top;
  var skillsOffset = skills.getBoundingClientRect().top;
  var projectsOffset = projects.getBoundingClientRect().top;
  var contactOffset = contact.getBoundingClientRect().top;

  function changeCSS(toChange, otherOne, otherTwo, otherThree) {
    var change = toChange + "Button";
    var one = otherOne + "Button";
    var two = otherTwo + "Button";
    var three = otherThree + "Button";
    document.getElementById(change).style.cssText =
      "color: #13aa52 !important;";
    document.getElementById(one).style.cssText = "color: #444;";
    document.getElementById(two).style.cssText = "color: #444;";
    document.getElementById(three).style.cssText = "color: #444;";
  }

  if (aboutOffset <= 200 && aboutOffset >= -550) {
    changeCSS("about", "skills", "projects", "contact");
  } else if (skillsOffset <= 200 && skillsOffset >= -250) {
    changeCSS("skills", "about", "projects", "contact");
  } else if (projectsOffset <= 200 && projectsOffset >= -350) {
    changeCSS("projects", "skills", "about", "contact");
  } else if (contactOffset <= 200 && contactOffset >= -250) {
    changeCSS("contact", "skills", "about", "projects");
  } else {
    document.getElementById("aboutButton").style.cssText = "color: #444;";
    document.getElementById("skillsButton").style.cssText = "color: #444;";
    document.getElementById("projectsButton").style.cssText = "color: #444;";
    document.getElementById("contactButton").style.cssText = "color: #444;";
  }
};

function ToggleMenu() {
  let navbarToggler = document.getElementById("navbar-toggle");
  let navClass = navbarToggler.className;
  let scrolledFromTop = window.pageYOffset;
  if (scrolledFromTop >= 20) {
    if (navClass == "navbar-toggler collapsed") {
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: #fafafa !important; padding: 5px 20px !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
    }
  } else {
    if (navClass == "navbar-toggler collapsed") {
      document.getElementsByClassName("navbar")[0].className =
        "navbar navbar-expand-lg navbar-light bg-light";
      document.getElementsByClassName("navbar")[0].style.cssText =
        "background-color: #fafafa !important; box-shadow: 0 1px 3px rgba(50, 50, 50, 0.5) !important;";
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
        items: 3.3
      }
    }
  });
});

/*COPYRIGHT YEAR*/
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
document.getElementById('currentYear').textContent = currentYear;