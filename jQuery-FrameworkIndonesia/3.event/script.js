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

    // event mouseleave()
    $('.mouse').mouseleave(function() {
        $(this).css('backgroundColor', 'skyblue');
    });

    // event mouseenter()
    $('.mouse').mouseenter(function() {
        $(this).css('backgroundColor', 'lime');
    });

    // event keydown()
    $('#keydown').keydown(function() {
        $('#pesandown').text($(this).val());
    });

    // event keyup
    $('#keyup').keyup(function() {
        $('#pesanup').text($(this).val());
    });
});