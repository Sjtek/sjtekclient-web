<template>
    <div v-if='!time.expired' class="countdown">
        {{time.clockText}}
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
    .countdown {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #eaeaea;
        font-size: 3em;
        padding: 1em;
    }
</style>