$(document).ready(function(){
  var screenWidth = $(window).width(),
      isPhone = screenWidth < 768;
      isMonitor = screenWidth > 1200;

// switching images in models area
  $( '.models__preview' ).on('click', slideHandler );
  $( '.models__preview' ).bind( "tap", slideHandler );

  function slideHandler (e) {
      var target = $(e.target);
      if (target.hasClass('models__preview')) {
          var img = target.closest('.models__galery').find('.models__galery-slide');
          var src = target.data('src');
          img.attr('src', src).hide().fadeIn();
      }
  }

// hide mobile menu
  $('.navbar-collapse').on('click', hideSendwichMenu);
  $(document).on('click', hideSendwichMenu);
  $('.navbar-collapse').bind('tap', hideSendwichMenu);
  $(document).bind('tap', hideSendwichMenu);

  function hideSendwichMenu () {
      $('.navbar-collapse').collapse('hide');
  }

  // button buy at the top

$('.header__description-link').on( 'click', catalogInTheForm );
$('.header__description-link').bind( 'tap', catalogInTheForm );

$('.order__text').on( 'click', catalogInTheForm );
$('.order__text').bind( 'tap', catalogInTheForm );

function catalogInTheForm (e) {
  e.preventDefault();
  var that = $(this),
      hideCatalog = that.closest('.body').find('.form__buy-goods'),
      showCatalog = that.closest('.body').find('.form__buy-popup_select'),
      formControl = that.closest('.body').find('.form-control'),
      catalog = $('<select class="form-control form__buy-popup_catalog" style="border-radius: 50px;" required name="model"><option selected="selected" value="" class="">Модель</option><option value="model_1" class="">Туфли Tommy Hilfiger (7560)</option><option value="model_2" class="">Кеды Tommy Hilfiger (7550)</option><option value="model_3" class="">Кроссовки Tommy Hilfiger (7540)</option><option value="model_4" class="">Кеды Tommy Hilfiger (7425)</option><option value="model_5" class="">Кожаные сандалии</option><option value="model_6" class="">Кеды Tommy Hilfiger (7430)</option></select>');
      
      // add option catalog
      if ( formControl.hasClass('form__buy-popup_catalog') ){
        console.log('уже добавил каталог :)');
      } else {
        showCatalog.before(catalog);
      }
      // hide catalog with img
      hideCatalog.addClass('none');
      // click on the order button after click on the order in catalog
      if (hideCatalog.hasClass('flex')) {
        hideCatalog.removeClass('flex');
      }
  }

  // correct model from catalog
  $(window).on( 'load resize', function () {
    screenWidth = $(window).width(),
    isMonitor = screenWidth > 1200;
      if ( isMonitor ) {
        $('.models__description-buy').on('click', function (e) {
          e.preventDefault();
          var that = $(this).find('.models__description-order'),
              numProduct = that.data('product'),
              el = that.closest('.body').find('.form__buy-goods'),
              removeTopCatalog = that.closest('.body').find('.form__buy-popup_catalog');
              el.each(function() {
                  var that = $(this);
                  var numEl = $(this).data('product');
                  if ( numProduct === numEl ) {
                      that.addClass('flex');
                      removeTopCatalog.remove();
                  } else {
                      that.removeClass('flex');
                  }
              });
        });
      } else {
        $('.models__description-buy').on('click', catalogInTheForm );
      }

  });




// owlCarousel
  $('#advantages-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        }
		}
	});

    $('#slider-bottom').owlCarousel({
      loop:true,
      margin:-20,
      center: true,
      dots: true,
      responsiveClass:true,
      autoplay: true,
      navText:['<i class="arrow-left"></i>','<i class="arrow-right"></i>'],
      responsive:{
          0:{
              items:1,
              loop:true,
              dots: true
          },
          500:{
              items:2,
              loop:true,
              dots: true
          },
          768:{
              items:3,
              loop:true,
              dots: true
          }
      }
  });

// editing the form po-pup

    $('.form__buy-popup input[name=name_last]').closest('.form-group').after(
        '<div class="form-group"><select class="form-control" style="border-radius: 50px;" required name="size"><option selected="selected" value="" class="">Размер</option><option value="xs" class="">40</option><option value="x" class="">41</option><option value="red" class="">42</option><option value="grey" class="">43</option><option value="grey" class="">44</option><option value="grey" class="">45</option></select></div>'
    );

    $('.form__buy-popup select[name=size]').addClass('form__buy-popup_select');
    $('.form__buy-popup>.order-form').addClass('form__buy-popup_order');
    $('.form__buy-popup input').addClass('form__buy-popup_input');
    $('.form__buy-popup button').addClass('form__buy-popup_button');

    $('.form__buy-popup input[name=name_first]').attr("placeholder","Имя");
    $('.form__buy-popup input[name=name_last]').attr("placeholder","Телефон");

// editing the form in footer

    $('.form__buy input').css({
        "border-radius": "50px",
        "width": isPhone ? "200px" : "400px",
        "height": "50px",
        "padding-left": "30px",
        "font-size": "16px",
        "margin": "30px"
    });

    $('.form__buy button').css({
        "width": "218px",
        "height": "45px",
        "border-radius": "50px",
        "border": "1.5px solid #ffd800",
        "color": "#fff",
        "background-color": "transparent",
        "font-size": "18px",
        "font-family": "OpenSansSemiBold",
        "margin-bottom": "200px"
    });
    
    $('.form__buy input::placeholder').css("color", "#cecece");
    $('.form__buy input[name=name_last]').css({
        "border-radius": "50px",
        "color": "#bcbcbc"
    });

    $('.form__buy input[name=name_first]').attr("placeholder","Имя");
    $('.form__buy input[name=name_last]').attr("placeholder","Телефон");


// adaptive form popup
    $(window).resize(function() {
        screenWidth = $(window).width();
        isPhone = screenWidth < 768;
        isSmallPhone = screenWidth < 480;
        $('.form__buy input').css({
          "width": isPhone ? "200px" : "400px"
        });
        $('.form__buy button').css({
          "margin-bottom": isSmallPhone ? "150px" : "200px"
        });
    });

// go to the menu area
    // models area
    $('.menu__link-models').on('click', showModelsWatch);
    $('.menu__link-models').bind('tap', showModelsWatch);
    $('.catalog__link').on('click', showModelsWatch);
    $('.catalog__link').bind('tap', showModelsWatch);

    function showModelsWatch (e) {
        e.preventDefault();
        showModels($(this).attr('href'), true);
    }    
  // advantages area
    $('.menu__link-advantages').on('click', showAdvantagesWatch);
    $('.menu__link-advantages').bind('tap', showAdvantagesWatch);


    function showAdvantagesWatch (e) {
        e.preventDefault();
        showAdvantages($(this).attr('href'), true);
    }    

    // work area
    $('.menu__link-work').on('click', showWorkWatch);
    $('.menu__link-work').bind('tap', showWorkWatch);

    function showWorkWatch (e) {
        e.preventDefault();
        showWork($(this).attr('href'), true);
    }    

    // reviews area
    $('.menu__link-reviews').on('click', showReviewsWatch);
    $('.menu__link-reviews').bind('tap', showReviewsWatch);

    function showReviewsWatch (e) {
        e.preventDefault();
        showReviews($(this).attr('href'), true);
    }

    showReviews(window.location.hash, false);


        function showModels(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.models').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showAdvantages(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.advantages__count').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showWork(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.work__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showReviews(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.reviews__customer').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

});

