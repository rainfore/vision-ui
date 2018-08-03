import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Library from 'library';
import * as directives from 'cloud-ui.vusion/src/base/directives';
import '../src/base/base.css';

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import ThemeSelect from './common/u-theme-select.vue';
import ThemeSelectItem from './common/u-theme-select-item.vue';
// import SidebarGroup from './common/u-sidebar-group.vue';
// import Sidebar from './common/u-sidebar.vue';
// import SidebarItem from './common/u-sidebar-item.vue';
import OverviewItem from './common/u-overview-item.vue';
import Table2 from './common/u-table.vue';
import './common/atom-one-light.css';
import Example from './common/u-example.vue';

const Components = Object.assign({}, Library, {
    GlobalLayout,
    Article,
    ThemeSelect,
    ThemeSelectItem,
    // SidebarGroup,
    // Sidebar,
    // SidebarItem,
    OverviewItem,
    Table2,
    Example,
});

import { installComponents, installDirectives } from 'vusion-utils';
installComponents(Components, Vue);
installDirectives(directives, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: '/vusion-ui/',
        mode: history.pushState ? 'history' : 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
