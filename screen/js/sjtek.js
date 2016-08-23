var webSocket;
var webSocketUri = "wss://sjtek.nl/api/ws";
var refreshing = false;
var albumArt = '';
var weatherIcon = '';

function refreshData() {
    if (refreshing) {
        $('.sjtek-alert-error').css('display', 'block');
        return;
    } else {
        $('.sjtek-alert-error').css('display', 'none');
    }

    refreshing = true;
    $.get('https://sjtek.nl/api/info', function (data) {
        refreshing = false;
        updatePage(JSON.parse(data));
    })

}

function startWebSocket() {
    webSocket = new WebSocket(webSocketUri);
    webSocket.onopen = function (evt) {
        onOpen(evt)
    };
    webSocket.onclose = function (evt) {
        onClose(evt)
    };
    webSocket.onmessage = function (evt) {
        onMessage(evt)
    };
    webSocket.onerror = function (evt) {
        onError(evt);
    };
}

function webSocketPing() {
    webSocket.send("ping");
}

function onOpen(event) {
    console.log("Web socket connected");
    $('.sjtek-alert-error').css('display', 'none');
}

function onClose(event) {
    console.log("Web socket closed");
    $('.sjtek-alert-error').css('display', 'block');
}

function onMessage(event) {
    updatePage(JSON.parse(event.data));
    $('.sjtek-alert-error').css('display', 'none');
}

function onError(event) {
    console.log("Web socket error: " + event);
    $('.sjtek-alert-error').css('display', 'block');
}

function updatePage(data) {
    var state = data.music.state;
    var newAlbum = data.music.song.albumArt;

    if (state == 'STATUS_PAUSED' || state == 'STATUS_PLAYING') {
        $('.sjtek-music-title').css('display', 'block')
            .text(data.music.song.title);
        $('.sjtek-music-artist').css('display', 'block')
            .text(data.music.song.artist);
        $('.sjtek-music-status').css('display', 'none');

        if (!(albumArt === newAlbum)) {
            console.log('Update album ' + newAlbum);
            albumArt = newAlbum;
            $('.sjtek-music-cover').attr('src', albumArt);
        }

    } else {
        albumArt = '';
        $('.sjtek-music-title').css('display', 'none');
        $('.sjtek-music-artist').css('display', 'none');
        $('.sjtek-music-cover').attr('src', 'img/empty.png');
        $('.sjtek-music-status').css('display', 'block');
    }

    $('.sjtek-temp-in').text(data.temperature.inside + ' °C');
    $('.sjtek-temp-out').text(data.temperature.outside + ' °C');

    var newWeatherIcon = data.temperature.icon;
    if (!(weatherIcon === newWeatherIcon)) {
        console.log('Update weather icon ', newWeatherIcon);
        weatherIcon = newWeatherIcon;
        $('.sjtek-temp-icon').attr('src', weatherIcon)
            .css('display', 'block');
    }

    $('.sjtek-alert-nightmode').css('display', (data.nightmode.enabled ? 'block' : 'none'));

    $('.sjtek-light-1').css('color', (data.lights["1"] ? '#000' : '#aaa'));
    $('.sjtek-light-2').css('color', (data.lights["2"] ? '#000' : '#aaa'));
}