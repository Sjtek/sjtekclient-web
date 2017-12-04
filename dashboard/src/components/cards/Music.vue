<template>
    <card :title="'Music'">
        <div class="row">
            <div class="col-sm-5">
                <img v-bind:src="dataStore.music.albumArt" class="img-fluid">
            </div>
            <div class="col-sm-7">
                <h4 class="song-title">{{dataStore.music.name}}</h4>
                <h5 class="song-artist">{{dataStore.music.artist}}</h5>
                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-secondary">
                        <i class="fa fa-step-backward" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <i class="fa fa-play icon-play" aria-hidden="true"></i>
                    </button>
                    <button type="button" class="btn btn-secondary">
                        <i class="fa fa-step-forward" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    </card>
</template>

<script>
    import Card from '../Card.vue';
    import * as api from '../../api';

    export default {
        name: "music",
        components: {Card},
        data() {
            return {
                dataStore: api.data,
            }
        }
    }
</script>

<style scoped>
    .song-artist {
        font-size: 1.2em;
    }

    .song-title {
        font-size: 1em;
    }
</style>