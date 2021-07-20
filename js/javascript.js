var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




// set up text to print, each item in array is new line
var aText = new Array(
  " I'm a web developer and undergrad student at IIT Delhi", 
  "I'm ex-RPVVian and ex-Allenite "
  );
var bText = new Array(
    " I believe we should dream big and ", 
    "put all our efforts to make that true ",
    "because hard work always pays off "
    );
var cText =new Array(
  "I’m a passionate and dedicated person ",
  "with a determination to deliver high quality of work in which I involve ", 
  "I try to imrpove my self on every single day  "
);
  var iSpeed = 100; // time delay of print out
  var iiSpeed = 150;
  var iiiSpeed = 200;
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines
   
  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row
   
  function typewriter()
  { 
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext1");
   
   while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
     iArrLength = aText[iIndex].length;
     setTimeout("typewriter()", 500);
    }
   } else {
    setTimeout("typewriter()", iSpeed);
   }
  }
  typewriter();

   function typewriteri()
  { 
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext2");
   
   while ( iRow < iIndex ) {
    sContents += bText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + bText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != bText.length ) {
     iArrLength = bText[iIndex].length;
     setTimeout("typewriteri()", 500);
    }
   } else {
    setTimeout("typewriteri()", iiSpeed);
   }
  }

  typewriteri();

  function typewriterii()
  { 
   sContents =  ' ';
   iRow = Math.max(0, iIndex-iScrollAt);
   var destination = document.getElementById("typedtext3");
   
   while ( iRow < iIndex ) {
    sContents += cText[iRow++] + '<br />';
   }
   destination.innerHTML = sContents + cText[iIndex].substring(0, iTextPos) + "_";
   if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != cText.length ) {
     iArrLength = cText[iIndex].length;
     setTimeout("typewriterii()", 500);
    }
   } else {
    setTimeout("typewriterii()", iiiSpeed);
   }
  }
  typewriterii();


  burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
searchnav=document.querySelector(".searchnav");
navlist=document.querySelector(".nav-list");

burger.addEventListener('click',()=>{
    searchnav.classList.toggle("v-class-resp");
    navlist.classList.toggle("v-class-resp");
    navbar.classList.toggle("height-nav-resp");
});