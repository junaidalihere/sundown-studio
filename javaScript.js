const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  

  let menu = document.querySelector(".menu");

  let navberresponsive = document.querySelector(".navber-responsive");

  let logo = document.getElementById("logo");


  let right = 0;

  menu.addEventListener("click",function(){
     

    if(right == 0){
      navberresponsive.style.top = "0%";
      logo.style.opacity = 0;
      right = 1;
    }else{
      navberresponsive.style.top = "-100%";
      logo.style.opacity = 1;
      right = 0;
    }

  })


  let refers = document.getElementById("refers");


  setTimeout(function(){
   refers.style.top = "-170%";
   console.log("hello")
  },4000)