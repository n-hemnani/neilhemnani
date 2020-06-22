$(document).ready(function() {
    // button to display navigation menu when on mobile
    $(".toggle-button").click(function() {
        if ($(".nav-links").css("display") === "none") {
            $(".nav-links").css("display", "flex");
        } else {
            $(".nav-links").css("display", "none");
        }
    });

    // hide navigation menu when page is selected on mobile
    $(".nav-links").click(function() {
        var w = $(window).width();
        if (w < 768) {
            $(".nav-links").hide();
        }
    });

    /*
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate( { scrollTop: $($(this).attr('href')).offset().top - 65 }, 300)
    })
    */

    // hide or show navigation menu responsively
    $(window).resize(function(){  
        var w = $(window).width();  
        if (w > 768) {  
            $(".nav-links").show();
        }
        if (w < 768) {  
            $(".nav-links").hide();
        }  
    });

    // validation for contact form
    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true       // make sure email is in proper format
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please type a message"
        },
        submitHandler: function(form) {
            form.submit();    // submit form if valid
        }
    });
});



// code for particles in background using particles.js library
particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "color": {
        "value": ["#00ffff", "#ff0000"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.3,
          "opacity_min": 0.5,
          "sync": true
        }
      },
      "size": {
        "value": 4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 2,
          "size_min": 2.5,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#000",
        "opacity": 0.362060339181007,
        "width": .9469921162906312
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "bounce",
        "bounce": true,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 500,
          "size": 5,
          "duration": 5,
          "opacity": 1,
          "speed": .3
        },
        "repulse": {
          "distance": 200,
          "duration": 10
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
  }

);