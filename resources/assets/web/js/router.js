import Router from "vue-router";

Vue.use(Router);

let base = "/";

if (location.pathname && location.pathname != "/") {
    base = location.pathname
        .split("/")
        .slice(0, -1)
        .join("/");
}

let routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('./pages/home/index.vue'),
    },
    {
        name: 'contact',
        path: '/contact',
        component: () => import('./pages/contact/index.vue'),
    },
];

export default new Router({
    base,
    routes,
    history: true,
    linkActiveClass: 'active'
})
