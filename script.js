console.log($(window).innerWidth());

console.log("Resize : " + $(window).resize());

if ($(window).innerWidth() < 576 || $(window).resize() < 576) {

    $(window).scroll(function () {
        var WScroll = $(this).scrollTop();

        console.log(WScroll);


        if (WScroll > 0) {
            $(".navbar2").addClass("muncul");
        }

        if (WScroll == 0) {
            $(".navbar2").removeClass("muncul");
        }

        $(".jumbotron h2").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });

        $(".jumbotron h3").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });

        $(".jumbotron a").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });


        //skills

        if (WScroll > 375) {
            $(".item").each(function (i) {
                $("#skills").css("backgroundColor", "#fec503");
                setTimeout(function () {
                    $(".item").eq(i).addClass("muncul");
                }, 300 * i + 1);
            })
        }

        //porfolio
        if (WScroll > 2500) {
            $(".portfolio-item").each(function (i) {
                $("#portfolio").css("backgroundColor", "#fec503");
                $(".portfolio .section-heading").addClass("muncul");
                $(".portfolio .section-subheading").addClass("muncul");
                setTimeout(function () {
                    $(".portfolio-item").eq(i).addClass("muncul");
                }, 300 * i + 1);
            })
        }

        if (WScroll > 3000) {
            $(".about").each(function (i) {
                $("#about").css("backgroundColor", "#fec503");
                $(".about img").addClass("muncul");
                $(".about p").addClass("muncul");
                $(".about .section-heading").addClass("muncul");
                $(".about .section-subheading").addClass("muncul");
                $(".front-end").addClass("muncul");
                $(".back-end").addClass("muncul");
                $(".communication").addClass("muncul");
                $(".creativity").addClass("muncul");
                $(".team-work").addClass("muncul");
                $(".pm").addClass("muncul");
            })
        }

        if (WScroll == 0) {
            $(".page-scroll").css("backgroundColor", "transparent");
        }

    })

} else {
    $(window).scroll(function () {
        var WScroll = $(this).scrollTop();

        console.log(WScroll);

        //navbar
        if (WScroll > 0) {
            $(".navbar2").addClass("muncul");
        }

        if (WScroll == 0) {
            $(".navbar2").removeClass("muncul");
        }

        $(".jumbotron h2").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });

        $(".jumbotron h3").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });

        $(".jumbotron a").css({
            "transform": "translate(0px," + WScroll / 1.2 + "PX)"
        });


        //skills

        if (WScroll < 1200 && WScroll > 200) {
            $(".item").each(function (i) {
                $("#skills").css("backgroundColor", "#fec503");
                setTimeout(function () {
                    $(".item").eq(i).addClass("muncul");
                }, 300 * i + 1);
            })
        } else {
            $(".item").each(function (i) {
                $("#skills").css("backgroundColor", "#000");
                setTimeout(function () {
                    $(".item").eq(i).removeClass("muncul");
                }, 300 * i + 1);
            })
        }

        //porfolio
        if (WScroll < 1400 && WScroll > 1200) {
            $(".portfolio-item").each(function (i) {
                $("#portfolio").css("backgroundColor", "#fec503");
                $(".portfolio .section-heading").addClass("muncul");
                $(".portfolio .section-subheading").addClass("muncul");
                setTimeout(function () {
                    $(".portfolio-item").eq(i).addClass("muncul");
                }, 300 * i + 1);
            })
        } else {
            $(".portfolio-item").each(function (i) {
                $("#portfolio").css("backgroundColor", "#000");
                $(".portfolio .section-heading").removeClass("muncul");
                $(".portfolio .section-subheading").removeClass("muncul");
                setTimeout(function () {
                    $(".portfolio-item").eq(i).removeClass("muncul");
                }, 300 * i + 1);
            })
        }

        if (WScroll < 2200 && WScroll > 1400) {
            $(".about").each(function (i) {
                $("#about").css("backgroundColor", "#fec503");
                $(".about img").addClass("muncul");
                $(".about p").addClass("muncul");
                $(".about .section-heading").addClass("muncul");
                $(".about .section-subheading").addClass("muncul");
                $(".front-end").addClass("muncul");
                $(".back-end").addClass("muncul");
                $(".communication").addClass("muncul");
                $(".creativity").addClass("muncul");
                $(".team-work").addClass("muncul");
                $(".pm").addClass("muncul");
            })
        } else {
            $(".about").each(function (i) {
                $("#about").css("backgroundColor", "#000");
                $(".about p").removeClass("muncul");
                $(".about img").removeClass("muncul");
                $(".about .section-heading").removeClass("muncul");
                $(".about .section-subheading").removeClass("muncul");
                $(".front-end").removeClass("muncul");
                $(".back-end").removeClass("muncul");
                $(".communication").removeClass("muncul");
                $(".creativity").removeClass("muncul");
                $(".team-work").removeClass("muncul");
                $(".pm").removeClass("muncul");

            })
        }

        if (WScroll == 0) {
            $(".page-scroll").css("backgroundColor", "transparent");
        }

    })




    $("#skills").on('click', function (e) {
        //  console.log(elemenTujuan.offset().top);
        console.log($('html').scrollTop(600));

        e.preventDefault();

    })

    // $("#skills2").on('click', function () {
    //     //  console.log(elemenTujuan.offset().top);
    //     $('html').scrollTop(600);

    // })

    $("#portfolio").on('click', function (e) {

        $('html').scrollTop(1250);

        e.preventDefault();


    })

    $("#about").on('click', function (e) {

        $('html').scrollTop(1830);

        e.preventDefault();


    })
}