// $(window).load(function() {
//   // Animate loader off screen
//   $(".se-pre-con").fadeOut("slow");
// });

function navBar() {
  var x = document.getElementById("header__nav");
  if (x.className === "header__nav") {
      x.className += " header__nav-responsive";
  } else {
      x.className = "header__nav";
  }
}