$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDistance = 0;
  $(window).scroll(function(){
    var lastScrollTop = $(this).scrollTop();

    if (lastScrollTop - scrollDistance > 50) {
      //create variable store navbar height
      var navbarHeight = $('.navbar').css('height');
      //animate navbar to negative height over 150ms
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      scrollDistance = lastScrollTop;
    } else if (scrollDistance - lastScrollTop > 50){
      $('.navbar').animate({top: 0}, 150)
      scrollDistance = lastScrollTop;
    }
  });

  $("#jumpin").click(function(e) {
    //prevent default jumping action
    e.preventDefault();

    var linkHref = $(this).attr('href')
    console.log(linkHref);
    // animate html
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1000, 'swing');
  });
});
