<template>
    <div id="app">
        <nav-header></nav-header>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavHeader from "./components/NavHeader.vue";
    import * as api from "./api";

    export default {
        components: {
            NavHeader
        },
        name: "app",
        mounted() {
            api.start();
        }
    }
</script>

<style>
html, body {
    min-height: 100%;
    height: 100%;
}
</style>