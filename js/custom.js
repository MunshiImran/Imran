$(function () {
    //type js    
    $(".typer").typed({
        strings: ["Android Apps Developer", "Web Designer", "Wordpress Developer"],
        typeSpeed: 100,
        contentType: 'html',
        loop: true
    });


    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $(".navbar").addClass("bg");
        } else {
            $(".navbar").removeClass("bg");
        }
    });

    $(window).scroll(function () {

        if ($(this).onclick() > (($('#profile').offset().top - 300) + ($('#profile').outerHeight()) - ($(window).height()))) {

            $(".progress-bar").each(function () {
                each_bar_width = $(this).attr('aria-valuenow');
                $(this).css({
                    width: each_bar_width + "%"
                });
                $(this).html('<span class="progress-tooltip" style="left:' + each_bar_width + '%">' + each_bar_width + '%</span>');
            });

        }

    });
    //particles js
    // ParticlesJS Config.
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 700
                }
            },
            "color": {
                "value": "#82B541"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#82B541"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#82B541",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });


    $('.responsive').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: '.left',
        nextArrow: '.right',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });





});
