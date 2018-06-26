<template>
    <div id="app">
        <seconds-countdown v-if="time.secondsCountdown && !time.expired"></seconds-countdown>
        <year-start v-if="time.yearStart"></year-start>
        <router-view class="container"></router-view>
    </div>
</template>

<script>
    import YearStart from "./components/YearStart.vue";
    import * as api from "./api";
    import * as time from "./time";
    import SecondsCountdown from "./components/SecondsCountdown.vue";

    export default {
        components: {
            SecondsCountdown,
            YearStart,
        },
        name: "app",
        data() {
            return {
                time: time.data
            }
        },
        mounted() {
            api.start(this.wsCallback);
            time.start();
        },
        methods: {
            wsCallback(data) {
                if (typeof data === 'undefined') {
                    return;
                }
                if (data.music.state === "PLAYING") {
                    this.$router.replace("/music");
                } else if (data.screen.video === true) {
                    this.$router.replace("/video")
                } else if (data.music.state === "PAUSED") {
                    this.$router.replace("/music");
                } else {
                    this.$router.replace("/")
                }
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Ubuntu');

    html, body {
        min-height: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: 'Ubuntu', sans-serif;
    }

    .container {
        position: absolute;
        width: 100%;
        height: 100%;
        margin: 0;
    }
</style>