/*

photo-change.js

Handles background change of photography segment, for both 
mobile and desktop versions.

*/

$(document).ready(function() {
    
    var numPhotos = 4;
    var currPhoto = 0;
    
    function changePhoto() {
        
        var nextPhoto = currPhoto + 1;
        
        if( currPhoto == numPhotos ) {
            nextPhoto = 0;
        }
        
        $("#photographySeg, #mobile_photography_seg").css("opacity", "0.4");
        $("#photographySeg, #mobile_photography_seg").animate({ "opacity" : "1.0" }, 2500 );
        
        $("#photographySeg, #mobile_photography_seg").removeClass("photoSegBackground" + currPhoto.toString());
        $("#photographySeg, #mobile_photography_seg").addClass("photoSegBackground" + nextPhoto.toString());
        
        currPhoto = nextPhoto;
    }
    
    window.setInterval( changePhoto, 5000 );
});