// Slider
$('.slider__item').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    autoPlay: 3000,
    pageDots: false,
    draggable: false,
    setGallerySize: false,
    pauseAutoPlayOnHover: false,
})


$(window).on('load', function () {
    $('.svg').svgToInline();
})

// Menu left
let menuLeft = $('.menu__left');
let allSections = $('.mainwrapper');
let body = $('body');
menuLeft.on('click', (e) => {
    e.stopPropagation();
    $('.menu-fixed').toggleClass('active');
    allSections.addClass('move');
    body.css('position', 'fixed');
})

$('.mobile-nav .menu').on('click', (e) => {
    e.stopPropagation();
    $('.menu-fixed').addClass('active');
    allSections.addClass('move');
    body.css('position', 'fixed');
})

$('.menu-fixed .menu').on('click', (e) => {
    e.stopPropagation();
})



$('.cancel').on('click', (e) => {
    e.preventDefault()
    $('.menu-fixed').removeClass('active');
    allSections.removeClass('move');
    body.css('position', 'static');
})

$(document).on('click', (e) => {
    $('.menu-fixed').removeClass('active');
    allSections.removeClass('move');
    body.css('position', 'static');
})

// Scroll menu visible
$(document).on('scroll', function () {
    let scrollTop = $(this).scrollTop();
    let generalHeight = $('.general-height').offset().top;
    if (scrollTop > (generalHeight - $('header').height())) {
        $('.main-menu').addClass('active');
    } else {
        $('.main-menu').removeClass('active');
    }

})

// Back top
$('.backtop a').on('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })

})

// Product slider
$(window).on('load', function () {
    $('.product-card').flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        freeScroll: true,
        prevNextButtons: false,
        pageDots: false,
        groupCells: true,
    })
})

$('.list1').on('click', (e) => {
    e.preventDefault;
    $('.product-card.--1').flickity('next');
})
$('.list2').on('click', (e) => {
    e.preventDefault();
    $('.product-card.--2').flickity('next');

})
$('.list3').on('click', (e) => {
    e.preventDefault();
    $('.product-card.--3').flickity('next');

})

// popup contact
$('.button .--contact').on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    $('.popup-contact').addClass('active');
});

$('.popup-contact .popup-contact__wrap .close').on('click', (e) => {
    $('.popup-contact').removeClass('active');
});

$('.popup-contact__wrap').on('click', (e) => {
    e.stopPropagation();
})

$(document).on('click', (e) => {
    e.stopPropagation();
    $('.popup-contact').removeClass('active');
    $('.button.--projects .options').removeClass('active');
})

// Mouse move background
$(document).ready((e) => {
    $('.button .btn').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ left: x, top: y });
    })
    $('.button .btn').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ left: x, top: y });
    })
})
// Background Height and Menu left
let heightBanner = $('.general-banner');
console.log(heightBanner.offsetHeight);
// Button projects
$('.button.--projects .btn').on('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    $('.button.--projects .options').addClass('active');
    // let allProjects = $('.button.--projects .btn span');
    // let optionProjects = $('.button.--projects .options .button a').text();
    // allProjects.text(optionProjects);
})

$('.button.--projects .options .button a').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    let allProjects = $('.button.--projects .btn span');
    let optionProjects = $(this).text();
    allProjects.text(optionProjects);
    $('.button.--projects .options').removeClass('active');
})







