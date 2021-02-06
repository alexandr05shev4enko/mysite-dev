$(function () {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,
    breakpoints: {
      770: {
        allowTouchMove: false,
        // autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      315: {
        allowTouchMove: true,
        navigation: false,
        // autoplay: false
      }
    }
  });

  function animate(){
    var circlea = new ProgressBar.Circle('.visible1', {
      color: '#000',
      text: {
        value: '95%'
      },
      easing: 'easeInOut',
      duration: 2000
    });
    var circleb = new ProgressBar.Circle('.visible2', {
      color: '#000',
      text: {
        value: '50%'
      },
      easing: 'easeInOut',
      duration: 2000
    });
    var circlec = new ProgressBar.Circle('.visible3', {
      color: '#000',
      text: {
        value: '90%'
      },
      easing: 'easeInOut',
      duration: 2000
    });
    var circled = new ProgressBar.Circle('.visible4', {
      color: '#000',
      text: {
        value: '100%'
      },
      easing: 'easeInOut',
      duration: 2000,
    });
  
    circlea.animate(0.95);
    circleb.animate(0.5);
    circlec.animate(0.9);
    circled.animate(1.0);
  };

  animate ();


  $('.header-top__btn, .control').on('click', function () {
    $('.menu').toggleClass('menu--active');
  });

  $('.menu__item-link').on('click', function () {
    $('.menu--active').removeClass('menu--active');
    $('.control').removeClass('control--deactive');
    $('.control').addClass('control--active');
    $('body').removeClass('scroll-hidden');
  });

  $("a.menu__item-link").on("click", function (event) {
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $(window).scroll(function () {
    var top = $(document).scrollTop();
    if (top < 400) $(".control").removeClass('control--active');
    else $(".control").addClass('control--active');
  });

  $('.header-top__btn, .control').on('click', function () {
    if ($('div').hasClass('menu--active')) {
      $('body').addClass('scroll-hidden');
    } else {
      $('body').removeClass('scroll-hidden');
    }
  });

  $('.control, .header-top__btn').on('click', function () {
    if ($('div').hasClass('menu--active')) {
      $('.control').addClass('control--deactive');
      $('.menu__close-btn').addClass('menu__close-btn--active');
    } else {
      $('.control').removeClass('control--deactive');
      $('.menu__close-btn').removeClass('menu__close-btn--active');
    }
  });

  

  $('.menu__close-btn').on('click', function(){
    $('.menu').removeClass('menu--active');
    $('.control').removeClass('control--deactive');
    $('.control').addClass('control--active');
    $('body').removeClass('scroll-hidden');
  })

  // $('.header-top__btn').on('click', function () {
  //   if ($('div').hasClass('menu--active')) {
  //     $('.control').addClass('control--deactive');
  //     $('.menu__close-btn').addClass('menu__close-btn--active');
  //   } else {
  //     $('.control').removeClass('control--deactive');
  //     $('.control').removeClass('control--active');
  //     $('.menu__close-btn').removeClass('menu__close-btn--active');
  //   }
  // });

  // $(function(){
  //   $('.skills__item-progress').hover(function(){
  //     animate();
  //   })
  // })



});