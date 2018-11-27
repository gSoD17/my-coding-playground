function updateOutput() {

    $('iframe').contents().find('html').html('<html><head><style type="text/css">' + $('#cssPanel').val() + '</style></head><body>' + $('#htmlPanel').val() + '</body></html>');

    document.getElementById('outputPanel').contentWindow.eval($('#javascriptPanel').val());

}

updateOutput();

$('.button-coding-view').click(function() {

    let panelId = $(this).attr('id') + 'Panel';

    $(this).toggleClass('button-active');

    $(this).removeClass('button-highlight-effect');

    $('#' + panelId).toggleClass('hidden');

});

$('textarea').on('change keyup paste', function() {

    updateOutput();

})