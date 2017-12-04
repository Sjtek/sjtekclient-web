<template>
    <iframe v-bind:src="url" class="web"></iframe>
</template>

<script>
    export default {
        name: "ext-page",
        props: ['url']
    }
</script>

<style scoped>
    .web {
        border: 0;
        width: 100%;
        overflow: hidden;
        height: calc(100vh - 65px);
    }
</style>