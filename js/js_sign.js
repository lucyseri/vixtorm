'use strict';

const loginButton=document.querySelector('button.login');
const loginForm=document.querySelector('#loginForm')
const userloginEmail=loginForm.querySelector('#userEmail');
const userloginPw=loginForm.querySelector('#userPw');

loginButton.addEventListener('click', ()=>{
  if(userloginEmail.value == '' || userloginEmail.value.length<=0){
    alert('이메일 주소를 입력하세요')
    userloginEmail.focus();
    return false;
  }
  if(userloginPw.value === '' || userloginPw.value.length<=0){
    alert('비밀번호를 입력하세요')
    userloginPw.focus();
    return false;
  }
  loginForm.submit();
})


const joinButton=document.querySelector('button.join');
const joinForm=document.querySelector('#joinForm');
const userjoinName=joinForm.querySelector('#userName');
const userjoinPhoneSelect=joinForm.querySelector('select#userPhone');
const userJoinPhone=joinForm.querySelector('input#userPhone');
const userjoinEmail=joinForm.querySelector('#userEmail');
const userjoinPw=joinForm.querySelector('#userPw');
const userjoinPw2=joinForm.querySelector('#userPw2');


joinButton.addEventListener('click', ()=>{

  if(userjoinName.value ==='' || userjoinName.value.length<=0){
    alert('이름을 입력하세요')
    userjoinName.focus();
    return false;
  }
  if(userjoinPhoneSelect.value===''||userjoinPhoneSelect.value.length<=0){
    alert('휴대전화 번호 앞자리를 선택해 주세요')
    userjoinPhoneSelect.focus();
    return false;
  }
  if(userJoinPhone.value===''||userJoinPhone.value.length<8){
    alert('휴대전화 번호를 입력해 주세요')
    userJoinPhone.focus();
    return false;
  }

  if(userjoinEmail.value ==='' || userjoinEmail.value.length<=0){
    alert('이메일을 입력하세요')
    userjoinEmail.focus();
    return false;
  }
  if(userjoinPw.value ==='' || userjoinPw.value.length<=0){
    alert('비밀번호를 입력하세요')
    userjoinPw.focus();
    return false;
  }
  if(userjoinPw.value!==userjoinPw2.value){
    alert('비밀번호가 일치하지 않습니다')
    userjoinPw2.focus();
    return false;
  }
  
  alert('환영합니다')
  joinForm.submit();
})