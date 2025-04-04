'use strict';
//section1
const bannerUlLi = document.querySelectorAll('section.sec1 .banner-img ul li');
const bcon = document.querySelector('section.sec1 .bcon ul');
const bconBtn = document.querySelectorAll('section.sec1 .bcon ul li');
//section2
const gameCarouselUl = document.querySelector('.sec2 .carousel-con');
const gameCarouselUlLi = document.querySelectorAll('.sec2 .carousel-con li');
const sec2leftArrow = document.querySelector('.sec2 .arrow-btn.left');
const sec2rightArrow = document.querySelector('.sec2 .arrow-btn.right');
const round = document.querySelectorAll('.sec2 .carousel-con li p.round');
const gameday = document.querySelectorAll('.sec2 .carousel-con li .gameday');
const homeEmblem = document.querySelectorAll('.sec2 .carousel-con li .home-emblem');
const awayEmblem = document.querySelectorAll('.sec2 .carousel-con li .away-emblem');
const homeScore = document.querySelectorAll('.sec2 .carousel-con li .home.score');
const awayScore = document.querySelectorAll('.sec2 .carousel-con li .away.score');
//section3
const photoGallery = document.querySelector('.sec3 .photo-gallery');
const photoGalleryUl = document.querySelector('.sec3 .photo-gallery ul');
const photoGalleryUlLi = document.querySelectorAll('.sec3 .photo-gallery ul li');
const galleryImg = document.querySelectorAll('.sec3 .photo-gallery ul li .gallery-img');
const galleryTxt = document.querySelectorAll('.sec3 .photo-gallery ul li .gallery-img span.gallery-text');
const lightBox = document.querySelector('.sec3 .light-box');
const boxOut = document.querySelector('.sec3 .light-box .out-btn');
const boxConUl = document.querySelector('.sec3 .light-box .box-con ul');
const boxConUlLi = document.querySelectorAll('.sec3 .light-box .box-con ul li');
const boxConTxt = document.querySelectorAll('.sec3 .light-box .box-con ul li span.lightbox-txt');
const centerBtn = document.querySelector('.sec3 .light-box .arrow-btn');
const sec3Arrow = document.querySelectorAll('.sec3 .light-box .arrow-btn span.sec3arrow');
const moreImg = document.querySelector('.sec3 .light-box .box-con a');
//section4
const sec4leftArrow = document.querySelector('.sec4 .carousel .left.arrow-btn');
const sec4rightArrow = document.querySelector('.sec4 .carousel .right.arrow-btn');
const playerCarousel = document.querySelector('.sec4 .carousel ul.carousel-con');
const playerCarouselLi = document.querySelectorAll('.sec4 .carousel ul.carousel-con li');
const playerImg = document.querySelectorAll('.sec4 .carousel ul.carousel-con li a img');
const playerName = document.querySelectorAll('.sec4 .carousel ul.carousel-con li a span.player-name');
//section1 - main banner
const arrBg = [];
for (let i = 0; i < bannerUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  bannerUlLi[i].style.background = arrBg[i];
};
function galleryFn(num){
  bannerUlLi.forEach((el, idx) => {
    if (num === idx) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  })
};
let a = -1;
function autogallery() {
  a++;
  galleryFn(a);
  if (a >= bannerUlLi.length - 1) a = -1;
};
let setIn = setInterval(autogallery, 5000);
(() => { autogallery() })();
bcon.addEventListener('click', sec1bannerFn);
bcon.addEventListener('mouseover', sec1bannerFn);
bcon.addEventListener('mouseout', sec1bannerFn);
let bannerTrigger = true;
function sec1bannerFn(e) {
  bconBtn.forEach((el, idx)=>{
    if(e.target == el){
      if(e.type == 'click'){
        if (idx == 0) {
          if (a <= 0) a = bannerUlLi.length;
          a--;
          galleryFn(a);
          if (a <= 0) a = bannerUlLi.length;
        }else if(idx ==1){
          bconBtn[1].classList.add('replay');
          bconBtn[2].classList.remove('replay');
          bannerTrigger = false;
        }else if(idx == 2){
          bconBtn[1].classList.remove('replay');
          bconBtn[2].classList.add('replay');
          bannerTrigger = true;
        }else if (idx == 3) {
          a++;
          galleryFn(a);
          if (a >= bannerUlLi.length - 1) a = -1;
        }
      }else if(e.type == 'mouseover'){
        if(bannerTrigger) clearInterval(setIn);
      }else if(e.type == 'mouseout'){
        if(bannerTrigger) setIn = setInterval(autogallery, 5000);
      }
    }
  });
};
//section2 - game carousel
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
};
function sec2aotoGo(num) {
  const sec2gap = gameCarouselUlLi[4].offsetLeft - gameCarouselUlLi[0].offsetLeft;
  const sec2goto = (-num * sec2gap) + 'px';
  gameCarouselUl.style.left = sec2goto;
  gameCarouselUl.style.transition = 400 + 'ms';
};
for (let j = 0; j < gameCarouselUlLi.length; j++) {
  round[j].innerText = sec2Info.sec2round[j];
  gameday[j].firstElementChild.innerText = sec2Info.sec2gamedate[j];
  gameday[j].lastElementChild.innerText = sec2Info.sec2gameplace[j];
  homeEmblem[j].firstElementChild.setAttribute('src', `img/${sec2Info.sec2homeimg[j]}.png`);
  awayEmblem[j].firstElementChild.setAttribute('src', `img/${sec2Info.sec2awayimg[j]}.png`);
  homeScore[j].firstElementChild.innerText = sec2Info.sec2hometeam[j];
  homeScore[j].lastElementChild.innerText = sec2Info.sec2homescore[j];
  awayScore[j].firstElementChild.innerText = sec2Info.sec2awayteam[j];
  awayScore[j].lastElementChild.innerText = sec2Info.sec2awayscore[j];
};
let b = 0;
function carouselFn(e) {
  if (e.target == sec2leftArrow) {
    if (b <= 0) b = 1;
    b--;
    sec2aotoGo(b);
  } else if (e.target == sec2rightArrow) {
    if (b >= gameCarouselUlLi.length / 4 - 1) b = gameCarouselUlLi.length / 4 - 2;
    b++;
    sec2aotoGo(b);
  }
};
sec2leftArrow.addEventListener('click', carouselFn);
sec2rightArrow.addEventListener('click', carouselFn);
//section3 - gallery
const galleryImgTxt = [
  '2022.04.03', '2022.04.01', '2022.03.30', '2022.03.27',
  '2022.03.24', '2022.03.19', '2022.03.15', '2022.03.12'];
