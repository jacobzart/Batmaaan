$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    $(window).on('load', function () {
        $preloader = $('.loaderArea'),
          $loader = $preloader.find('.loader');
        $loader.fadeOut(2000);
        $preloader.delay(200).fadeOut('slow');
    });
    
    tabsItem.on('click', function (event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active')
        $(this).toggleClass('tabs-item-active');
    });

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1500);
        return false;

    

});
});