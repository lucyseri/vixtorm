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

//section4
const sec4leftArrow=document.querySelector('span.left.sec4Arrow');
const sec4rightArrow=document.querySelector('span.right.sec4Arrow');

const sec4CardSlide=document.querySelector('.card-con');
const sec4CardSlideUl=sec4CardSlide.querySelector('ul');
const sec4CardSlideUlLi=sec4CardSlideUl.querySelectorAll('li');

const gap4=sec4CardSlideUlLi[1].offsetLeft - sec4CardSlideUlLi[0].offsetLeft;


let i2=0;

sec4leftArrow.addEventListener('click', e => {

  i2++;
  
  const goto4=(-i2*gap4) + 'px';
  
  sec4CardSlide.style.left=goto4;
  sec4CardSlide.style.transition=300+"ms";
  
  
  let startNum=i2+2;
  sec4CardSlideUlLi.forEach((el, idx)=>{
    if(idx==startNum){
      el.classList.add('sec4Animation');
    }else{
      el.classList.remove('sec4Animation');
    }
  })
  

})
sec4rightArrow.addEventListener('click', e => {
  
  i2--;
 
  const goto4=(-i2*gap4) + "px";
  
  sec4CardSlide.style.left=goto4;
  sec4CardSlide.style.transition=300+"ms";
  
  let startNum=i2+2;
  sec4CardSlideUlLi.forEach((el, idx)=>{
    if(idx==startNum){
      el.classList.add('sec4Animation');
    }else{
      el.classList.remove('sec4Animation');
    }
  })

})




