'use strict';

//section1
const sec1 = document.querySelector('section.sec1');
const gallery = sec1.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');
const bcon = sec1.querySelector('.bcon');
const bconBtn = bcon.querySelectorAll('.bcon>ul>li');
const arrBg = [];
function galleryFn(num){
  galleryUlLi.forEach((el, idx) => {
    if (num === idx) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  })
}
for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];
}
let i = -1;
function autogallery() {
  if (i >= galleryUlLi.length - 1) i = -1;
  i++;
  galleryFn(i);
  if (i >= galleryUlLi.length - 1) i = -1;
}
let setIn = setInterval(autogallery, 5000);
bcon.addEventListener('click', sec1bannerFn);
bcon.addEventListener('mouseover', sec1bannerFn);
bcon.addEventListener('mouseout', sec1bannerFn);
function sec1bannerFn(e) {
  bconBtn.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        if (idx == 0) {
          if (i <= 0) i = galleryUlLi.length;
          i--;
          galleryFn(i);
         if (i <= 0) i = galleryUlLi.length;
        }else if (idx == 3) {
          if (i >= galleryUlLi.length - 1) i = -1;
          i++;
          galleryFn(i);
          if (i >= galleryUlLi.length - 1) i = -1;
        }
      }else if(e.type == 'mouseover'){
        clearInterval(setIn);
        bconBtn[1].classList.add('replay');
        bconBtn[2].classList.remove('replay');
      }else if(e.type == 'mouseout'){
        setIn = setInterval(autogallery, 5000);
        bconBtn[1].classList.remove('replay');
        bconBtn[2].classList.add('replay');
      }
    }
  })
}
(() => { autogallery() })();

//section2
const sec2 = document.querySelector('section.sec2');
const sec2slideCon = sec2.querySelector('.slide-con');
const sec2slideConUl = sec2slideCon.querySelector('ul');
const sec2slideConUlLi = sec2slideConUl.querySelectorAll('li');
const sec2leftArrow = sec2.querySelector('span.arrow.left');
const sec2rightArrow = sec2.querySelector('span.arrow.right');
const round = sec2.querySelectorAll('p.round');
const gameday = sec2.querySelectorAll('.gameday');
const homeEmblem = sec2.querySelectorAll('.home-emblem');
const awayEmblem = sec2.querySelectorAll('.away-emblem');
const homeScore = sec2.querySelectorAll('.home.score');
const awayScore = sec2.querySelectorAll('.away.score');
const sec2Info = {
  sec2round: ['준결승', '준준결승', '6ROUND', '6ROUND', '6ROUND', '6ROUND',
    '6ROUND', '6ROUND', '5ROUND', '5ROUND', '5ROUND', '5ROUND'],
  sec2gamedate: ['2022.04.03 PM 19:00', '2022.04.01 PM 19:00', '2022.03.30 PM 19:00', '2022.03.27 PM 14:00',
    '2022.03.24 PM 19:00', '2022.03.19 PM 14:00', '2022.03.15 PM 19:00', '2022.03.12 PM 14:00',
    '2022.03.09 PM 14:00', '2022.03.06 PM 14:00', '2022.02.12 PM 14:00', '2022.02.08 PM 19:00'],
  sec2gameplace: ['의정부실내체육관', '서울장충체육관', '의정부실내체육관', '수원실내체육관',
    '천안유관순체육관', '수원실내체육관', '안산상록수체육관', '수원실내체육관',
    '인천계양체육관', '수원실내체육관', '수원실내체육관', '서울장충체육관'],
  sec2hometeam: ['KB손해보험', '우리카드', 'KB손해보험', '한국전력', '현대캐피탈', '한국전력',
    'OK금융그룹', '한국전력', '대한항공', '한국전력', '한국전력', '우리카드'],
  sec2homeimg: ['kb', 'wc', 'kb', 'kc', 'hd', 'kc', 'ok', 'kc', 'ka', 'kc', 'kc', 'wc'],
  sec2homescore: ['3', '1', '1', '1', '0', '3', '1', '3', '3', '3', '3', '3'],
  sec2awayteam: ['한국전력', '한국전력', '한국전력', '우리카드', '한국전력', '대한항공',
    '한국전력', '삼성화재', '한국전력', '현대캐피탈', 'KB손해보험', '한국전력'],
  sec2awayimg: ['kc', 'kc', 'kc', 'wc', 'kc', 'ka', 'kc', 'ss', 'kc', 'hd', 'kb', 'kc'],
  sec2awayscore: ['1', '3', '3', '3', '3', '1', '3', '0', '2', '2', '2', '1'],
}
function sec2aotoGo(num) {
  const sec2gap = sec2slideConUlLi[4].offsetLeft - sec2slideConUlLi[0].offsetLeft;
  const sec2goto = (-num * sec2gap) + 'px';
  sec2slideCon.style.left = sec2goto;
  sec2slideCon.style.transition = 300 + 'ms';
}
for (let j = 0; j < sec2slideConUlLi.length; j++) {
  round[j].innerText = sec2Info.sec2round[j];
  gameday[j].firstElementChild.innerText = sec2Info.sec2gamedate[j];
  gameday[j].lastElementChild.innerText = sec2Info.sec2gameplace[j];
  homeEmblem[j].firstElementChild.setAttribute('src', `img/${sec2Info.sec2homeimg[j]}.png`);
  awayEmblem[j].firstElementChild.setAttribute('src', `img/${sec2Info.sec2awayimg[j]}.png`);
  homeScore[j].firstElementChild.innerText = sec2Info.sec2hometeam[j];
  homeScore[j].lastElementChild.innerText = sec2Info.sec2homescore[j];
  awayScore[j].firstElementChild.innerText = sec2Info.sec2awayteam[j];
  awayScore[j].lastElementChild.innerText = sec2Info.sec2awayscore[j];
}
let i2 = 0;
function sec2slideFn(e) {
  if (e.target == sec2leftArrow) {
    if (i2 <= 0) {i2 = 1}
    i2--;
    sec2aotoGo(i2);
  } else if (e.target == sec2rightArrow) {
    if (i2 >= sec2slideConUlLi.length / 4 - 1) {i2 = sec2slideConUlLi.length / 4 - 2} 
    i2++;
    sec2aotoGo(i2);
  }
}
sec2leftArrow.addEventListener('click', sec2slideFn);
sec2rightArrow.addEventListener('click', sec2slideFn);

