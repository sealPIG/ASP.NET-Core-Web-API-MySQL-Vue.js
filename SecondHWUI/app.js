const routes = [
  { path: '/Home', component: Home },
  { path: '/Sensor', component: Sensor },
]


const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})


const app = Vue.createApp({});
app.use(router);
app.mount('#app');