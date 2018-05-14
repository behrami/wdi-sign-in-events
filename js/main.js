document.addEventListener('DOMContentLoaded', function(){

  var signInForm = document.querySelector('.modal');
  var signIn = document.querySelector('button.signin');
  var close = document.querySelector('button.close');

  function clickSignIn(){
    signInForm.style.display = 'block';
  }

  function clickClose(){
    signInForm.style.display = 'none';
  }

  signIn.addEventListener('click', clickSignIn);
  close.addEventListener('click', clickClose);

});
