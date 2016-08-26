//Enable strict mode for ES6 support
'use strict';

const baseUrl = 'https://sjtek.nl/api/';

function send(command) {
    let url = baseUrl + command;

    httpRequest("GET", url, function(data) {
      console.warn(data.responseText);
        // var obj = JSON.parse(data);
        // $('#tempIn').text(obj.temperature.inside);
        // $('#tempOut').text(obj.temperature.outside);
        // $('#musicStatus').text(obj.music.state);
        // $('#musicTitle').text(obj.music.song.title);
        // $('#musicArtist').text(obj.music.song.artist);
        // $('#quote').text(obj.quotes.quote);
        // parseSonarr(obj);
    });
}

function parseSonarr(data) {
    var episode = data.sonarr.upcoming[0];
    var text = episode.seriesTitle + " S" + episode.seasonInt + "E" + episode.episodeInt + "<br>";
    text += episode.episodeName + "<br>";
    text += episode.airDateUTC;
    document.querySelector("#sonarr").innerHTML = text;
}



/**
 * @function httpRequest - Wrapper for JS XMLHttpRequest
 *
 * @param {string} type - Type of request as a string. Can be either "POST" or "GET"
 * @param {string} url - URL for the request
 * @param {function} callback - Callback function to process data
 *
 * @return {void}
 *
 * @example This will print the data from the example json in the console
 * httpRequest(
    "GET", //Type of request
    "http://myjsonlocation.com/example.json", //Request url
    function(data){
      console.log(data.responseText);
    });
 *
 */
function httpRequest(type, url, callback) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            callback(request);
        }
    };
    request.open(type, url, true);
    request.send();
}
