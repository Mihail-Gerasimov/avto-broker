$(document).ready(function() {
    // slider
    if ($(window).width() < 426) {

        $('.multiple-items').slick({
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            centerPadding: '30px'
        });
    }
    // $('.advantages__card:nth-child(2) .crad--picture').addClass("mb-3");
});