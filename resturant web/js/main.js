"use strict"
let header_photos = ["(img/header-bg1.jpg)" , "(img/header-bg2.jpg)" , "(img/header-bg3.jpg)"]
let header = document.querySelector('header');
header.style.backgroundImage = 'url' + header_photos[0];// giv header background
let i = 0;

let changeBackground = () => { 
    //check if background have photo
    if(header.style.backgroundImage = 'url' + header_photos[i]){
        
        i++;// change background
    }
    
}

//do anlimit slaider
setInterval(function() { 
    changeBackground();
    if(i == 3){
        i = 0; // back the first photo
    }
  }, 3000);
    
//work with header buttons
let bookBtn = document.getElementById('book-btn');
let menuBtn = document.getElementById('menu-btn');
let j= 0;
//give book button event
bookBtn.addEventListener('click', function ( ) {
    let timerForBook = setInterval(function foo(){
        j++ 
    console.log(j);
    if(j == 88){ //fixe position what we need
        clearInterval(timerForBook);//turn off setTinterval
        j= 0;//clear j becous its give error when we click in menu btn
    }
    window.scrollBy(0, j); //scroling paje
    },20)
    
})
//give menu button event
menuBtn.addEventListener('click', function ( ) {
    let timerForBook = setInterval(function foo(){
        j++ 
    console.log(j);
    if(j == 63){ //fixe position what we need
        clearInterval(timerForBook);//turn off setTinterval
        j=0;//clear j becous its give error when we click in book btn
    }
    window.scrollBy(0, j); //scroling paje
    },20)
    
})



//get first food photo
let firstFoodPhoto = document.querySelector('.right_food_photo');
//get images
let img1 = document.querySelectorAll('.form_img')[0];
let img2 = document.querySelectorAll('.form_img')[1];
window.onscroll = function() { 
    var scrollTop = window.pageYOffset;
    //fix position onscroll
    if(scrollTop > 546) {
        //show photo first food when you scroll paje
        firstFoodPhoto.style.opacity = 1;
      }
    if(scrollTop > 3400) {
      //give animation name for imges
      img1.style.animation = " animation: shadow  2s cubic-bezier(0,0,1,1) ";
      img1.style.WebkitAnimation = "shadow  2s cubic-bezier(0,0,1,1) ";
      img2.style.animation = " animation: shadow  2s cubic-bezier(0,0,1,1) ";
      img2.style.WebkitAnimation = "shadow  2s cubic-bezier(0,0,1,1) ";
    }
}