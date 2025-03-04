$('.header-include').load("html/header.html", function(){
  //nav
  const gotoUlLi = $(".goto>ul>li");
  const loginOut = $(".out-btn.login-out");
  const joinOut = $(".out-btn.join-out");
  gotoUlLi.on("click", function(){
    const idx = $(this).index();
    if (idx == 0) {
      $(".login.popup").addClass("popupSign");
    } else if (idx == 1) {
      $(".join.popup").addClass("popupSign");
    }
  });
  loginOut.on("click", function () {
    $(".login.popup").removeClass("popupSign");
  });
  joinOut.on("click", function () {
    $(".join.popup").removeClass("popupSign");
  });
  //login
  const loginForm = document.querySelector('#loginForm')
  const userloginEmail = document.querySelector('#loginUserEmail');
  const userloginPw = document.querySelector('#loginUserPw');
  $('.login-submit').on("click", function(){
    if(userloginEmail.value == ""||userloginEmail.value.length <= 0){
      alert('이메일 주소를 입력하세요')
      userloginEmail.focus();
      return false;
    }
    if(userloginPw.value == ""||userloginPw.value.length <= 0){
      alert('비밀번호를 입력하세요')
      userloginPw.focus();
      return false;
    }
    loginForm.submit();
  })
  //join
  const joinButton = document.querySelector('button.join');
  const joinForm = document.querySelector('#joinForm');
  const userjoinName = document.querySelector('#userName');
  const userjoinPhoneSelect = document.querySelector('select#userPhone');
  const userJoinPhone = document.querySelector('#userPhoneBack');
  const userjoinEmail = document.querySelector('#joinUserEmail');
  const userjoinPw = document.querySelector('#joinUserPw');
  const userjoinPw2 = document.querySelector('#userPw2');
  $('.join-submit').on("click", function(){
    const phoneRegexp = /[0-9]/;
    const regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
    if(userJoinPhone.value===''||userJoinPhone.value.length<=0){
      alert('특수기호 및 공백 없이 숫자 8자리를 입력해주세요')
      userJoinPhone.focus();
      return false;
    }
    if(!regexp.test(userjoinEmail.value)){
      alert('올바른 이메일 주소를 입력해 주세요')
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
});
$(".footer-include").load("html/footer.html");
