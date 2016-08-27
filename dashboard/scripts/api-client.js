//Enable strict mode for ES6 support
'use strict';

const baseUrl = 'https://sjtek.nl/api/';

(function setInitialData(){
  httpRequest("GET", "https://sjtek.nl/api", function(data) {

    data = JSON.parse(data.responseText);

    document.querySelector('#tempIn').innerHTML = data.temperature.inside;
    document.querySelector('#tempOut').innerHTML = data.temperature.outside;
    document.querySelector('#musicStatus').innerHTML = data.music.state;
    document.querySelector('#musicTitle').innerHTML = data.music.song.title;
    document.querySelector('#musicArtist').innerHTML = data.music.song.artist.replace(/\;/g, ", ");
    document.querySelector('#quote').innerHTML = data.quotes.quote;

    if (data.sonarr.upcoming[0]) {
      setSonarrData(data.sonarr.upcoming[0]);
    } else {
      document.querySelector("#sonarr").style.display = "none";
    }
  });
})();

function send(command) {
  let url = baseUrl + command;

  httpRequest("GET", url, function(){
    console.log("Command send: ", url);
  });
}


function parseSonarr(episode) {
    var text = episode.seriesTitle + " S" + episode.seasonInt + "E" + episode.episodeInt + "<br>";
    text += episode.episodeName + "<br>";
    text += episode.airDateUTC;
    document.querydocument.querySelector("#sonarr").innerHTML = text;
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
