$(document).ready(function() {

    $('.myCarousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1205,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 920,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });

    $('.myCarousel2').slick({
        slidesPerRow: 2,
        rows: 2,
        responsive: [{
            breakpoint: 478,
            settings: {
                slidesPerRow: 1,
                rows: 1,
            }
        }]
    });

    $('.myNavItem').hover(function() {
        $(this).css('color', '#d3a731');
        $(this).css('text-decoration', 'underline');
    }, function() {
        $(this).css('color', 'rgba(0, 0, 0, 0.7)');
        $(this).css('text-decoration', 'none');
    });

    $('.featBoxPrev').click(function() {
        $('.myCarousel').slick('slickPrev');
    })

    $('.featBoxNext').click(function() {
        $('.myCarousel').slick('slickNext');
    })

});