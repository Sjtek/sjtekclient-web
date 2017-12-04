<template>
    <card :title="'Lights'">
        <div class="list-group">
            <a v-on:click="sendToggle(1)" class="list-group-item list-group-item-action">Livingroom</a>
            <a v-on:click="sendToggle(2)" class="list-group-item list-group-item-action">Couch</a>
            <a v-on:click="sendToggle(3)" class="list-group-item list-group-item-action">Kitchen</a>
            <a v-on:click="sendToggle(4)" class="list-group-item list-group-item-action">Hallway</a>
            <a v-on:click="sendToggle(5)" class="list-group-item list-group-item-action">Dishwasher</a>
        </div>
    </card>
</template>

<script>
    import Card from "../Card.vue";

    export default {
        name: "lights",
        components: {Card},
        methods: {
            sendToggle(id) {
                $.get('https://sjtek.nl/api/lights/' + id + '/toggle', function (data) {

                })
            }
        }
    }
</script>

<style scoped>

</style>