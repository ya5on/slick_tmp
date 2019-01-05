$(function () {
    menu = ('nav ul');
    
    $('#toggle-btn').on('click', function (e) {
        e.preventDefault();
        $(menu).slideToggle();
    });
    
    $(window).resize(function () {
        let w = $(this).width();
        if (w > 767 && $(menu).is(':hidden')){
            $(menu).removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {

        let w = $(window).width();
        if (w < 767) {
            $(menu).slideToggle();
        }
    });

    $('.open-menu').height($(window).height());

});

//scrolling
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    let $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;

                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                })
            }
        }
    });