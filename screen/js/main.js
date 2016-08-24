var intervalPing = 30000;
var intervalNews = 30000;
var intervalImgurRotate = 10000;

$(document).ready(function () {
    startWebSocket();
    refreshData();
    rotateFeed();
    rotateImage();

    setInterval(function () {
        rotateFeed()
    }, intervalNews);
    setInterval(function () {
        rotateImage();
    }, intervalImgurRotate);
    setInterval(function () {
        webSocketPing();
    }, intervalPing);
});
