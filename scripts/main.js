function myFunction() {
  var x = document.getElementById("header__nav");
  if (x.className === "header__nav") {
      x.className += " header__nav-responsive";
  } else {
      x.className = "header__nav";
  }
}