// $('.button-coding-view').hover(function() {

//     $(this).addClass('button-highlight-effect');

// }, function() {

//     $(this).removeClass('button-highlight-effect');

// });

$('.button-coding-view').click(function() {

    let panelId = $(this).attr('id') + 'Panel';

    $(this).toggleClass('button-active');

    $(this).removeClass('button-highlight-effect');

    $('#' + panelId).toggleClass('hidden');

});

$('textarea').on('change keyup paste', function() {

    $('iframe').contents().find('html').html($('#htmlPanel').val());

})