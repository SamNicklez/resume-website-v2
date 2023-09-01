import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '/src/views/Home.vue'
import Timeline from '/src/views/Timeline.vue'
import ThreeD from '/src/views/3d.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{path:'/',component: Home},{path:'/timeline',component: Timeline},{path:'/3d',component: ThreeD}]
});


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')