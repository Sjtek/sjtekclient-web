<template>
    <div v-if='!time.expired' class="countdown-container">
        <div class="countdown-background"></div>
        <div class="countdown-text">{{time.clockText}}</div>
    </div>
</template>

<script>
    import * as time from "../time";

    export default {
        name: "countdown",
        data() {
            return {
                time: time.data
            }
        }
    }
</script>

<style scoped>
    .countdown-container {
        position: absolute;
        top: 0;
        width: 300px;
        height: 150px;
        right: 0;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center
    }

    .countdown-text {
        position: absolute;
        font-size: 3em;
        text-align: center;
        color: #fff;
        vertical-align: center;
    }

    .countdown-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.74);
    }

</style>