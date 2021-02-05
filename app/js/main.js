$(function () {

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    allowTouchMove: false,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });

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

  
  $('.header-top__btn').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });

  $('.menu__item-link').on('click', function(){
    $('.menu--active').removeClass('menu--active');
  });

  $("a.menu__item-link").on("click", function (event) {
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
  });


});