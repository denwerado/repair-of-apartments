jQuery(document).ready(function() { //Проверяет документ на загруженность
  
  var btn = $('#upbutton'); //Присваивает переменной значение тэга

  if ($(window).scrollTop() > 300) {
    btn.addClass('up-btn-active');
  } else {
    btn.removeClass('up-btn-active');
  }

  btn.on('click', function(e) {
    e.preventDefault(); //e.preventDefault()- предотвращение случайного события
    $('html, body').animate({scrollTop:0}, '300'); //300 млск
  });

});

