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

    useIframe = ~window.location.search.indexOf('iframe');

    enableHome();
    refreshData();
    startWebSocket();

    setInterval(function () {
        webSocketPing();
    }, intervalPing);
});

function onMenuClick(id) {
    switch (id) {
        case 0:
            enableHome();
            break;
        case 1:
            enableWeb("http://music.sjtek.nl/musicbox_webclient");
            break;
        case 2:
            enableWeb("https://sjtek.nl/sonarr");
            break;
        case 3:
            enableWeb("https://sjtek.nl/transmission");
            break;
    }
}

function enableHome() {
    $('#web').attr('src', 'about:blank');
    $('#web').hide();
    $('#main-container').show();
    $('#sjtekbar').css('margin-bottom', '1em');
}

function enableWeb(url) {
    if (useIframe) {
        $('#web').attr('src', url);
        $('#web').show();
        $('#main-container').hide();
        $('#sjtekbar').css('margin-bottom', '0');
    } else {
        window.location = url;
    }
}

function toggleLight(id) {
    $.get('/api/lights/toggle' + id, function (data) {

    })
}
