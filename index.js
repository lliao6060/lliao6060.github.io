$(document).ready(function(){
  //頁面滑動
  const navList = $('.navbar-nav .nav-link');
  const menuBar = $('#menuBar a');
  console.log(navList, menuBar);
  navList.click(scrollTodo);
  menuBar.click(scrollTodo);

//meau隨著頁面滑動
  $(window).scroll(function(){
    const menu = $('#menuBar')
    const scrollTop = $(this).scrollTop()
    menu.stop().animate({
      'top': scrollTop + 300
    }, 500)
  });


});


function scrollTodo(){
  const targetId = $(this).attr('href');
  const targetTop = $(targetId).offset().top;
  $('html,body').stop().animate({
    scrollTop: targetTop + 'px',
  },600);
}


