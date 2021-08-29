$(document).ready(function() {

    $('h1').css({
        'textTransform': 'uppercase',
        'textAlign': 'center'
    });

    $('.navbar li').hover(function() {
        $(this).find('.dropdown').slideToggle(1000);
    });

});