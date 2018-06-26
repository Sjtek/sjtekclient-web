<template>
    <div class="main">
        <div class="main-text">
            <h1>Sjtek op nieuw 2018</h1>
            <p v-if="!time.expired">{{time.clockText}}</p>
            <p v-if="time.expired">Gelukkig nieuwjaar!</p>
        </div>
    </div>
</template>

<script>
    import * as time from '../time';

    export default {
        name: "main-page",
        data() {
            return {
                time: time.data
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom right, #ff8e1e, #9fff4b);;
    }

    .main-text {
        text-align: center;
    }

    .main-text h1 {
        font-size: 4em;
    }

    .main-text p {
        font-size: 3em;
    }
</style>
