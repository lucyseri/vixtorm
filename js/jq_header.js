'use strict';

const goto= $('.goto');
const gotoUl= $('.goto>ul');
const gotoUlLi= $('.goto>ul>li');

const out=$('span.out');
const loginOut=$('span.login.out');
const joinOut=$('span.join.out');

gotoUlLi.on('click', function(){

  const idx=$(this).index();
  if(idx==0){
    $('.login.popup').addClass('popupSign');
  }else if(idx==1){
    $('.join.popup').addClass('popupSign');
  }
})
/*
out.on('click', function(){

  const idx=$(this).index();
  if(idx==0){
    $('.login.popup').removeClass('popupSign');
  }else if(idx==1){
    $('.join.popup').removeClass('popupSign');
  }
})
*/
loginOut.on('click', function(){
  $('.login.popup').removeClass('popupSign');
})
joinOut.on('click', function(){
  $('.join.popup').removeClass('popupSign');
})
