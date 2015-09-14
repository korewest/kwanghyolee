$(document).ready(function() {
    
    var numPhotos = 4;
    var currPhoto = 0;
    
    function changePhoto() {
        
        var nextPhoto = currPhoto + 1;
        
        if( currPhoto == numPhotos ) {
            nextPhoto = 0;
        }
        
        $("#photographySeg").css("opacity", "0.4");
        $("#photographySeg").animate({ "opacity" : "1.0" }, 2500 )
        
        $("#photographySeg").removeClass("photoSegBackground" + currPhoto.toString());
        $("#photographySeg").addClass("photoSegBackground" + nextPhoto.toString());
        
        currPhoto = nextPhoto;
    }
    
    window.setInterval( changePhoto, 5000 );
});