AOS.init();
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");

        }
    });

    $(document).snowfall({
        image: 'asserts/icon/b.gif',
        minSize: 10,
        maxSize: 30,
        flakeCount: 50,
        maxSpeed: .5
    });


});

//toggle menu

$('.menu_button').click(function () {
    $('.navbar .menu').toggleClass("active");
    $('.menu_button i').toggleClass("active");
});

let options = {
    startAngle: -1.55,
    size: 126,
    value: 0.85,
    fill: {gradient: ['#0ff5ef', '#ac0276', "#f634e4"]}
}
$(window).scroll(function () {
    if (this.scrollY >= 600 & this.scrollY <= 700) {
        $(".circle .bar").circleProgress(options).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
        });

        $(".java .bar").circleProgress({
            value: 0.77
        });
        $(".html .bar").circleProgress({
            value: 0.85
        });
        $(".sql .bar").circleProgress({
            value: 0.70
        });
        $(".js .bar").circleProgress({
            value: 0.75
        });
        $(".hb .bar").circleProgress({
            value: 0.60
        });
        $(".spring .bar").circleProgress({
            value: 0.75
        });
        $(".angular .bar").circleProgress({
            value: 0.40
        });
        $(".react .bar").circleProgress({
            value: 0.70
        });
        $(".node .bar").circleProgress({
            value: 0.40
        });
        $(".express .bar").circleProgress({
            value: 0.30
        });
        $(".mongo .bar").circleProgress({
            value: 0.35
        });
        $(".ajax .bar").circleProgress({
            value: 0.70
        });
    }
});


