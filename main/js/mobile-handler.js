// Handle mobile webpage via page width

$(document).ready(function() {
    var $window = $(window);
    
    // some variable initializations on load
    var temp_html = $("#name_text").html();
    $("#mobile_name_text").html(temp_html);
    
    function checkWidth() { 
        var windowSize = $window.width();
        
        /* Temporary solution to handle mobile size display */
        if( windowSize < 750 ) {
            // handle smaller window size such as mobile, or window resize
            // hide main nav and show mobile nav
            $("#main_nav").hide();
            $("#mobile_nav").show();
            // Resize andrew_img div 
            // ideally we would like to add class to the img, but 
            // img attribute does not support class, so we define 
            // width/height here
            $("#andrew_img").addClass("andrew_img_mobile");
            // hide text in the img box
            $("#name_text").hide();
            
            $("#mobile_welcome").show();
            
            
            // Temporarily hide other contents while mobile dev is underway
            $("#chevronDiv").hide();
            $("#aboutSeg").hide();
            $("#photographySeg").hide();
            $("#whatSeg").hide();
            
        } else {
            // Restore to normal (in case of window resize)
            $("#main_nav").show();
            $("#mobile_nav").hide();
            
            $("#andrew_img").removeClass("andrew_img_mobile");
            $("#name_text").show();
            $("#mobile_welcome").hide();
            
            
            $("#chevronDiv").show();
            $("#aboutSeg").show();
            $("#photographySeg").show();
            $("#whatSeg").show();
        }
    }
    
    // Mobile does not like css hover
    $("#mobile_welcome")
        .mousedown(function() { 
            $("#mobile_welcome").css("opacity", "0.95");
        })
        .mouseover(function() {
            $("#mobile_welcome").css("opacity", "0.95");
            $("#mobile_welcome").css("cursor", "pointer");
        })
        .mouseout(function() {
            $("#mobile_welcome").css("opacity", "0.8");
            $("#mobile_welcome").css("cursor", "default");
    });
    
    $("#mobile_welcome").click(function() {
        if( $("#mobile_name_text").is(":hidden") ) {
            $("#mobile_name_text").slideDown("slow");
        } else {
            $("#mobile_name_text").slideUp("slow");
        }
    });
    
    $("#mobile_menu, .mobile_nav_display").click(function() {
        if( $(".mobile_nav_display").is(":hidden") ) {
            $(".mobile_nav_display").slideDown("slow");
        } else {
            $(".mobile_nav_display").slideUp("slow");
        }
    });
    
    // check width on load
    checkWidth();
    
    $(window).resize( checkWidth );
});