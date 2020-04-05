$(document).ready(function() {
    $('.main__arrow_down').click(function() {
        let target = $('#benefits')
        $('html, body').animate({
            scrollTop: target.offset().top - 30
        }, 900)
    })
    $('a[href^="#"]').click(function() {
        let targetLink = $(this).attr('href')
        console.log(targetLink)
        if ( targetLink == '#benefits') {
            $('html, body').animate({
                scrollTop: $(targetLink).offset().top
            }, 900)
        } else if ( targetLink == '#order') {
            $('html, body').animate({
                scrollTop: $(targetLink).offset().top - 100
            }, 2900)
        } else {
            $('html, body').animate({
                scrollTop: $(targetLink).offset().top
            }, 900)
        }
    })

    $('.slider__block').slick({
        dots: true,
        speed: 1000
    });
})