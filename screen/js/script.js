var storedAlbum = "";
var refreshing = false;
var countdownEnabled = false;

$(document).ready(function() {
    $(".images").hide();
    if (!countdownEnabled) {
        $('#fissaTitle').hide();
        $('#presentsTitle').hide();
        $('.clockLabel').hide();
        $('.tempbox').css('margin-top', '100%');
    } else {
        $('.tempbox').css('margin-top', '55%');
    }
    setInterval(function() {
        refresh();
    }, 1000);
});

function refresh() {
    if (countdownEnabled) showRemaining();
    if (refreshing) {
        console.log("Still loading");
        return;
    }

    refreshing = true;
    $.get("https://sjtek.nl/api/info", function(data) {
        var obj = JSON.parse(data);
        var artist = obj.music.song.artist;
        var title = obj.music.song.title;
        var album = obj.music.song.album;

        if (!(storedAlbum === album)) {
            var albumArt = obj.music.song.albumArt;
            var artistArt = obj.music.song.artistArt;
            // albumArt = "";
            if (!isEmpty(albumArt)) {
                console.log("Load album " + albumArt);
                $(".musicArt").css("background-image", "url(" + albumArt + ")");
            } else {
                console.log("Load artist " + artistArt);
                $(".musicArt").css("background-image", "url(" + artistArt + ")");
            }
            $(".artistBackground").css("background-image", "url(" + artistArt + ")");
            // updateColor();
        }

        storedAlbum = album;

        $(".infoTitle").text(title);
        $(".infoArtist").text(artist);

        $(".tempInsideText").text(obj.temperature.inside);
        $(".tempOutsideText").text(obj.temperature.outside);
        refreshing = false;
    });
}

function isEmpty(str) {
    return (!str || 0 === str.length);
}

function toggleClock() {
    $(".clock").toggle();
}

var newYearDate = new Date("01/01/2017 0:0 AM");
var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;

function showRemaining() {
    var now = new Date();
    var distance = newYearDate - now;
    if (distance < 0) {
        $(".stuff").hide();
        $(".clock").hide();
        $(".clockLabel").hide();
        $(".images").show(1000);
        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    var secondCountdown = false;
    if (days == 0 && hours == 0 && minutes == 0) {
        secondCountdown = true;
    }

    if (seconds < 10) seconds = "0" + seconds;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;


    if (!secondCountdown) {
        var clockText = "" + hours + " : " + minutes + " : " + seconds;
        $(".clock").text(clockText);
    } else {
        $(".clock").text("" + seconds);
        $(".clock").css("font-size", "5em");
    }

}
// function updateColor(){
//   var sourceImage = document.getElementsByClassName("artistBackground");
//   var colorThief = new ColorThief();
//   var color = colorThief.getColor(sourceImage);
//   console.log(color);
//   document.getElementsByClassName("boxRight").style.backgroundColor = "rgb(" + color + ")";
// }
