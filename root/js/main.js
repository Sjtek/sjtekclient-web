var intervalPing = 30000;
var useIframe = false;

$(document).ready(function () {

    if (~window.location.search.indexOf('large')) {
        $('.music-large').show();
        $('.music-small').hide();
    } else {
        $('.music-large').hide();
        $('.music-small').show();
    }

    if (~window.location.search.indexOf('tabs')) {
        $('#tabs').show();
    } else {
        $('#tabs').hide();
    }

    useIframe = ~window.location.search.indexOf('iframe');

    if (useIframe) {
        $('body').css('overflow', 'hidden');
        $('#web-top').css('overflow', 'hidden');
    }

    enableHome();
    refreshData();
    startWebSocket();

    setInterval(function () {
        webSocketPing();
    }, intervalPing);
});

function toggleLight(id) {
    $.get('/api/lights/toggle' + id, function (data) {

    })
}
