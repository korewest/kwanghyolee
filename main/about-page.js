$(document).ready(function() {
    // Calculate number of pages in aboutSeg div
    var num_about_page = 0;
    $(".currAboutPage").each(function() {
        num_about_page++;
    });
    $(".hiddenAboutPage").each(function() {
        num_about_page++;
    });
    // Offset index since pages start at 0
    num_about_page = num_about_page - 1;
    
    function isLeftChevron( div_id ) {
        if( div_id.indexOf("Left") !== -1 ) {
            return true;
        } else {
            return false;
        }
    }
    
    function isRightChevron( div_id ) {
        if( div_id.indexOf("Right") !== -1 ) {
            return true;
        } else {
            return false;
        }
    }
    
    function changePage(divToShow, divToHide) {
        /* slide animation for changing page via display blocks */
        $(divToShow).removeClass("hiddenAboutPage").addClass("currAboutPage");
        $(divToHide).removeClass("currAboutPage").addClass("hiddenAboutPage");
        
        var num_temp = divToHide.replace("#about", "");
        var num_curr = num_temp.replace("tab", "");
        
        num_temp = divToShow.replace("#about", "");
        var num_next = num_temp.replace("tab", "");
        // Replace background classes to display depending on page
        $("#aboutSeg").removeClass("aboutSegBackground"+num_curr).addClass("aboutSegBackground"+num_next);
    }
    
    $('[id^=chevScroll]').click(function(){ 
        var currDivId = [];
        var chevId = this.id;
        
        $(".currAboutPage").each(function() {
            currDivId.push(this.id);
        });
        var num_temp = currDivId[0].replace("about", "");
        num_temp = num_temp.replace("tab", "");
        var num_curr = parseInt(num_temp);
        var next_page_num = 0;
        
        if( num_curr > 0 && isLeftChevron(chevId) ) {
            // if at positive index, prev page means decrement page num by 1
            next_page_num = num_curr - 1;
        } else if( num_curr == 0 && isLeftChevron(chevId) ) {
            // if at 0 index, prev page scrolls to last page
            next_page_num = num_about_page;
        } else if( num_curr >= 0 && isRightChevron(chevId) ) {
            if( num_curr == num_about_page ) {
                // if on last page, set next page to 0 index
                next_page_num = 0;
            } else if( num_curr < num_about_page ) {
                next_page_num = num_curr + 1;
            } else { 
                // if somehow current page exceeds total, just set next page to 0
                next_page_num = 0;
            }
        } else {
            // if error, just return to 0 index
            // TODO: log here
            next_page_num = 0;
        }
        
        var show_div = "#about"+next_page_num.toString()+"tab";
        var hide_div = "#"+currDivId[0];
        
        changePage( show_div, hide_div );
    });
});