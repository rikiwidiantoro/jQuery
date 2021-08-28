$(document).ready(function() {
    $('h1').css('textTransform', 'uppercase');

    // efek sliding

    // slideUp()
    $('#slideup').click(function() {
        $('.slide').slideUp();
    });

    // slideDown()
    $('#slidedown').click(function() {
        $('.slide').slideDown(2000);
    });

    // slideToggle()
    $('#slidetoggle').click(function() {
        $('.slide').slideToggle(4000);
    });

    $('#stop').click(function() {
        $('.slide').stop();
    });


});