$(document).ready(function() {

    $('h1').css('textTransform', 'uppercase')

    // efek dasar jQuery
    $('#hide').click(function() {
        /* parameter efek :
        1.time/waktu ms = 1000, 2000, 3000, dst 
        2. 'slow'
        3. 'normal'
        4. 'fast' */ 
        $('.kotak').hide(3000);
    });
    $('#show').click(function() {
        $('.kotak').show('fast');
    });


    // efek fading
    $('#fadeout').click(function() {
        
    })


});