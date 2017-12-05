<template>
    <div>
        <div :style="{ 'background-image' : 'url(' + dataStore.music.artistArt + ')' }" class="music-background">

        </div>
        <div class="music-container">
            <div class="music-info">
                <img class="info-album" :src="dataStore.music.albumArt">
                <p class="track-info artist">{{dataStore.music.artist}}</p>
                <p class="track-info title">{{dataStore.music.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import * as api from "../api";

    export default {
        name: "music-page",
        data() {
            return {
                dataStore: api.data,
            }
        }
    }
</script>

<style scoped>

    /*noinspection CssOptimizeSimilarProperties*/
    .music-background {
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: blur(8px);
        transform: scale(1.025);
    }

    .music-container {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .music-info {
        height: 700px;
        width: 500px;
    }

    .info-album {
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    .track-info {
        color: white;
        text-align: center;
        text-shadow: 1px 1px 20px black;
    }

    .artist {
        font-size: 2em;
    }

    .title {
        font-size: 1.5em;
    }
</style>