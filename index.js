$(document).ready(function(){
  //頁面滑動
  const navList = $('.navbar-nav .nav-link');
  navList.click(function(){
    const targetId = $(this).attr('href');
    const targetTop = $(targetId).offset().top;
    $('html,body').stop().animate({
      scrollTop: targetTop + 'px',
    },1000)
  });

//meau隨著頁面滑動
  $(window).scroll(function(){
    const meau = $('#meauBar')
    const scrollTop = $(this).scrollTop()
    meau.stop().animate({
      'top': scrollTop + 300
    }, 500)
  });


});



