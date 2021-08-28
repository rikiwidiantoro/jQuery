$(document).ready(function() {

    $('h1').css('textTransform', 'uppercase')

    // efek dasar jQuery
    // hide()
    $('#hide').click(function() {
        /* parameter efek :
        1.time/waktu ms = 1000, 2000, 3000, dst 
        2. 'slow'
        3. 'normal'
        4. 'fast' */ 
        $('.kotak').hide(3000);
    });

    // show()
    $('#show').click(function() {
        $('.kotak').show('fast');
    });



    // efek fading
    // fadeOut()
    $('#fadeout').click(function() {
        $('.box1').fadeOut();
        $('.box2').fadeOut(2000);
        $('.box3').fadeOut(4000);
    });

    // fadeIn()
    $('#fadein').click(function() {
        $('.box1').fadeIn();
        $('.box2').fadeIn(2000);
        $('.box3').fadeIn(4000);
    });

    // fadeToggle()
    $('#fadetoggle').click(function() {
        $('.box1').fadeToggle();
        $('.box2').fadeToggle(1000);
        $('.box3').fadeToggle(2000);
    });

    // fadeTo
    $('#fadeto').click(function() {
        $('.box1').fadeTo(0, .2);
        $('.box2').fadeTo(1000, .5);
        $('.box3').fadeTo(2000, .7);
    });


});