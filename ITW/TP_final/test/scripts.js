var slides = document.querySelectorAll('#slides .slide');
let dots = 4;
let sliderElem= document.querySelector('.slide');
let dotElems  = sliderElem.querySelectorAll('.cycle_page');
let indicatorElem = sliderElem.querySelector('.page_indicateur');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

var playing = true;
var pauseButton = document.getElementById('pause');

var next = document.getElementById('next');
var previous = document.getElementById('previous');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');
    

function nextSlide() {
    goToSlide(currentSlide+1);
    goToPage(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
    goToPage(currentSlide-1);
}

function goToSlide(n) {
    var i;
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

Array.prototype.forEach.call(dotElems, (dotElem) => {
        
    dotElem.addEventListener('click', (e) => {

        let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
        let newPos     = parseInt(dotElem.getAttribute('data-pos'))

        let newDirection     = (newPos > currentPos ? 'right' : 'left')
        let currentDirection = (newPos < currentPos ? 'right' : 'left')

        indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
        indicatorElem.classList.add(`slider__indicator--${ newDirection }`)     
        sliderElem.setAttribute('data-pos', newPos)
        
    })
    
})

function pauseSlideshow() {
    pauseButton.innerHTML = '⏵';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = '⏸';
    playing = true;
    slideInterval = setInterval(nextSlide,4000);
    changeColor();
}

pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};


next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};