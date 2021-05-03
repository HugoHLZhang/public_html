var slides = document.querySelectorAll('#slides .slide');
var pages = document.querySelectorAll('#slides .pages');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

var playing = true;
var pauseButton = document.getElementById('pause');

var next = document.getElementById('next');
var previous = document.getElementById('previous');
var page1 = document.getElementById('page1');
var page2 = document.getElementById('page2');
var page3 = document.getElementById('page3');
var page4 = document.getElementById('page4');


  $(page1).hover(
  function(){
    $(this).css('background-color',"rgba(255, 255, 255, 1)");
  },function(){
    $(this).css('background-color','rgba(255, 255, 255, 1)');
  });
  $(page2).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page3).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page4).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });

  

    $(page1).css('background-color', 'rgba(255, 255, 255, 1)');
    $(page2).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page3).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page4).css('background-color', 'rgba(34, 34, 34, 0)');

    page1.style.color = "#000";
    page2.style.color = "#fff";
    page3.style.color = "#fff";
    page4.style.color = "#fff";
    

function nextSlide() {
    goToSlide(currentSlide+1);
    goToPage(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
    goToPage(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
    changeColor();
}

function changeColor(){
  if(currentSlide==0){
     $(page1).css('background-color', 'rgba(255, 255, 255, 1)');
    $(page2).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page3).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page4).css('background-color', 'rgba(34, 34, 34, 0)');

    page1.style.color = "#000";
    page2.style.color = "#fff";
    page3.style.color = "#fff";
    page4.style.color = "#fff";
$(page1).hover(
  function(){
    $(this).css('background-color',"rgba(255, 255, 255, 1)");
  },function(){
    $(this).css('background-color','rgba(255, 255, 255, 1)');
  });
    $(page2).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page3).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page4).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
  }
  else if(currentSlide==1){

         $(page1).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page2).css('background-color', 'rgba(255, 255, 255, 1)');
    $(page3).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page4).css('background-color', 'rgba(34, 34, 34, 0)');
    page1.style.color = "#fff";
    page2.style.color = "#000";
    page3.style.color = "#fff";
    page4.style.color = "#fff";
    $(page1).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page2).hover(
  function(){
    $(this).css('background-color',"rgba(255, 255, 255, 1)");
  },function(){
    $(this).css('background-color','rgba(255, 255, 255, 1)');
  });
    $(page3).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page4).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
  }
  else if(currentSlide==2){
         $(page1).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page2).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page3).css('background-color', 'rgba(255, 255, 255, 1)');
    $(page4).css('background-color', 'rgba(34, 34, 34, 0)');
    page1.style.color = "#fff";
    page2.style.color = "#fff";
    page3.style.color = "#000";
    page4.style.color = "#fff";
    $(page1).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page2).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page3).hover(
  function(){
    $(this).css('background-color',"rgba(255, 255, 255, 1)");
  },function(){
    $(this).css('background-color','rgba(255, 255, 255, 1)');
  });
    $(page4).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
  }
  else if(currentSlide==3){
         $(page1).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page2).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page3).css('background-color', 'rgba(34, 34, 34, 0)');
    $(page4).css('background-color', 'rgba(255, 255, 255, 1)');
    page1.style.color = "#fff";
    page2.style.color = "#fff";
    page3.style.color = "#fff";
    $(page1).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page2).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page3).hover(
  function(){
    $(this).css('background-color',"rgb(58,58,58)");
  },function(){
    $(this).css('background-color','rgba(34,34,34,0)');
  });
    $(page4).hover(
  function(){
    $(this).css('background-color',"rgba(255, 255, 255, 1)");
  },function(){
    $(this).css('background-color','rgba(255, 255, 255, 1)');
  });
    page4.style.color = "#000";
  }
}

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
page1.onclick = function(){
  pauseSlideshow();
  goToSlide(0);


};
page2.onclick = function(){
  pauseSlideshow();
  goToSlide(1);
};
page3.onclick = function(){
  pauseSlideshow();
  goToSlide(2);
};
page4.onclick = function(){
  pauseSlideshow();
  goToSlide(3);
};