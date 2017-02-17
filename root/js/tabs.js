var tabIds = [
    '#tab-weather',
    '#tab-news',
    '#tab-bus'
];

function tabClick(id) {
    resetTabs(id);
    switch (id) {
        case 0:
            switchTabIframe('https://darksky.net/forecast/51.5127,5.4926/ca24/en');
            break;
        case 1:
            switchTabIframe('http://nos.nl');
            break;
        case 2:
            switchTabIframe('https://ovzoeker.nl/halte/435df6225ac2c274e694a5e4827e0c66');
            break;
    }
}

function switchTabIframe(url) {
    $("#web-tab").attr('src', url);
}

function resetTabs(id) {
    tabIds.forEach(function (item, index) {
        $(item).removeClass('active');
    });
    $(tabIds[id]).addClass('active');
}
