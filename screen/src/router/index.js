import Vue from 'vue';
import Router from 'vue-router';
import MusicPage from '../pages/MusicPage.vue';
import VideoPage from '../pages/VideoPage.vue';
import MainPage from '../pages/MainPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "Main",
            component: MainPage
        },
        {
            path: '/music',
            name: 'Music',
            component: MusicPage
        },
        {
            path: '/video',
            name: 'Video',
            component: VideoPage
        },
    ]
});