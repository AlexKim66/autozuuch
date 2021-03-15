import Vue from 'vue';
import axios from 'axios';
// import {VueReCaptcha} from 'vue-recaptcha-v3'
import lodash from 'lodash';
import moment from 'moment';
import ElementUI from "element-ui";
import locale from 'element-ui/lib/locale/lang/mn';
import vModal from 'vue-js-modal'
import VueTimeAgo from 'vue-timeago'
import VueCookies from 'vue-cookies'

axios.interceptors.request.use(function (config) {
    config.headers['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    return config;
});

window.Vue = Vue;
window._ = lodash;
window.axios = axios;
window.moment = moment;
Vue.config.productionTip = false;
Vue.config.silent = true;


// Vue.use(VueReCaptcha, {
//     siteKey: '6LeK9X4aAAAAAMRE_zHFT_vQCSJ-kuPPhmeyX6JW', loaderOptions: {
//         useRecaptchaNet: true
//     }
// });
Vue.use(vModal, {componentName: "paper-modal"});
Vue.use(ElementUI, {locale});
Vue.use(VueTimeAgo, {
    name: 'Timeago',
    locale: 'en'
});
Vue.use(VueCookies);
Vue.$cookies.config('1d');
