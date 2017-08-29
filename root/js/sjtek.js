var webSocket;
var webSocketUri = "wss://sjtek.nl/api/ws";
var refreshing = false;
var albumArt = '';
var weatherIcon = '';
var musicState = 'ERROR';

function refreshData() {
    $.get('https://sjtek.nl/api/info', function (data) {
        console.log("Update");
        console.log(data);
        updatePage(data);
    })
}

function startWebSocket() {
    webSocket = new ReconnectingWebSocket(webSocketUri);
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
    var newAlbum = data.music.albumArt;
    musicState = state;
    if (state == 'PAUSED' || state == 'PLAYING') {
        $('.sjtek-music-title').css('display', 'block')
            .text(data.music.name);
        $('.sjtek-music-artist').css('display', 'block')
            .text(data.music.artist);
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

    if (state == 'PLAYING') {
        $('.icon-play').hide();
        $('.icon-pause').show();
    } else {
        $('.icon-pause').hide();
        $('.icon-play').show();
    }

    $('.sjtek-temp-in').text(data.temperature.insideTemperature + ' °C');
    $('.sjtek-temp-out').text(data.temperature.outsideTemperature + ' °C');

    $('.sjtek-alert-nightmode').css('display', (data.nightmode.enabled ? 'block' : 'none'));

}

function onMusicButtonClick(action) {
    if (action === 'albumart') {
        if (musicState == 'PAUSED' || musicState == 'PLAYING') {
            action = 'toggle';
        } else {
            action = 'start?shuffle&clear&reset';
        }
    }

    $.get('https://sjtek.nl/api/music/' + action, function (data) {
    })
}

function onLightButtonClick(id) {
    $.get('https://sjtek.nl/api/lights/' + id + '/toggle', function (data) {
    })
}

function onRoomButtonClick(name) {
    $.get('https://sjtek.nl/api/room/' + name + '/toggle', function (data) {
    })
}