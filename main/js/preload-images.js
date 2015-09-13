// Preload images

function preload(arrImg) {
    $(arrImg).each(function() { 
        $('<img/>')[0].src = this;
    });
}

$(window).load(function() {
    preload(['../img/andrew.jpg',
             '../img/annie_sf.jpg',
             '../img/baby_iphone.jpg',
             '../img/dude_with_cigar.jpg',
             '../img/lisha.jpg',
             '../img/max.jpg',
             '../img/pacific_spirit_bw.jpg',
             '../img/south_korea_city.jpg']);
});