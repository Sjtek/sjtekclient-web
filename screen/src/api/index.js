import ReconnectingWebSocket from './reconnecting-websocket.js';

export const data = {
    music: {},
    temperature: {},
    screen: {video: false}
};

export function start(callback) {
    refreshData();
    let webSocket = new ReconnectingWebSocket("wss://sjtek.nl/api/ws");
    webSocket.onopen = function (evt) {
        console.log("websocket connected");
    };
    webSocket.onclose = function (evt) {
        console.log("websocket closed");
    };
    webSocket.onmessage = function (evt) {
        console.log("message");
        const parsed = JSON.parse(evt.data);
        updateData(parsed);
        callback(parsed);
    };
    webSocket.onerror = function (evt) {
        console.log("websocket error");
    };
}

function refreshData() {
    $.get('https://sjtek.nl/api/info', function (obj) {
        updateData(obj);
    });
}

function updateData(json) {
    data.music = json.music;
    data.temperature = json.temperature;
    data.screen = json.screen
}