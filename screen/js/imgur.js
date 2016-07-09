var url = 'https://sjtek.nl/api/imgur';
var counter = -1;

function rotateImage() {

    $.get(url, function (images) {
        counter++;
        if (counter >= images) {
            counter = 0;
        }
        $('.sjtek-image-title').text(images[counter].title);
        $('.sjtek-image-img').attr('src', images[counter].link);
    });


}