const arrBg3 = [];
for (let i = 0; i < galleryImg.length; i++) {
  arrBg3.push(`url(img/sec3_${i}_0.jpg) no-repeat 50% / cover`);
  galleryImg[i].style.background = arrBg3[i];
  galleryTxt[i].innerText = galleryImgTxt[i] + " 경기 대표이미지";
};
window.addEventListener("scroll", function () {
  let value = window.scrollY;
  if (value > 860) {
    photoGallery.classList.add('sec3Animation');
  } else {
    photoGallery.classList.remove('sec3Animation');
  }
});
photoGalleryUl.addEventListener('click', (e) => {
  photoGalleryUlLi.forEach((el, idx) => {
    if (e.target.parentElement == el) {
      lightBox.classList.add('lightBoxOn');
      boxConUlLi.forEach((el2, idx2) => {
        el2.style.background = `black url(img/sec3_${idx}_${idx2}.jpg) no-repeat 50%/auto`;
        el2.innerText = `${galleryImgTxt[idx]}대표이미지${idx2}`;
      })
      moreImg.innerText = galleryImgTxt[idx] + " 더보기";
    }
  });
});
boxOut.addEventListener('click', (e) => {
  lightBox.classList.remove('lightBoxOn');
});
centerBtn.addEventListener('click', (e) => {
  sec3Arrow.forEach((el, idx) => {
    if (e.target == el) {
      if (idx == 0) {
        const firstImg = boxConUl.firstElementChild;
        boxConUl.appendChild(firstImg);
      } else if (idx == 1) {
        const lastImg = boxConUl.lastElementChild;
        boxConUl.prepend(lastImg);
      }
    }
  });
});
//section4 - player carousel
const playerNameArr = [
  'N.01 서재덕L', 'N.02 이민욱S', 'N.03 박철우R', 'N.05 오재성Li', 'N.06 황동일S',
  'N.07 이시몬L', 'N.08 김강녕Li', 'N.10 김지한L', 'N.14 임성진L', 'N.15 김광국S'];
function sec4autoGo(num){
  const gap4 = playerCarouselLi[1].offsetLeft - playerCarouselLi[0].offsetLeft;
  const goto4 = (-num * gap4) + 'px';
  playerCarousel.style.left = goto4;
  playerCarousel.style.transition = 300 + "ms";
};
function sec4autoAni(num){
  let startNum = num + 2;
   playerCarouselLi.forEach((el, idx) => {
    if (idx == startNum) {
      el.classList.add('sec4Animation');
    } else {
      el.classList.remove('sec4Animation');
    }
  });
};
let c = 0;
sec4leftArrow.addEventListener('click', (e) => {
  if (c >= playerCarouselLi.length - 3) c = -3;
  c++;
  sec4autoGo(c);
  sec4autoAni(c);
});
sec4rightArrow.addEventListener('click', e => {
  if (c <= -2) c = playerCarouselLi.length - 2;
  c--;
  sec4autoGo(c);
  sec4autoAni(c);
});
for(let i=0;i<playerCarouselLi.length;i++){
  playerImg[i].setAttribute('src', `img/p${i}.png`);
  playerImg[i].setAttribute('alt', playerNameArr[i]);
  playerName[i].innerText = playerNameArr[i];
};