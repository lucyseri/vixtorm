'use strict';

const gallery=document.querySelector('.gallery');
const galleryUl=gallery.querySelector('ul');
const galleryUlLi=galleryUl.querySelectorAll('li');

const arrBg=[];

for(let i=0;i<galleryUlLi.length;i++){
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background=arrBg[i];
}

let i=-1;

function autogallery(){

  if(i>=galleryUlLi.length-1) i=-1;
  
  i++;
  
  galleryUlLi.forEach((el, idx)=>{
    if(i===idx){
      el.classList.add('visible');
    }else{
      el.classList.remove('visible');
    }
  })
  
  if(i>=galleryUlLi.length-1) i=-1;

}

let setIn = setInterval(autogallery, 3000);

(()=>{autogallery()})();

//section3
const photoGallery=document.querySelector('.photo-gallery');
const galleryImg=document.querySelectorAll('.gallery-img');

const arrBg3=[];
for(let i=0;i<galleryImg.length;i++){
  arrBg3.push(`url(img/sec3_${i}.jpg) no-repeat 50%/cover`);
  galleryImg[i].style.background=arrBg3[i];
}

window.addEventListener("scroll", function(){
  let value=window.scrollY;
  // console.log("scrollY", value);

  if(value>650){
    photoGallery.classList.add('sec3Animation');
  }else{
    photoGallery.classList.remove('sec3Animation');
  }
})