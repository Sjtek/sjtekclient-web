<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{title}}</h4>
            <slot>Card content</slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "card",
        props: ['title']
    }
</script>

<style scoped>
    .card {
        margin-bottom: 0.75em;
    }
</style>