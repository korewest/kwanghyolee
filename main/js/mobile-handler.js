/* 

mobile-handler.js 

Handle mobile webpage via page width detection.
When window is resized, or loads with certain pixel dimensions less than specified,
desktop elements are hidden and mobile elements are shown. 

Empty mobile divs are filled with html from existing data in corresponding
sections. Mobile divs are completely separate entities with styling / behavior 
of its own.

*/

$(document).ready(function() {
    
    var $window = $(window);
    
    // some variable initializations on load
    var temp_html = $("#name_text").html();
    $("#mobile_name_text").html(temp_html);
    temp_html = $("#about0text").html();
    $("#mobile_about0text").html(temp_html);
    temp_html = $("#about1text").html();
    $("#mobile_about1text").html(temp_html);
    temp_html = $("#about2text").html();
    $("#mobile_about2text").html(temp_html);
    temp_html = $("#photo_text").html();
    $("#mobile_photo_text").html(temp_html);
    temp_html = $("#contactSeg").html();
    $("#mobile_contact").html(temp_html);
    temp_html = $("#whattext").html();
    $("#mobile_what_text").html(temp_html);
    
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
                $("#mobile_contact").show();

                // Temporarily hide other contents while mobile dev is underway
                $("#chevronDiv").hide();
                $("#aboutSeg").hide();
                $("#photographySeg").hide();
                $("#whatSeg").hide();
                $("#contactSeg").hide();
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
            $("#contactSeg").show();
            
            preserve_page_content = false;
        }
    }
    
    $(".mobile_nav_display")
        .mousedown(function(event) { 
            var menu_item_clicked = $(event.target).attr("id");
            $("#"+menu_item_clicked).css("background", "black");
            $("#"+menu_item_clicked).css("opacity", "0.7");
        })
        .mouseup(function(event) {
            var menu_item_clicked = $(event.target).attr("id");
            $("#"+menu_item_clicked).css("background", "#222229");
            $("#"+menu_item_clicked).css("opacity", "1.0");
        })
        .mouseover(function(event) {
            var menu_item_clicked = $(event.target).attr("id");
            $("#"+menu_item_clicked).css("background", "black");
            $("#"+menu_item_clicked).css("opacity", "0.7");
        })
        .mouseout(function(event) {
            var menu_item_clicked = $(event.target).attr("id");
            $("#"+menu_item_clicked).css("background", "#222229");
            $("#"+menu_item_clicked).css("opacity", "1.0");
    });
    
    $("#mobile_menu_icon")
        .mousedown(function(event) { 
            $(this).css("opacity", "0.5");
        })
        .mouseover(function() {
            $(this).css("opacity", "0.5");
        })
        .mouseout(function() {
            $(this).css("opacity", "1.0");
    });
    
    // check width on load
    checkWidth();
    
    $(window).resize( checkWidth );
});