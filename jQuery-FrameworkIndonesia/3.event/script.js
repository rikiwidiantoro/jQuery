$(document).ready(function() {
    $('h1').css('textTransform', 'uppercase');
    $('hr').css({
        'borderWidth': '2px',
        'backgroundColor': 'black'
    });


    // event click()
    $('#click').click(function() {
        alert('saya sedang belajar jQuery');
    });

    // event double click / dblclick()
    $('#dblclick').dblclick(function() {
        $(this).css('backgroundColor', 'red');
    });
});