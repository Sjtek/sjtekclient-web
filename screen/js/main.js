var intervalSjtek = 1000;
var intervalNews = 30000;
var intervalImgurRotate = 10000;

$(document).ready(function () {
    refreshData();
    rotateFeed();
    rotateImage();

    setInterval(function () {
        refreshData();
    }, intervalSjtek);
    setInterval(function () {
        rotateFeed()
    }, intervalNews);
    setInterval(function () {
        rotateImage();
    }, intervalImgurRotate)
});
