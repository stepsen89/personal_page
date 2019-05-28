function navBar() {
  var x = document.getElementById("header__nav");
  if (x.className === "header__nav") {
      x.className += " header__nav-responsive";
  } else {
      x.className = "header__nav";
  }
}

ScrollReveal().reveal('.firstJob')
ScrollReveal().reveal('.secondJob', { delay: 500 })
ScrollReveal().reveal('#punchline', { delay: 2000 })