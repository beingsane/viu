import { Vue } from 'meteor/akryum:vue';
import router from '/imports/client/router.js';
import AppLayout from '/imports/client/views/AppLayout.vue';
import VueHead from 'vue-head';
import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/monokai.css';

Vue.use(VueHighlightJS);
Vue.use(VueHead);

Meteor.startup(() => {
    new Vue({
        router: router.start(),
        render: h => h(AppLayout),
    }).$mount('app');
});