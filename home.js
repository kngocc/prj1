function toggleSidebar() {
  if (document.getElementById("mySidebar").style.display === "block") {
    document.getElementById("mySidebar").style.display = "none";
  } 
  else {
    document.getElementById("mySidebar").style.display = "block";
  }
}

const element = document.getElementById("content");

function scrollToTop() {
  element.scrollIntoView(true);
}

function scrollToBottom() {
  element.scrollIntoView(false);
}


const section4 = document.querySelector('.section-4')
function scrollToSection4() {
  section4.scrollIntoView();
}