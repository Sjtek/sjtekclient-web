var url = 'https://api.imgur.com/3/gallery/random/random/0';
var secretUrl = 'https://sjtek.nl/private/screen.json';
var imageData;
var counter = -1;
var clientSecret;

function rotateImage() {
    if (!imageData) {
        console.log('No image data');
        return;
    }
    console.log('Rotating image');
    counter++;
    if (counter >= imageData.length) {
        counter = 0;
    }

    $('.sjtek-image-title').text(imageData[counter].title);
    $('.sjtek-image-img').attr('src', imageData[counter].link);
}

function updateImages() {
    console.log('Updating images');

    $.get(secretUrl, function (data) {
        console.log('Client secret fetched');
        clientSecret = data['imgurClientId'];

        $.ajax({
            url: url,
            type: 'GET',

            success: function (data) {
                console.log(data);
                if (data.status == 200) {
                    imageData = JSON.parse(data);
                    rotateImage();
                } else {
                    console.log('Imgur error');
                }
            }
        });
    });
}