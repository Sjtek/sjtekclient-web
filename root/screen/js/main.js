var intervalPing = 30000;
var intervalNews = 30000;
var intervalImgurRotate = 10000;

function checkOV() {
    var hour = new Date().getHours();
    if (hour == 7 || hour == 8 || hour == 9) {
        showOV();
    } else {
        hideOV();
        rotateImage();
    }
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('.sjtek-clock').text(h + ':' + m + ':' + s);
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    // add zero in front of numbers < 10
    return i;
}

$(document).ready(function () {
    startWebSocket();
    refreshData();
    rotateFeed();
    checkOV();
    startTime();

    setInterval(function () {
        rotateFeed()
    }, intervalNews);
    setInterval(function () {
        checkOV();
    }, intervalImgurRotate);
    setInterval(function () {
        webSocketPing();
    }, intervalPing);
});



