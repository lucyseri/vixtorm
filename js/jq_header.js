'use strict';

const goto= $('.goto');
const gotoUl= $('.goto>ul');
const gotoUlLi= $('.goto>ul>li');
const loginOut=$('.out-btn.login-out');
const joinOut=$('.out-btn.join-out');

gotoUlLi.on('click', function(){
  const idx=$(this).index();
  if(idx==0){
    $('.login.popup').addClass('popupSign');
  }else if(idx==1){
    $('.join.popup').addClass('popupSign');
  }
})
loginOut.on('click', function(){
  $('.login.popup').removeClass('popupSign');
})
joinOut.on('click', function(){
  $('.join.popup').removeClass('popupSign');
})
