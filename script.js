$(function () {
  //scrollの下のやつ//
    $('.scroll-bar').hide();
    $(window).one('scroll' , function(){
      $('.scroll-bar').show();
    });
  
  //scroll消すやつ//
  $('.fa-times').click(function(){
    $('.scroll-bar').hide();
  });

  //mediaQのカウンセリングボタン//
  $('.header-lists').click(function(){
    $('.header-media-contents').toggle();

    if ($(this).find('i').hacClass('fas fa-bars')) {
      $(this).find('i').removeClass('fas fa-bars');
      $(this).find('i').addClass('fas fa-times');
    } else {
      $(this).find('i').removeClass('fas fa-times');
      $(this).find('i').addClass('fas fa-bars');
    }
    
  });

  //mediaQのカウンセリング内の初めて・キャリアボタン//
  $('.header-media-list').click(function(){
    $(this).find('li').toggle();
  });

});
