$('body').niceScroll({ cursorcolor: '#333' });

$('.HomeSection, .HomeArticle').height($(window).height());

$(function () {
    count = 0;
    wordsArray = ["CREATIVE", "MODERN", "PARALLAX"];
    setInterval(function () {
        count++;
        $(".Text").fadeOut(400, function () {
            $(this).text(wordsArray[count % wordsArray.length]).fadeIn(400);
        });
    }, 2000);
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function () {
    $('.Reviews .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
$('.Portfoliosection ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$(".AboutUs header h1, .Services header h1, .Portfoliosection header h1, .TeamSection header h1").fitText(1.2, { minFontSize: '20px', maxFontSize: '40px' });
$(".Reviews .Overlay header h1, .Subscripe .Overlay header h1").fitText(1.6, { minFontSize: '20px', maxFontSize: '40px' });

//The HomePage Arrow And Get Started Button Click
$(".HomeSection .navbar-expand-lg .navbar-nav .ABOUTUS .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#AboutUsSection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .SERVICES .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#ServicesSection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .PORTFOLIO .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#Portfoliosection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .CLIENTS .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#ClientsSection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .TEAM .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#TeamSection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .SUBSCRIPE .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#SubscripeSection").offset().top
    }, 1000);
});
$(".HomeSection .navbar-expand-lg .navbar-nav .CONTACT .nav-link").click(function () {
    $("html, body").animate({
        scrollTop: $("#ContactSection").offset().top
    }, 1000);
});

//ScrollTo The Top
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.ScrollTop').fadeIn();
    } else {
        $('.ScrollTop').fadeOut();
    }
});
$('.ScrollTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});
//End ScrollTo The Top