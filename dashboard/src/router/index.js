import Vue from 'vue';
import Router from 'vue-router';
import DashboardPage from '../pages/DashboardPage.vue';
import ExtPage from '../pages/ExtPage.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: DashboardPage
        },
        {
            path: '/music',
            component: ExtPage,
            props: {url: 'https://music.sjtek.nl/'}
        },
        {
            path: '/radarr',
            component: ExtPage,
            props: {url: 'https://sjtek.nl/radarr'}
        },
        {
            path: '/sonarr',
            component: ExtPage,
            props: {url: 'https://sjtek.nl/sonarr'}
        },
        {
            path: '/transmission',
            component: ExtPage,
            props: {url: 'https://sjtek.nl/transmission'}
        }

    ]
});