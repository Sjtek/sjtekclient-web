var intervalPing = 30000;

$(document).ready(function () {
    enableHome();
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
}

function enableWeb(url) {
    $('#web').attr('src', url);
    $('#web').show();
    $('#main-container').hide();
}
