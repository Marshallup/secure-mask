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
let button_f = document.querySelector('.button__form');
let form_order = document.forms.order.amount
let price = document.querySelector('.large__cost')
let price_old = price.innerHTML
let large__amout = document.querySelector('.large__amount')

button_f.onclick = () => {
    if (form_order.value % 10 != 0) {
        alert('Введите число кратное 10')
        return false
    }
}
form_order.oninput = () => {
    large__amout.remove()
    if (form_order.value.length > 4) {
        return false
    }
    if ( !parseInt(form_order.value)) {
        console.log()
        return false
    }
        price.innerHTML = parseInt(form_order.value) * 100
}
form_order.onkeydown = (e) => {
    console.log(e)
}
form_order.onchange = () => {
    if ( price.innerHTML == 0 ) {
        price.innerHTML = price_old
        document.querySelector('.large__price').append(large__amout)
    }
    if ( form_order.value == '') {
        price.innerHTML = price_old
        document.querySelector('.large__price').append(large__amout)
    }
    console.log(form_order.value)
}

$(function() {
    $(document).on("change keyup input click", "input[name='amount']", function() {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, "");
        };
    });
    $(document).on("change keyup input click", "input[name='phone']", function() {
        if(this.value.match(/[^0-9]/g)){
            this.value = this.value.replace(/[^0-9]/g, "");
        };
    });
});

// "input[name='phone']"

// input.oninput = function() {
//     result.innerHTML = input.value;
//   };

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