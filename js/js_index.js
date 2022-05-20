'use strict';

//section1
const gallery=document.querySelector('.gallery');
const galleryUl=gallery.querySelector('ul');
const galleryUlLi=galleryUl.querySelectorAll('li');

const bcon=document.querySelector('.bcon');
const bconBtn=bcon.querySelectorAll('span.btn');

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



bcon.addEventListener('click', sec1bannerFn);
function sec1bannerFn(e){
  if(e.type=='click'){
    bconBtn.forEach((el, idx)=>{
      if(e.target==el){
        if(idx==0){
          if(i<=0) i=galleryUlLi.length;

          i--;
          
          galleryUlLi.forEach((el, idx)=>{
            if(i===idx){
              el.classList.add('visible');
            }else{
              el.classList.remove('visible');
            }
          })

          if(i<=0) i=galleryUlLi.length; 
          
        }else if(idx==1){
          
          setIn = setInterval(autogallery, 3000);
          
        }else if(idx==2){

          clearInterval(setIn);
          
        }else if(idx==3){
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
        
      }

    })
  }
}

(()=>{autogallery()})();

//section2
const sec2slideCon=document.querySelector('.slide-con');
const sec2slideConUl=sec2slideCon.querySelector('ul');
const sec2slideConUlLi=sec2slideConUl.querySelectorAll('li');

const sec2leftArrow=document.querySelector('span.arrow.left');
const sec2rightArrow=document.querySelector('span.arrow.right');

const round=document.querySelectorAll('h3.round');
const gameday=document.querySelectorAll('.gameday');
const homeEmblem=document.querySelectorAll('.home-emblem');
const awayEmblem=document.querySelectorAll('.away-emblem');
const homeScore=document.querySelectorAll('.home.score');
const awayScore=document.querySelectorAll('.away.score');

const roundArr=[
  '준결승', '준준결승', '6ROUND', '6ROUND', '6ROUND', '6ROUND',
  '6ROUND', '6ROUND', '5ROUND', '5ROUND', '5ROUND', '5ROUND'
];
const gamedayDateArr=[
  '2022.04.03 PM 19:00', '2022.04.01 PM 19:00', '2022.03.30 PM 19:00','2022.03.27 PM 14:00',
  '2022.03.24 PM 19:00', '2022.03.19 PM 14:00', '2022.03.15 PM 19:00', '2022.03.12 PM 14:00',
  '2022.03.09 PM 14:00', '2022.03.06 PM 14:00', '2022.02.12 PM 14:00', '2022.02.08 PM 19:00'
];
const gamedayPlaceArr=[
  '의정부실내체육관', '서울장충체육관', '의정부실내체육관', '수원실내체육관',
  '천안유관순체육관', '수원실내체육관', '안산상록수체육관', '수원실내체육관',
  '인천계양체육관', '수원실내체육관', '수원실내체육관', '서울장충체육관'
];
const homeTeamArr=[
  'KB손해보험', '우리카드', 'KB손해보험', '한국전력', '현대캐피탈', '한국전력',
  'OK금융그룹', '한국전력', '대한항공', '한국전력', '한국전력', '우리카드'
];
const homeTeamImgArr=[
  'kb', 'wc', 'kb', 'kc', 'hd', 'kc', 'ok', 'kc', 'ka', 'kc', 'kc', 'wc'
]
const homeScoreArr=[
  '3', '1', '1', '1', '0', '3', '1', '3','3', '3','3', '3'
];
const awayTeamArr=[
  '한국전력', '한국전력', '한국전력', '우리카드', '한국전력', '대한항공',
  '한국전력', '삼성화재', '한국전력', '현대캐피탈', 'KB손해보험', '한국전력'
];
const awayTeamImgArr=[
  'kc', 'kc', 'kc', 'wc', 'kc', 'ka', 'kc', 'ss', 'kc', 'hd', 'kb', 'kc'
]
const awayScoreArr=[
  '1','3', '3','3', '3', '1', '3', '0', '2', '2', '2', '1'
];

const sec2gap=sec2slideConUlLi[4].offsetLeft-sec2slideConUlLi[0].offsetLeft;

sec2leftArrow.addEventListener('click', sec2slideFn);
sec2rightArrow.addEventListener('click', sec2slideFn);

let i2=0;

function sec2slideFn(e){
  if(e.type=='click'){
    if(e.target==sec2leftArrow){
      if(i2>=2) i2=-1;

      i2++;

      const sec2goto=(-i2*sec2gap)+ 'px';

      sec2slideCon.style.left=sec2goto;
      sec2slideCon.style.transition=300 + 'ms';
      
    }else if(e.target==sec2rightArrow){
      if(i2<=0) i2=sec2slideConUlLi.length/4;

      i2--;

      const sec2goto=(-i2*sec2gap)+ 'px';

      sec2slideCon.style.left=sec2goto;
      sec2slideCon.style.transition=300 + 'ms';
    }
  }
}

for(let j=0;j<sec2slideConUlLi.length;j++){
  round[j].innerText=roundArr[j];
  gameday[j].firstElementChild.innerText=gamedayDateArr[j];
  gameday[j].lastElementChild.innerText=gamedayPlaceArr[j];
  homeEmblem[j].firstElementChild.setAttribute('src', `img/${homeTeamImgArr[j]}.png`);
  awayEmblem[j].firstElementChild.setAttribute('src', `img/${awayTeamImgArr[j]}.png`);
  homeScore[j].firstElementChild.innerText=homeTeamArr[j];
  homeScore[j].lastElementChild.innerText=homeScoreArr[j];
  awayScore[j].firstElementChild.innerText=awayTeamArr[j];
  awayScore[j].lastElementChild.innerText=awayScoreArr[j];
}



//section3

const photoGallery=document.querySelector('.photo-gallery');
const photoGalleryUl=photoGallery.querySelector('ul');
const photoGalleryUlLi=photoGalleryUl.querySelectorAll('li');
const galleryImg=document.querySelectorAll('.gallery-img');

const boxCon=document.querySelector('.box-con');
const lightBox=document.querySelector('.light-box');
const boxGallery=document.querySelector('.box-gallery');
const boxGalleryUl=boxGallery.querySelector('ul');
const boxGalleryUlLi=boxGalleryUl.querySelectorAll('li');

const boxOut=document.querySelector('span.box-out');
const centerBtn=boxCon.querySelector('.center-btn');
const sec3Arrow=centerBtn.querySelectorAll('span.sec3arrow');

const arrBg3=[];
for(let i=0;i<galleryImg.length;i++){
  arrBg3.push(`url(img/sec3_${i}_0.jpg) no-repeat 50%/cover`);
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

photoGalleryUl.addEventListener('click', (e)=>{
  photoGalleryUlLi.forEach((el, idx)=>{
    if(e.target.parentElement==el){
      lightBox.classList.add('lightBoxOn');
      
      boxGalleryUlLi.forEach((el2, idx2)=>{
        el2.style.background=`black url(img/sec3_${idx}_${idx2}.jpg) no-repeat 50%/auto`;
      })
    }
  })
})
boxOut.addEventListener('click', (e)=>{
  lightBox.classList.remove('lightBoxOn');
})

centerBtn.addEventListener('click', (e)=>{
  sec3Arrow.forEach((el, idx)=>{

    if(e.target==el){
      if(idx==0){
        const firstImg=boxGalleryUl.firstElementChild;
        boxGalleryUl.appendChild(firstImg);
      }else if(idx==1){
        const lastImg=boxGalleryUl.lastElementChild;
        boxGalleryUl.prepend(lastImg);
      }
    }

  })
})

//section4
const sec4leftArrow=document.querySelector('span.left.sec4Arrow');
const sec4rightArrow=document.querySelector('span.right.sec4Arrow');

const sec4CardSlide=document.querySelector('.card-con');
const sec4CardSlideUl=sec4CardSlide.querySelector('ul');
const sec4CardSlideUlLi=sec4CardSlideUl.querySelectorAll('li');

const playerNameArr=[
  'N.01 서재덕L', 'N.02 이민욱S', 'N.03 박철우R', 'N.05 오재성Li', 'N.06 황동일S', 
  'N.07 이시몬L', 'N.08 김강녕Li', 'N.10 김지한L', 'N.14 임성진L', 'N.15 김광국S'
];

const gap4=sec4CardSlideUlLi[1].offsetLeft - sec4CardSlideUlLi[0].offsetLeft;


let i4=0;

sec4leftArrow.addEventListener('click', e => {
  
  if(i4>=sec4CardSlideUlLi.length-3) i4=-3;

  i4++;
  
  const goto4=(-i4*gap4) + 'px';
  
  sec4CardSlide.style.left=goto4;
  sec4CardSlide.style.transition=300+"ms";
  
  
  let startNum=i4+2;
  sec4CardSlideUlLi.forEach((el, idx)=>{
    if(idx==startNum){
      el.classList.add('sec4Animation');
      el.children[0].classList.add('sec4PlayerAni')
    }else{
      el.classList.remove('sec4Animation');
      el.children[0].classList.remove('sec4PlayerAni')
    }
  })
  

})
sec4rightArrow.addEventListener('click', e => {
  
  if(i4<=-2) i4=sec4CardSlideUlLi.length-2;
  i4--;
 
  const goto4=(-i4*gap4) + "px";
  
  sec4CardSlide.style.left=goto4;
  sec4CardSlide.style.transition=300+"ms";
  
  let startNum=i4+2;
  sec4CardSlideUlLi.forEach((el, idx)=>{
    if(idx==startNum){
      el.classList.add('sec4Animation');
    }else{
      el.classList.remove('sec4Animation');
    }
  })

})

sec4CardSlideUlLi.forEach((el, idx)=>{
  el.style.background=`url(img/p${idx}.png) no-repeat 50%/contain`;
  el.children[0].innerText=playerNameArr[idx];
})

//section5