//section3
const sec3 = document.querySelector('section.sec3');
const photoGallery = sec3.querySelector('.photo-gallery');
const photoGalleryUl = photoGallery.querySelector('ul');
const photoGalleryUlLi = photoGalleryUl.querySelectorAll('li');
const galleryImg = sec3.querySelectorAll('.gallery-img');
const galleryTxt = sec3.querySelectorAll('span.gallery-text');
const boxCon = sec3.querySelector('.box-con');
const lightBox = sec3.querySelector('.light-box');
const lightBoxMore = lightBox.querySelector('a');
const boxGallery = sec3.querySelector('.box-gallery');
const boxGalleryUl = boxGallery.querySelector('ul');
const boxGalleryUlLi = boxGalleryUl.querySelectorAll('li');
const boxGalleryTxt = sec3.querySelectorAll('span.lightbox-txt');
const boxOut = sec3.querySelector('.out-btn');
const centerBtn = boxCon.querySelector('.center-btn');
const sec3Arrow = centerBtn.querySelectorAll('span.sec3arrow');
const galleryImgTxt = [
  '2022.04.03', '2022.04.01', '2022.03.30', '2022.03.27',
  '2022.03.24', '2022.03.19', '2022.03.15', '2022.03.12'];
const arrBg3 = [];
for (let i = 0; i < galleryImg.length; i++) {
  arrBg3.push(`url(img/sec3_${i}_0.jpg) no-repeat 50%/cover`);
  galleryImg[i].style.background = arrBg3[i];
  galleryTxt[i].innerText = galleryImgTxt[i] + " 경기 대표이미지";
}
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 720) {
    photoGallery.classList.add('sec3Animation');
  } else {
    photoGallery.classList.remove('sec3Animation');
  }
})
photoGalleryUl.addEventListener('click', (e) => {
  photoGalleryUlLi.forEach((el, idx) => {
    if (e.target.parentElement == el) {
      lightBox.classList.add('lightBoxOn');
      boxGalleryUlLi.forEach((el2, idx2) => {
        el2.style.background = `black url(img/sec3_${idx}_${idx2}.jpg) no-repeat 50%/auto`;
        el2.innerText = `${galleryImgTxt[idx]}대표이미지${idx2}`;
      })
      lightBoxMore.innerText = galleryImgTxt[idx] + " 더보기";
    }
  })
})
boxOut.addEventListener('click', (e) => {
  lightBox.classList.remove('lightBoxOn');
})
centerBtn.addEventListener('click', (e) => {
  sec3Arrow.forEach((el, idx) => {
    if (e.target == el) {
      if (idx == 0) {
        const firstImg = boxGalleryUl.firstElementChild;
        boxGalleryUl.appendChild(firstImg);
      } else if (idx == 1) {
        const lastImg = boxGalleryUl.lastElementChild;
        boxGalleryUl.prepend(lastImg);
      }
    }
  })
})

//section4
const sec4 = document.querySelector('section.sec4');
const sec4leftArrow = sec4.querySelector('span.left.sec4Arrow');
const sec4rightArrow = sec4.querySelector('span.right.sec4Arrow');
const sec4CardSlide = sec4.querySelector('.card-con');
const sec4CardSlideUl = sec4CardSlide.querySelector('ul');
const sec4CardSlideUlLi = sec4CardSlideUl.querySelectorAll('li');
const playerNameArr = [
  'N.01 서재덕L', 'N.02 이민욱S', 'N.03 박철우R', 'N.05 오재성Li', 'N.06 황동일S',
  'N.07 이시몬L', 'N.08 김강녕Li', 'N.10 김지한L', 'N.14 임성진L', 'N.15 김광국S'];
function sec4autoGo(num){
  const gap4 = sec4CardSlideUlLi[1].offsetLeft - sec4CardSlideUlLi[0].offsetLeft;
  const goto4 = (-num * gap4) + 'px';
  sec4CardSlide.style.left = goto4;
  sec4CardSlide.style.transition = 300 + "ms";
}
function sec4autoAni(num){
  let startNum = num + 2;
   sec4CardSlideUlLi.forEach((el, idx) => {
    if (idx == startNum) {
      el.classList.add('sec4Animation');
      el.children[1].classList.add('sec4PlayerAni')
    } else {
      el.classList.remove('sec4Animation');
      el.children[1].classList.remove('sec4PlayerAni')
    }
  })
}
let i4 = 0;
sec4leftArrow.addEventListener('click', (e) => {
  if (i4 >= sec4CardSlideUlLi.length - 3) i4 = -3;
  i4++;
   sec4autoGo(i4);
   sec4autoAni(i4)
  })
  sec4rightArrow.addEventListener('click', e => {
    if (i4 <= -2) i4 = sec4CardSlideUlLi.length - 2;
    i4--;
    sec4autoGo(i4);
    sec4autoAni(i4)
})
sec4CardSlideUlLi.forEach((el, idx) => {
  el.children[0].setAttribute('alt', `${playerNameArr[idx]}`)
  el.children[1].innerText = playerNameArr[idx];
})