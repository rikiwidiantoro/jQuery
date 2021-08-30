$(document).ready(function() {
    $('h1').css({
        'textAlign': 'center'
    });

    $('.container').css({
        'border': '1px solid black',
        'padding': '50px 30px',
        'margin': '50px auto',
        'width': '500px',
        'borderRadius': '10px'
    });

    $('#flexCheckDefault').click(function() {
        if( $(this).is(':checked') ) {
            $('#inputPassword').attr('type', 'text');
        } else {
            $('#inputPassword').attr('type', 'password');
        }
    });

});