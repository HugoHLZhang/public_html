var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2","mySlides3","mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display="block";
}
var redheart = "♥";
function change1()
{ 
    var elem = document.getElementById("myHeart1"); 
    if (elem.innerHTML==redheart.fontcolor("red")) elem.innerHTML = " ♡"; 
    else elem.innerHTML = redheart.fontcolor("red"); 
} 
function change2()
{ 
    var elem = document.getElementById("myHeart2"); 
    if (elem.innerHTML==redheart.fontcolor("red")) elem.innerHTML = " ♡"; 
    else elem.innerHTML = redheart.fontcolor("red"); 
} 
function change3()
{ 
    var elem = document.getElementById("myHeart3"); 
    if (elem.innerHTML==redheart.fontcolor("red")) elem.innerHTML = " ♡"; 
    else elem.innerHTML = redheart.fontcolor("red"); 
} 
function change4()
{ 
    var elem = document.getElementById("myHeart4"); 
    if (elem.innerHTML==redheart.fontcolor("red")) elem.innerHTML = " ♡"; 
    else elem.innerHTML = redheart.fontcolor("red"); 
} 