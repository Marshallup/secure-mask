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
    // .hasClass("menu-on"))
    $('button').click(function(event) {

        if (event.target.classList.contains('button__form')) {
            return
        } else if ( event.target.classList.contains('button__slider')) {
            return
        } else if (event.target.classList.contains('button__contacts') ) {
            return
        } else {
            $('html, body').animate({
                scrollTop: $('#order').offset().top
            }, 1000)
        }
    })

    // $('.slider__block').slick({
    //     settings: "unslick",
    //     dots: true,
    //     speed: 1000
    // });
    // $('.slider__block').slick("unslick")
})
let menu = document.querySelector('.main__menu');
let burger = document.querySelector('.main__burger');
let body = document.body;
window.onload = () => {
    // let burger = document.querySelector('.main__burger')
    burger.onclick = (e) => {
        burger.classList.toggle('burger__active')
        menu.classList.toggle('menu__active')
        body.classList.toggle('lock')
        for (let link of menu.children ) {
            link.onclick = () => {
                burger.classList.remove('burger__active')
                body.classList.remove('lock')
                menu.classList.remove('menu__active')
            }
        }
    }
}