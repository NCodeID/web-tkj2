function dropdown() {
  var a = document.getElementById("expanded");
  var b = document.getElementById("expand");
  var c = document.getElementById("arrow");

  if (b.checked == true) {
    a.style = "height: 200px;border-radius: 0px 0px 0px 0px;";
    c.style = "transform: rotate(-90deg) ";
  } else {
    a.style = "height: 70px";
    c.style = "transform: rotate(0deg) ";
  }
}

function dropdowns() {
  var d = document.getElementById("expandeds");
  var e = document.getElementById("expands");
  var f = document.getElementById("arrows");
  if (e.checked == true) {
    d.style = "height: 200px; border-radius: 0px 0px 0px 0px;";
    f.style = "transform: rotate(-90deg) ";
  } else {
    d.style = "height: 70px";
    f.style = "transform: rotate(0deg) ";
  }
}
var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
    timeOut = timeOut - 20;

    if (autoOn == true && timeOut < 0) {
        showSlides();
    }
    setTimeout(autoSlides, 20);
}

function prevSlide() {

    timeOut = 5000;

    var slides = document.getElementsByClassName("carrousel-items");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex--;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    else if (slideIndex == 0) {
        slideIndex = 5
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides() {

    timeOut = 5000;

    var slides = document.getElementsByClassName("carrousel-items");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
