import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

new Vue({
    el: "#app",
    template: '<app></app>',
    components: {App},
    router
});
