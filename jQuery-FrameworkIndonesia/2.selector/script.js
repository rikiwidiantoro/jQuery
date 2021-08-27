$(document).ready(function() {
    $('h1').css('textTransform', 'uppercase');

    // selector tag
    $('h2').css('color', 'red');
    $('p').css('color', 'blue');

    // selector class
    $('.judul').css({
        'backgroundColor': 'red',
        'color': 'black'
    });
    $('.paragraf').css('color', 'salmon');

    // selector id
    $('#judul').css('border', '2px solid blue');
    $('#paragraf').css('border', '2px solid green');


    $('*').css('backgroundColor', 'skyblue');

    $('h4:eq(2)').css('backgroundColor', 'yellow');

    $('input:submit').css('backgroundColor', 'green');
    $('input:button').css('padding', '10px');
});