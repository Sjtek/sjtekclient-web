<template>
    <card :title="'Temperature'">
        <table class="table table-sm">
            <tbody>
            <tr>
                <td>Inside</td>
                <td>{{inside}} °C</td>
            </tr>
            <tr>
                <td>Outside</td>
                <td>{{outside}} °C</td>
            </tr>
            </tbody>
        </table>
    </card>
</template>

<script>
    import Card from "../Card.vue";
    import * as api from "../../api";

    export default {
        name: "temperature",
        components: {Card},
        data() {
            return {
                dataStore: api.data
            }
        },
        computed: {
            inside() {
                return Math.round(this.dataStore.temperature.insideTemperature);
            },
            outside() {
                return Math.round(this.dataStore.temperature.outsideTemperature);
            }
        }
    }
</script>

<style scoped>

</style>