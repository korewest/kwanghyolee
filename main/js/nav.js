$(document).ready(function() {
    
    // Scroll to proper sections indicated by nav block
    $('.navblock').click(function() {
        var div_scroll = $(this).attr('id');
        $('html,body').animate({
            scrollTop: $("#" + div_scroll + "Seg").offset().top - 74 /* Offset to match seg */
        }, 500);
    });
    
    $('#khl').click(function() {
        $('html,body').animate({
            scrollTop: $("#andrew_img").offset().top }, 500);
    });
});