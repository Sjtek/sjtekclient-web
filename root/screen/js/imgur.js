var url = 'https://sjtek.nl/api/imgur';
var counter = -1;

function rotateImage() {

    $('.sjtek-image-img').show();
    $('.sjtek-ov').hide();
    $.get(url, function (images) {
        do {
            counter++;

            if (counter >= images.length) {
                counter = 0;
            }
        } while (images[counter].is_album);
        $('.sjtek-image-title').text(images[counter].title);
        $('.sjtek-image-img').attr('src', images[counter].link);
    });


}
