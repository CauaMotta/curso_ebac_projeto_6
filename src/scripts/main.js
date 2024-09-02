$(window).on('scroll', function () {
    var hero = $('.hero').height() - 75;

    $('.navbar').toggleClass('navbar-transparent', window.scrollY < hero)
    $('.navbar').toggleClass('navbar-full', window.scrollY >= hero)

    var link = $('.navbar a.link');
    var top = $(window).scrollTop();

    $('.section').each(function () {
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 150;

        if (top >= offset && top < offset + height) {
            link.removeClass('active');
            $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
    })
})