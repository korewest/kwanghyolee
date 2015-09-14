// Handle mobile webpage via page width

$(document).ready(function() {
    var $window = $(window);
    
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
            var temp_html = $("#name_text").html();
            $("#mobile_name_text").html(temp_html);
            $("#mobile_name_text").show();
            
            
        } else {
            // Restore to normal (in case of window resize)
            $("#main_nav").show();
            $("#mobile_nav").hide();
            
            $("#andrew_img").removeClass("andrew_img_mobile");
            $("#name_text").show();
            $("#mobile_name_text").hide();
        }
    }
    
    // check width on load
    checkWidth();
    
    $(window).resize( checkWidth );
});