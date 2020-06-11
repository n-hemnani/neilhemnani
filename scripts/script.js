$(document).ready(function() {
    $(".toggle-button").click(function() {
        $(".nav-links").toggle();
    })

    $(".nav-links").click(function() {
        var w = $(window).width();
        if (w < 768) {
            $(".nav-links").hide();
        }
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
});