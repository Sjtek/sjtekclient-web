var menuIds = [
    "menu-home",
    "menu-music",
    "menu-sonarr",
    "menu-transmission"
];

function onMenuClick(id) {
    resetMenu(id);
    switch (id) {
        case 0:
            enableHome();
            break;
        case 1:
            enableWeb("https://music.sjtek.nl/musicbox_webclient");
            break;
        case 2:
            enableWeb("https://sjtek.nl/sonarr");
            break;
        case 3:
            enableWeb("https://sjtek.nl/transmission");
            break;
        case 4:
            enableWeb("https://sjtek.nl/radarr");
            break;
    }
}

function resetMenu(id) {
    menuIds.forEach(function (item, index) {
        $(item).removeClass('active');
    });
    $(menuIds[id]).addClass('active');
}

function enableHome() {
    $('#web-top').attr('src', 'about:blank')
        .hide();
    $('#main-container').show();
    $('#sjtekbar').css('margin-bottom', '1em');
}

function enableWeb(url) {
    if (useIframe) {
        $('#web-top').attr('src', url)
            .show();
        $('#main-container').hide();
        $('#sjtekbar').css('margin-bottom', '0');
    } else {
        window.location = url;
    }
}
