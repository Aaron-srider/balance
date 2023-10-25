import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './permission'; // permission control

Vue.config.productionTip = false;

import 'vant/lib/index.css';

import { Loading } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import {Cell, Field, CellGroup} from 'vant';
import {Popup} from 'vant';
import {Button} from 'vant';
import {Notify} from 'vant';
import { NavBar } from 'vant';
import {Icon} from "vant";
import { List } from 'vant';
import { Tag } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant'
import { SwipeCell } from 'vant';
import { ActionSheet } from 'vant';
Vue.use(Loading);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Notify);
Vue.use(Button);
Vue.use(Popup);
Vue.use(Cell);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(List);
Vue.use(Tag);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(ActionSheet);

Vue.use(SwipeCell);

// Vue.prototype.$customFuncs = {
//     getRef,
//     getHtmlElem
// }

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
