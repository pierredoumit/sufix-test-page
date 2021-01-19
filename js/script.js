$(document).ready(function () {

    const thisYear = new Date();
    $(".Footer__HolderCopy span").html(thisYear.getFullYear());


    $(".burger_menu_icon").click(function () {
        const $this = $(this);
        if ($this.hasClass("close")) {
            $("nav").css({ "height": "0%" });
            $this.removeClass("close")
        }
        else {
            $("nav").css({ "height": "100%" });
            $this.addClass("close")
        }
    });



    $("#Banner__Slider").owlCarousel({
        items: 1,
    });

    $('.Brands__Listing').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                navText: ["<img src='./images/arrowLeft.svg'>", "<img src='./images/arrowRight.svg'>"]
            },
            600: {
                items: 3,
                nav: true,
                navText: ["<img src='./images/arrowLeft.svg'>", "<img src='./images/arrowRight.svg'>"]
            },
            1000: {
                items: 4,
                nav: true,
                navText: ["<img src='./images/arrowLeft.svg'>", "<img src='./images/arrowRight.svg'>"]
            }
        }
    })


});