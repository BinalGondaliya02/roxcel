$(document).ready(function () {

    $('.scroll-top').hide()
    $(window).scroll(function () {

        var a = $(window).scrollTop()

        if (a > 200) {
            $('.header__bottom').addClass('fixed-header')
            $('.scroll-top').fadeIn(400)
            // $('.hdr .logo img').attr('src','./assets/logo-dark.png')
        }
        else {
            $('.header__bottom').removeClass('fixed-header')
            $('.scroll-top').fadeOut(400)
            // $('.hdr .logo img').attr('src','./assets/logo-light.png')
        }
    })

    //click to top website
    $('.scroll-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })
    // loading js
    setInterval(() => {
        $('.loader').slideUp(200)
    }, 2000);
})


