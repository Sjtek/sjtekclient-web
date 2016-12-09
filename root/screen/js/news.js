var urls = [
    'http://feeds.nos.nl/nosjournaal',
    'http://9to5mac.com/feed/',
    'http://feeds.feedburner.com/AndroidPolice?format=xml'
];

var index = -1;
var entryCount = 5;

function rotateFeed() {
    index++;
    if (index >= urls.length) index = 0;
    feednami.load(urls[index], function (result) {
        if (result.error) {
            console.log(result.error)
        }
        else {
            $('.sjtek-news-header').text(result.feed.meta.title);
            $('.sjtek-news-list').html('');
            var entries = result.feed.entries;
            var entryLoop = ((entries.length < entryCount) ? entries.length : entryCount);
            for (var i = 0; i < entryLoop; i++) {
                var entry = entries[i];
                $('.sjtek-news-list').append('<li class="list-group-item">' + entry.title + '</li>');
            }
        }
    });
}

