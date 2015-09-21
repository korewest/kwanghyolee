$(document).ready(function() {
    
    
    // Show and hide menu when menu element is clicked
    $("#mobile_menu, .mobile_nav_display").click(function() {
        if( $(".mobile_nav_display").is(":hidden") ) {
            $(".mobile_nav_display").slideDown("slow");
        } else {
            $(".mobile_nav_display").slideUp("slow");
        }
    });
    
    //Determine what page to display
    var displayPageId = "";
    
    $(".mobile_nav_display").click(function(event) {
        // identify which menu element was clicked
        displayPageId = $(event.target).attr("id");
        // Attach segment string that matches the page name
        displayPageId = displayPageId + "_seg";
        
        // for each mobile_ id's, look at seg that displays info
        $("[id^=mobile_]").each(function() {
            var currSeg = $(this).attr("id");
            if( currSeg.indexOf("_seg") >=0 ) {
                // if element does not contain the displayPageId
                if( currSeg.indexOf(displayPageId) < 0 ) {
                    $("#"+currSeg).hide();
                }
            }
        });
        
        // show the page that was clicked on menu
        $("#"+displayPageId).show();
        
    });
    
    
    var temp_html = $("#about0text").html();
    $("#mobile_about0text").html(temp_html);
    temp_html = $("#about1text").html();
    $("#mobile_about1text").html(temp_html);
    temp_html = $("#about2text").html();
    $("#mobile_about2text").html(temp_html);
});