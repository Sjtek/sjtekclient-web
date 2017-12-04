<template>
    <div class="container">
        <div class="row">

        </div>
        <div class="row justify-content-center">
            <div class="col-md">
                <lights></lights>
            </div>
            <div class="col-md">
                <temperature></temperature>
            </div>
            <div class="col-md">
                <music></music>
            </div>
        </div>
    </div>
</template>

<script>
    import Card from "../components/Card.vue";
    import Lights from "../components/cards/Lights.vue";
    import Music from "../components/cards/Music.vue";
    import Temperature from "../components/cards/Temperature.vue";

    export default {
        components: {Music, Card, Lights, Temperature},
        name: "overview",
    }
</script>

<style scoped>
    .container {
        margin-top: 1em;
    }
</style>