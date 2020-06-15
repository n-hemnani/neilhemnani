$(document).ready(function() {
    $(".toggle-button").click(function() {
        $(".nav-links").toggle();
    });

    $(".nav-links").click(function() {
        var w = $(window).width();
        if (w < 768) {
            $(".nav-links").hide();
        }
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()
        $('html, body').animate( { scrollTop: $($(this).attr('href')).offset().top - 65 }, 300)
    })

    $(window).resize(function(){  
        var w = $(window).width();  
        if (w > 768) {  
            $(".nav-links").show();
        }
        if (w < 768) {  
            $(".nav-links").hide();
        }  
    });

    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: "required"
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please type a message"
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});