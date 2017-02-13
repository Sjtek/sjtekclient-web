var webSocket;
var webSocketUri = "wss://sjtek.nl/api/ws";
var refreshing = false;
var albumArt = '';
var weatherIcon = '';
var musicState = 'STATUS_ERROR';

function refreshData() {
    $.get('https://sjtek.nl/api/info', function (data) {
        updatePage(JSON.parse(data));
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
    var newAlbum = data.music.song.albumArt;
    musicState = state;
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

    if (state == 'STATUS_PLAYING') {
        $('.icon-play').hide();
        $('.icon-pause').show();
    } else {
        $('.icon-pause').hide();
        $('.icon-play').show();
    }

    $('.sjtek-temp-in').text(data.temperature.inside + ' °C');
    $('.sjtek-temp-out').text(data.temperature.outside + ' °C');

    $('.sjtek-alert-nightmode').css('display', (data.nightmode.enabled ? 'block' : 'none'));

    // $('.sjtek-light-1').css('color', (data.lights["1"] ? '#000' : '#aaa'));
    // $('.sjtek-light-2').css('color', (data.lights["2"] ? '#000' : '#aaa'));
}

function onMusicButtonClick(action) {
    if (action === 'albumart') {
        if (musicState == 'STATUS_PAUSED' || musicState == 'STATUS_PLAYING') {
            action = 'toggle';
        } else {
            action = 'start';
        }
    }

    $.get('https://sjtek.nl/api/music/' + action, function (data) {
    })
}

function onLightButtonClick(id) {
    $.get('https://sjtek.nl/api/lights/toggle' + id, function (data) {
    })
}