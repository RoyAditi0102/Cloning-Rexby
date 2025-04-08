import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './tailwind.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix Leaflet's missing icon issue in Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
})

createApp(App).mount('#app')
