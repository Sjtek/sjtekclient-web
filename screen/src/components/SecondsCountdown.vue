<template>
    <div class="seconds-countdown">
        <div>
            <p>{{time.clockText}}</p>
        </div>
    </div>
</template>

<script>
    import * as time from '../time';

    export default {
        name: "seconds-countdown",
        data() {
            return {
                time: time.data
            }
        }
    }
</script>

<style scoped>
    .seconds-countdown {
        z-index: 9999;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom right, #ff8e1e, #9fff4b);;
    }

    .seconds-countdown p {
        font-size: 10em;
        font-weight: bold;
    }
</style>