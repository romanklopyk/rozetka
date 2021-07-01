$(document).on('click', '.header__search-form-but', function () {
    var x = $('.header__search-input input').val();
    alert(x);
});

$(document).on('click', '.header__menu-toggle', function () {
    $(this).toggleClass('opened');
    $('.slide-menu').toggleClass('opened');

});


$(document).ready(function () {
    var sliderOptions = {
        autoplay: true,
        prevArrow: '<div class="prev-button"><svg><use href="#chevron-right"></use></svg></div>',
        nextArrow: '<div class="next-button"><svg><use href="#chevron-right"></use></svg></div>'

    };
    
    $('.home__banner-slider').slick(sliderOptions)
});
