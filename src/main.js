import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createRouter, createWebHistory} from 'vue-router'
import Home from '/src/views/Home.vue'
import Timeline from '/src/views/Timeline.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{path:'/ModernResume/',component: Home},{path:'/ModernResume/timeline',component: Timeline}]
});


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).use(router).mount('#app')