<template>
    <div id="app">
        <year-start v-if="time.yearStart"></year-start>
        <countdown></countdown>
        <router-view></router-view>
    </div>
</template>

<script>
    import YearStart from "./components/YearStart.vue";
    import Countdown from "./components/Countdown.vue";
    import * as api from "./api";
    import * as time from "./time";

    export default {
        components: {
            YearStart,
            Countdown
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
    html, body {
        min-height: 100%;
        height: 100%;
    }
</style>