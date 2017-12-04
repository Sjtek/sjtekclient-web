import Vue from 'vue';
import Router from 'vue-router';
import MusicPage from '../pages/MusicPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/music',
            name: 'Music',
            component: MusicPage
        },
        {
            path: '/video',
            name: 'Video',
            component: MusicPage
        },
    ]
});