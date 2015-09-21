// Handle mobile webpage via page width

$(document).ready(function() {
    var $window = $(window);
    
    // some variable initializations on load
    var temp_html = $("#name_text").html();
    $("#mobile_name_text").html(temp_html);
    
    // prevent resizing from resetting content within windows px boundary
    var preserve_page_content = false;
    
    function checkWidth() { 
        var windowSize = $window.width();
        
        /* Temporary solution to handle mobile size display */
        if( windowSize < 750 ) {
            
            if( !preserve_page_content ) {
                // handle smaller window size such as mobile, or window resize
                // hide main nav and show mobile nav
                $("#main_nav").hide();
                $("#mobile_nav").show();
                // Resize andrew_img div 
                $("#andrew_img").hide();
                // hide text in the img box
                $("#name_text").hide();

                $("#mobile_khl_seg").show();
                $("#mobile_welcome").show();

                // Temporarily hide other contents while mobile dev is underway
                $("#chevronDiv").hide();
                $("#aboutSeg").hide();
                $("#photographySeg").hide();
                $("#whatSeg").hide();
            }
            
            // While window size is < 750, preserve page content when resizing
            preserve_page_content = true;
            
        } else {
            // Hide all mobile elements
            $(".mobile_class").hide();
        
            // Restore to normal (in case of window resize)
            $("#main_nav").show();
            $("#andrew_img").show();
            $("#name_text").show();
            $("#chevronDiv").show();
            $("#aboutSeg").show();
            $("#photographySeg").show();
            $("#whatSeg").show();
            
            preserve_page_content = false;
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
    
    // check width on load
    checkWidth();
    
    $(window).resize( checkWidth );
});