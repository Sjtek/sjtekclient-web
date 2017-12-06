<template>
    <div>
        <countdown></countdown>
        <iframe class="video" src="http://api.tijn.io/radio-2-live"></iframe>
    </div>
</template>

<script>
    import Countdown from "../components/Countdown.vue";

    export default {
        components: {Countdown},
        name: "video-page"
    }
</script>

<style scoped>
    .video {
        border: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        background: #fff;
    }
</style>