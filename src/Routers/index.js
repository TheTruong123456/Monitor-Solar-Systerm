import { createRouter, createWebHistory } from 'vue-router'

import DashBoard from '../components/DashBoard.vue'
import ListStation from '../components/ListStation.vue'
import ListDevices from '../components/ListDevices.vue'
import Device from '../components/Device.vue'
import Login from '../components/Login.vue'
import AddStation from '../components/AddStation.vue'
import AddDevice from '../components/AddDevice.vue'



const routes = [
  { path: '/dashboard', component: DashBoard},
  { path: '/liststation', component: ListStation},
  { path: '/listdevices', component: ListDevices},
  { path: '/device', component: Device},
  { path: '/addstation', component: AddStation},
  { path: '/adddevice', component: AddDevice},
  { path: '/', component: Login},



]

const router = createRouter({
  history: createWebHistory(),
  routes    
})

export default router
