var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

$(window).on('scroll', function () {
    var scrollHeight = $(this).scrollTop();
    var slideHeight = $('#big-logo').height() / 2;

    if (scrollHeight >= slideHeight) {
        $('#small-logo').removeClass('invisible');
    } else {
        $('#small-logo').addClass('invisible');
    }
}); 