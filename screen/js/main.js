var intervalSjtek = 1000;
var intervalNews = 30000;
var intervalImgurUpdate = 3600000;
var intervalImgurRotate = 30000;

$(document).ready(function () {
    refreshData();
    rotateFeed();
    // updateImages();

    setInterval(function () {
        refreshData();
    }, intervalSjtek);
    setInterval(function () {
        rotateFeed()
    }, intervalNews);
    setInterval(function () {
        // updateImages();
    }, intervalImgurUpdate);
    setInterval(function () {
        rotateImage();
    }, intervalImgurRotate)
});
