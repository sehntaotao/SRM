import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from  'axios'

// import '@assets/scss/reset.scss'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import {
  Button, Select, Radio, Container, Aside, Header, Main, Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownItem, DropdownMenu,
  Row, Col, Card,Table,TableColumn} 
  from 'element-ui';                                


// Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Button);
Vue.component(Select.name,Select);
Vue.component(Radio.name,Radio);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);


Vue.prototype.$http = http
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
