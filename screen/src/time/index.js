const countDownDate = new Date("2017-12-31T23:00:00Z");
const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

export const data = {
    expired: true,
    clockText: "00:00:00",
    secondsCountdown: false,
    yearStart: false,
};


export function start() {
    console.log("Start tick");
    setInterval(tick, 1000);
}

function tick() {
    let distance = countDownDate - new Date();

    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    data.secondsCountdown = (days === 0 && hours === 0 && minutes === 0);
    data.expired = distance < 0;
    data.yearStart = data.expired && distance > -60000;

    if (seconds < 10) seconds = "0" + seconds;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;

    if (data.secondsCountdown) {
        data.clockText = seconds;
    } else {
        data.clockText = "" + hours + " : " + minutes + " : " + seconds;
    }

    console.log(JSON.stringify(data) + ' ' + distance);
}
