function toggleSidebar() {
    if (document.getElementById("mySidebar").style.display === "block") {
      document.getElementById("mySidebar").style.display = "none";
    } 
    else {
      document.getElementById("mySidebar").style.display = "block";
    }
  }

  const myCarouselElement = document.querySelector('#myCarousel')


  const carousel = new bootstrap.Carousel('#myCarousel')