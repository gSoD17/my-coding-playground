$('.button-coding-view').hover(function() {

    $(this).addClass('button-highlight-effect');

}, function() {

    $(this).removeClass('button-highlight-effect');

});

$('.button-coding-view').click(function() {

    $(this).toggleClass('button-active');

    $(this).removeClass('button-highlight-effect');

});

$('textarea').on('change keyup paste', function() {

    $('iframe').contents().find('html').html($('#coding-space-html').val());

})