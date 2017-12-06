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
            api.start();
            time.start();

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