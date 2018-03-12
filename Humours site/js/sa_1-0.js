//Email validation
function validateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.match(mailformat)) {
    return true;
  } else
  {
    return false;
  }
}

function doneTyping () {
  $('#email').removeClass('shake');
}

//Form state events
$(document).ready(function (){
  $('form').on('focusin', function(){   // Focus in active
    $(this).addClass('form__active');
    $('input').removeClass('form__active--error');
  });
  
//Focus out action
$('form').on('focusout', function(){
  $(this).removeClass('form__active');
  $('input').removeClass('form__active--type form__active--error');
});

//Typing action
$('input').on('keydown', function(){
  $(this).addClass('form__active--type');
  $('input').removeClass('form__active--error');
});

//Verification action
$('form').on('submit', function(event){
  var email = $('#email').val();
    var valid = validateEmail(email); //Check if e-mail is valid

    if (valid === true) {
      $('input').addClass('form__active--type');
    } else {
      event.preventDefault();
      $('input').addClass('form__active--error');
      $('#email').addClass('shake');
    }
  //Timer to remove .shake
    var typingTimer;                //timer identifier
    var doneTypingInterval = 500;  //time in ms
    clearTimeout(typingTimer);
    if ($('#email').val) {
      typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
  });

//Content animaton on scroll
var dropAnimating = false;
var height = $(window).height()/4;
$(window).scroll(function(){
  if (!dropAnimating) {
    dropAnimating = true;
    if  ($(window).scrollTop() > height){
      $(".bottom__content").stop().animate({opacity: '1', top: '0px'},500, function(){dropAnimating = false;});
    }
    else {
      $(".bottom__content").stop().animate({opacity:'0', top: '-16px'},250, function(){dropAnimating = false;});
    }
  }
});
});
