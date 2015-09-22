$(document).ready(function() {
    
    // Show and hide menu when menu element is clicked
    $("#mobile_menu, .mobile_nav_display").click(function() {
        if( $(".mobile_nav_display").is(":hidden") ) {
            $(".mobile_nav_display").slideDown("fast");
        } else {
            $(".mobile_nav_display").slideUp("fast");
        }
    });
    
    // if user clicks outside of nav, close nav
    $(document).mouseup( function(e) {
        var cont = $(".mobile_nav_display");
        if (!cont.is(e.target) && cont.has(e.target).length === 0) {
            $(".mobile_nav_display").slideUp("fast");
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
    
});