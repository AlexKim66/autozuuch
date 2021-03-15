import "./bootstrap"
import router from './router'
import App from './App.vue';

new Vue({
    router,
    el: '#app',
    extends: App
});
