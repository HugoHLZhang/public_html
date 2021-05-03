var x = 1; 
function switchImg1() {
  if (x == 1) { 
    document.getElementById("imgToSwitch1").src = "../images/saveb.svg";
    x++; 
  } else if (x == 2) {
    document.getElementById("imgToSwitch1").src = "../images/savew.svg";
    x=1;
  }
}
function switchImg2() {
  if (x == 1) { 
    document.getElementById("imgToSwitch2").src = "../images/saveb.svg";
    x++; 
  } else if (x == 2) {
    document.getElementById("imgToSwitch2").src = "../images/savew.svg";
    x=1;
  }
}
function switchImg3() {
  if (x == 1) { 
    document.getElementById("imgToSwitch3").src = "../images/saveb.svg";
    x++; 
  } else if (x == 2) {
    document.getElementById("imgToSwitch3").src = "../images/savew.svg";
    x=1;
  }
}
