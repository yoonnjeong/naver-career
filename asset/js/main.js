$(function(){
    $('.gnb .gnb-item:first-child').hover(
        function(){
            $('.gnb').addClass('active');
            $('.gnb-depth2').css('display' , 'block');
        },
        function(){
            $('.gnb').removeClass('active');
            $('.gnb-depth2').css('display' , 'none');
        }
    );
    
    var swiper = new Swiper(".main-swiper", {
        loop : false,
        allowTouchMove: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $('.sc-team .select-box select').change(function(){
        $(this).css('color','#000');
    });

    var swiper1 = new Swiper(".people-slider", {
        slidesPerView: 1.1,
        // 모바일일때= 모바일부터 320까지
        spaceBetween: 30,
        navigation: {
            nextEl: ".people-slider .swiper-button-next",
            prevEl: ".people-slider .swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,  //브라우저가 320보다 클 때
              spaceBetween: 44,
            },
            767: {
              slidesPerView: 1,  //브라우저가 767보다 클 때
              spaceBetween: 44,
            },
        },
    });



    $('.top-banner .btn-banner').click(function(){
        $('.top-banner').css('display','none');
    }); 
      
       

    var swiper2 = new Swiper(".benefit-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".benefit-slider .swiper-button-next",
            prevEl: ".benefit-slider .swiper-button-prev",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,  //브라우저가 320보다 클 때
              spaceBetween: 44,
            },
            767: {
              slidesPerView: 1,  //브라우저가 767보다 클 때
              spaceBetween: 44,
            },
            1023: {
              slidesPerView: 3,  //브라우저가 1023보다 클 때
              spaceBetween: 44,
            },
        },
    });

    

    $('.corp-site .link-site').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('header .tab-wrap button').click(function(){
        $(this).toggleClass('btn-close');
        $('header .mo-gnb').toggleClass('active');
        $('body').toggleClass('active');
    });
    $('header .mo-gnb .mognb-item:first-child').click(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $('.sc-team .mo-searchbox button').click(function(){
        $('.mo-lnb').addClass('active');
        $('body').addClass('active');
    });
    $('.mo-lnb .btn-close').click(function(){
        $('.mo-lnb').removeClass('active');
        $('body').removeClass('active');
    });



    
    $('.mo-lnb .mo-searchbox').focusin(
        function(){
            $('.mo-lnb .mo-searchbox').addClass('active');
        }
    );
    $('.mo-lnb .mo-searchbox').focusout(
        function(){
            $('.mo-lnb .mo-searchbox').removeClass('active');
        }
    );

    $('.mo-lnb .select-box .select-list .btn-select').click(function(){
        $(this).toggleClass('active');
        $(this).toggleClass('on');
        if ($(this).siblings('ul').css('display') == 'block') {
            $(this).siblings('ul').css('display','none');
        } else {
            $(this).siblings('ul').css('display','block');
        }
    });

    $('.mo-lnb .select-depth1 .btn-select').click(function(){
        $(this).toggleClass('on');
    });

    $('.mo-lnb .btn-clear').click(function(){
        $('.mo-lnb .select-list .btn-select').removeClass('on');
    });

    $(window).resize(function(){
        const w=$(window).width();
        if(w > 766) {
            $('.mo-lnb').removeClass('active');
            $('body').removeClass('active');
        }
    });

    $(window).trigger('resize');

})